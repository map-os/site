import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="size-4" /> Voltar ao início
      </Link>
      <h1 className="mt-6 text-4xl font-bold tracking-tight">{title}</h1>
      <article className="prose mt-10 max-w-none prose-neutral dark:prose-invert prose-headings:tracking-tight">
        {children}
      </article>
    </div>
  )
}
