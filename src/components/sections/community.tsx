import { ArrowUpRight } from "lucide-react"
import { BrandIcon } from "@/components/brand-icon"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { communityStats, social } from "@/content/site"

export function Community() {
  return (
    <section id="comunidade" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Comunidade"
          title="Faça parte da comunidade global"
          description="Contribua com código, reporte problemas, tire dúvidas e troque experiências com usuários do mundo todo."
        />

        <Reveal>
          <dl className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {communityStats.map((s) => (
              <div key={s.label} className="flex flex-col rounded-2xl border bg-card p-6">
                <dt className="order-2 mt-1 text-sm text-muted-foreground">{s.label}</dt>
                <dd className="text-2xl font-bold sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {social.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center justify-between gap-3 rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex items-center gap-3 font-medium">
                  <BrandIcon name={s.icon} className="size-5" />
                  {s.name}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
