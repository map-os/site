import { siFacebook, siGithub, siInstagram, siWhatsapp, siX } from "simple-icons"

const icons = {
  github: siGithub,
  whatsapp: siWhatsapp,
  instagram: siInstagram,
  facebook: siFacebook,
  x: siX,
}

export type BrandIconName = keyof typeof icons

export function BrandIcon({ name, className }: { name: BrandIconName; className?: string }) {
  return (
    <svg role="img" aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d={icons[name].path} />
    </svg>
  )
}
