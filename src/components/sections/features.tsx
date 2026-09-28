import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { features } from "@/content/site"
import { cn } from "@/lib/utils"

export function Features() {
  return (
    <section id="recursos" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Recursos"
          title="Tudo que você precisa em um só lugar"
          description="Módulos pensados para o dia a dia de assistências técnicas, prestadores de serviço e pequenos comércios."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.06}
              className={cn([0, 3, 5].includes(i) && "lg:col-span-2")}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div aria-hidden className="absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
