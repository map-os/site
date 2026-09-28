import type { MetadataRoute } from "next"

const base = "https://mapos.com.br"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/politica-privacidade`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/termos-de-uso`, changeFrequency: "yearly", priority: 0.3 },
  ]
}
