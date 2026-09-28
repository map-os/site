"use client"

import { useActionState, useEffect } from "react"
import { Loader2, Mail, ShieldCheck } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Reveal } from "@/components/reveal"
import { subscribeNewsletter, type FormState } from "@/app/actions"

const initial: FormState = { status: "idle" }

export function Newsletter() {
  const [state, action, pending] = useActionState(subscribeNewsletter, initial)

  useEffect(() => {
    if (state.status === "success") toast.success(state.message)
    if (state.status === "error") toast.error(state.message)
  }, [state])

  return (
    <section aria-labelledby="newsletter-title" className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-3xl border bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12 lg:flex-row lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <h2 id="newsletter-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
                Fique por dentro das novidades
              </h2>
              <p className="mt-2 text-muted-foreground">
                Receba avisos de novas versões, recursos e dicas do Map-OS no seu e-mail.
              </p>
            </div>
            <form action={action} className="w-full max-w-md">
              <input type="text" name="nickname" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                  <label htmlFor="newsletter-email" className="sr-only">
                    Seu e-mail
                  </label>
                  <Input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    defaultValue={state.values?.email ?? ""}
                    placeholder="seu@email.com"
                    aria-invalid={!!state.errors?.email}
                    className="h-11 bg-background pl-9"
                  />
                </div>
                <Button type="submit" disabled={pending} className="h-11 px-5">
                  {pending && <Loader2 className="animate-spin" data-icon="inline-start" />}
                  Inscrever-se
                </Button>
              </div>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground lg:justify-start">
                <ShieldCheck className="size-3.5" />
                Seus dados estão seguros. Não compartilhamos com terceiros.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
