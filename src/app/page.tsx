import { Hero } from "@/components/sections/hero"
import { Supporters } from "@/components/sections/supporters"
import { Features } from "@/components/sections/features"
import { About } from "@/components/sections/about"
import { Hosting } from "@/components/sections/hosting"
import { Download } from "@/components/sections/download"
import { Community } from "@/components/sections/community"
import { Newsletter } from "@/components/sections/newsletter"
import { Contact } from "@/components/sections/contact"

// Re-renderiza diariamente para ocultar apoiadores com data de vencimento expirada
export const revalidate = 86400

export default function Home() {
  return (
    <>
      <Hero />
      <Supporters />
      <Features />
      <About />
      <Hosting />
      <Download />
      <Community />
      <Newsletter />
      <Contact />
    </>
  )
}
