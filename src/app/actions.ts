"use server"

import { headers } from "next/headers"
import { Resend } from "resend"
import { z } from "zod"

export type FormState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Record<string, string[] | undefined>
  /** Valores enviados, devolvidos em caso de erro para repopular o formulário */
  values?: Record<string, string>
}

const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, number[]>()

async function isRateLimited() {
  const h = await headers()
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown"
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > RATE_LIMIT
}

async function sendMail(subject: string, text: string, replyTo?: string) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.error("RESEND_API_KEY ou CONTACT_TO_EMAIL não configurados")
    return false
  }
  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "Map-OS <onboarding@resend.dev>",
    to: to.split(",").map((e) => e.trim()),
    subject,
    text,
    replyTo,
  })
  if (error) console.error("Falha ao enviar e-mail:", error)
  return !error
}

const sendError = "Não foi possível enviar agora. Tente novamente mais tarde."
const rateLimitError = "Muitas tentativas. Aguarde alguns minutos."

function formValues(formData: FormData) {
  const values: Record<string, string> = {}
  for (const [k, v] of formData) if (typeof v === "string" && !k.startsWith("$")) values[k] = v
  return values
}

const supporterSchema = z.object({
  company: z.string().trim().min(2, "Informe o nome da empresa").max(120),
  website: z.union([z.literal(""), z.url("URL inválida").max(200)]),
  name: z.string().trim().min(2, "Informe seu nome").max(120),
  phone: z.string().trim().max(30),
  email: z.email("E-mail inválido").max(200),
  message: z.string().trim().max(2000),
})

export async function sendSupporterRequest(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: bots preenchem o campo oculto
  if (formData.get("nickname")) return { status: "success", message: "Solicitação enviada!" }

  const values = formValues(formData)
  const parsed = supporterSchema.safeParse({
    company: formData.get("company") ?? "",
    website: String(formData.get("website") ?? "").trim(),
    name: formData.get("name") ?? "",
    phone: formData.get("phone") ?? "",
    email: String(formData.get("email") ?? "").trim(),
    message: formData.get("message") ?? "",
  })
  if (!parsed.success) {
    return {
      status: "error",
      message: "Verifique os campos destacados.",
      errors: z.flattenError(parsed.error).fieldErrors,
      values,
    }
  }
  if (await isRateLimited()) {
    return { status: "error", message: rateLimitError, values }
  }

  const d = parsed.data
  const ok = await sendMail(
    `[Map-OS] Novo interesse de apoiador: ${d.company}`,
    [
      `Empresa: ${d.company}`,
      `Site: ${d.website || "-"}`,
      `Nome: ${d.name}`,
      `WhatsApp/Telefone: ${d.phone || "-"}`,
      `E-mail: ${d.email}`,
      "",
      "Mensagem:",
      d.message || "-",
    ].join("\n"),
    d.email,
  )
  return ok
    ? { status: "success", message: "Solicitação enviada! Entraremos em contato em breve." }
    : { status: "error", message: sendError, values }
}

const newsletterSchema = z.object({ email: z.email("E-mail inválido").max(200) })

export async function subscribeNewsletter(_prev: FormState, formData: FormData): Promise<FormState> {
  if (formData.get("nickname")) return { status: "success", message: "Inscrição realizada!" }

  const values = formValues(formData)
  const parsed = newsletterSchema.safeParse({ email: String(formData.get("email") ?? "").trim() })
  if (!parsed.success) {
    return {
      status: "error",
      message: "Informe um e-mail válido.",
      errors: z.flattenError(parsed.error).fieldErrors,
      values,
    }
  }
  if (await isRateLimited()) {
    return { status: "error", message: rateLimitError, values }
  }

  const ok = await sendMail(
    "[Map-OS] Nova inscrição na newsletter",
    `E-mail: ${parsed.data.email}`,
    parsed.data.email,
  )
  return ok
    ? { status: "success", message: "Inscrição realizada! Obrigado." }
    : { status: "error", message: sendError, values }
}
