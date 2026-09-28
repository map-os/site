import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)}>
      <p className="text-sm font-semibold tracking-widest text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-pretty text-muted-foreground">{description}</p>
      )}
    </Reveal>
  )
}
