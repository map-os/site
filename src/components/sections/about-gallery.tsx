"use client"

import Image from "next/image"
import { useState } from "react"
import { aboutHighlights } from "@/content/site"
import { cn } from "@/lib/utils"

export function AboutGallery() {
  const [active, setActive] = useState(0)
  const current = aboutHighlights[active]

  return (
    <div className="mt-12 grid items-center gap-6 lg:grid-cols-[22rem_1fr] lg:gap-12">
      <div role="tablist" aria-label="Destaques do sistema" className="flex flex-col gap-3">
        {aboutHighlights.map((h, i) => (
          <button
            key={h.title}
            type="button"
            role="tab"
            id={`about-tab-${i}`}
            aria-selected={active === i}
            aria-controls="about-panel"
            onClick={() => setActive(i)}
            className={cn(
              "rounded-xl border p-5 text-left transition-colors",
              active === i ? "border-primary/50 bg-primary/5 dark:bg-primary/10" : "bg-card hover:bg-muted",
            )}
          >
            <span className="block font-semibold">{h.title}</span>
            <span className="mt-1 block text-sm text-muted-foreground">{h.description}</span>
          </button>
        ))}
      </div>
      <div
        id="about-panel"
        role="tabpanel"
        aria-labelledby={`about-tab-${active}`}
        className="overflow-hidden rounded-2xl border bg-muted/50 p-2 shadow-xl shadow-primary/5"
      >
        <Image
          key={current.image}
          src={current.image}
          alt={`${current.title} — captura de tela do Map-OS`}
          width={1030}
          height={755}
          sizes="(min-width: 1024px) 800px, 100vw"
          className="aspect-[4/3] w-full animate-in rounded-xl object-cover object-left-top duration-500 fade-in"
        />
      </div>
    </div>
  )
}
