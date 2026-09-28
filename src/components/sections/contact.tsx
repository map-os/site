"use client"

import { useActionState, useEffect } from "react"
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { sendSupporterRequest, type FormState } from "@/app/actions"
import { contact, links, maintainers } from "@/content/site"

const initial: FormState = { status: "idle" }

export function Contact() {
  const [state, action, pending] = useActionState(sendSupporterRequest, initial)

  useEffect(() => {
    if (state.status === "success") toast.success(state.message)
    if (state.status === "error") toast.error(state.message)
  }, [state])

  const err = (field: string) => state.errors?.[field]?.[0]
  const val = (field: string) => state.values?.[field] ?? ""

  return (
    <section id="contato" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contato"
          title="Seja um Apoiador"
          description="Quer apoiar o projeto e divulgar sua marca para a comunidade Map-OS? Preencha o formulário e entraremos em contato."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form action={action} noValidate className="grid gap-5 rounded-3xl border bg-card p-6 sm:grid-cols-2 sm:p-8">
              <input type="text" name="nickname" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              <Field id="company" defaultValue={val("company")} label="Nome da empresa" required error={err("company")} />
              <Field id="website" defaultValue={val("website")} label="Site da empresa" type="url" placeholder="https://" error={err("website")} />
              <Field id="name" defaultValue={val("name")} label="Seu nome" required error={err("name")} />
              <Field id="phone" defaultValue={val("phone")} label="WhatsApp / Telefone" type="tel" error={err("phone")} />
              <Field id="email" defaultValue={val("email")} label="E-mail profissional" type="email" required error={err("email")} className="sm:col-span-2" />
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message">Mensagem / Interesse</Label>
                <Textarea id="message" name="message" defaultValue={val("message")} rows={4} placeholder="Conte um pouco sobre como deseja apoiar o projeto" />
              </div>
              <Button type="submit" size="lg" disabled={pending} className="h-12 text-base sm:col-span-2">
                {pending ? <Loader2 className="animate-spin" data-icon="inline-start" /> : <Send data-icon="inline-start" />}
                Enviar solicitação
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-3xl border bg-card p-6 sm:p-8">
                <h3 className="font-semibold">Mantenedores</h3>
                <ul className="mt-4 space-y-4">
                  {maintainers.map((m) => (
                    <li key={m.email} className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                        {m.name[0]}
                      </span>
                      <span>
                        <span className="block font-medium">{m.name}</span>
                        <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
                          <Mail className="size-3.5" />
                          {m.email}
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 rounded-3xl border bg-card p-6 text-sm sm:p-8">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-4 text-primary" />
                  {contact.location}
                </p>
                <a
                  href={links.whatsappContact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  {contact.phone} (WhatsApp)
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  required,
  error,
  className,
  ...props
}: React.ComponentProps<"input"> & { id: string; label: string; error?: string }) {
  return (
    <div className={`grid gap-2 ${className ?? ""}`}>
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-primary">*</span>}
      </Label>
      <Input
        id={id}
        name={id}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="h-11"
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
