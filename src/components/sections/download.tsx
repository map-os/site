import { Check, Code2, Download as DownloadIcon, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { links, release } from "@/content/site"

export function Download() {
  return (
    <section id="download" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Download"
          title="Baixe e comece a usar agora"
          description="Instale no seu próprio servidor, sem mensalidades e sem limitações."
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-3xl border bg-card p-8 shadow-xl shadow-primary/5 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Package className="size-8" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-bold">Map-OS {release.version}</h3>
                  <Badge variant="secondary">Última versão</Badge>
                </div>
                <p className="mt-1 text-muted-foreground">
                  {release.description} · <strong className="text-foreground">{release.note}</strong>
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" className="h-12 text-base">
                <a href={links.releases} target="_blank" rel="noopener noreferrer">
                  <DownloadIcon data-icon="inline-start" />
                  Versão estável
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 text-base">
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  <Code2 data-icon="inline-start" />
                  Código-fonte
                </a>
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t pt-6 text-sm text-muted-foreground">
              {release.perks.map((p) => (
                <li key={p} className="flex items-center gap-1.5">
                  <Check className="size-4 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
