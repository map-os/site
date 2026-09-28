import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { AboutGallery } from "@/components/sections/about-gallery"
import { aboutStats } from "@/content/site"

export function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Sobre"
          title="Conheça o Sistema"
          description="O Map-OS nasceu para simplificar a rotina de quem presta serviços. Hoje é usado por milhares de empresas em diversos países."
        />

        <Reveal>
          <dl className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {aboutStats.map((s) => (
              <div key={s.label} className="flex flex-col rounded-2xl border bg-card p-6 text-center">
                <dt className="order-2 text-sm text-muted-foreground">{s.label}</dt>
                <dd className="text-gradient text-3xl font-bold sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <AboutGallery />
        </Reveal>
      </div>
    </section>
  )
}
