import Image from "next/image"
import { HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { activeSupporters } from "@/content/supporters"

export function Supporters() {
  const list = activeSupporters()

  return (
    <section id="apoio" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Apoiadores"
          title="Quem apoia o Map-OS"
          description="Empresas e pessoas que acreditam no projeto e ajudam a mantê-lo gratuito e em constante evolução."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {list.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08} className="w-full max-w-md">
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center rounded-2xl border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex h-24 w-full items-center justify-center rounded-xl bg-white p-4 dark:bg-white/95">
                  <Image src={s.logo} alt={s.name} width={240} height={80} className="max-h-16 w-auto object-contain" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </a>
            </Reveal>
          ))}

          <Reveal delay={list.length * 0.08} className="w-full max-w-md">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed p-8 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HeartHandshake className="size-7" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">Seja um Apoiador</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Divulgue sua marca para milhares de usuários e ajude a fortalecer o open source brasileiro.
              </p>
              <Button asChild className="mt-6">
                <a href="#contato">Quero apoiar</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
