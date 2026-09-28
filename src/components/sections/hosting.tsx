import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { hostingPerks, links } from "@/content/site"

export function Hosting() {
  return (
    <section id="hospedar" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-6 py-14 text-white sm:px-12 lg:px-16">
            <div aria-hidden className="absolute -top-24 -right-24 size-96 rounded-full bg-primary/40 blur-[100px]" />
            <div aria-hidden className="absolute -bottom-32 -left-20 size-80 rounded-full bg-primary/20 blur-[100px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold tracking-widest text-primary uppercase">Hospedagem oficial</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Map-OS online é na SysGo!
                </h2>
                <p className="mt-4 text-lg text-zinc-300">
                  Não quer se preocupar com servidor? A SysGo é parceira oficial de hospedagem e suporte do
                  Map-OS. Seu sistema pronto para usar, com segurança e sem complicação.
                </p>
                <Button asChild size="lg" className="mt-8 h-12 px-6 text-base">
                  <a href={links.hosting} target="_blank" rel="noopener noreferrer">
                    Contratar hospedagem
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex h-16 items-center">
                  <span className="rounded-lg bg-white px-4 py-2">
                    <Image src="/img/apoiador/sysgo.png" alt="SysGo" width={160} height={53} className="h-9 w-auto" />
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {hostingPerks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 shrink-0 text-primary" />
                      <span className="text-zinc-100">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
