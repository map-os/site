import Image from "next/image"
import { ArrowRight, Cloud, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { heroStats, links } from "@/content/site"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div aria-hidden className="absolute top-0 left-1/2 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="h-7 gap-2 rounded-full bg-background/60 px-3 backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            Open Source
          </Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Sistema de Gestão de <span className="text-gradient">Ordens de Serviço</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl">
            Controle completo de ordens de serviço, vendas e clientes. Simples, intuitivo e totalmente
            gratuito.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href={links.releases} target="_blank" rel="noopener noreferrer">
                <Download data-icon="inline-start" />
                Baixar Grátis
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
              <a href={links.hosting} target="_blank" rel="noopener noreferrer">
                <Cloud data-icon="inline-start" />
                Hospedar
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </div>

          <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold sm:text-3xl">{s.value}</dd>
                <dd className="text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border bg-card/60 p-2 shadow-2xl shadow-primary/10 ring-1 ring-foreground/5 backdrop-blur">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
              <span className="ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-xs text-muted-foreground sm:block">
                seu-dominio.com.br/mapos
              </span>
            </div>
            <Image
              src="/img/slider/01.jpg"
              alt="Dashboard do Map-OS com agenda e estatísticas do sistema"
              width={1030}
              height={755}
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="w-full rounded-xl border"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
