import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { BrandIcon } from "@/components/brand-icon"
import { Logo } from "@/components/logo"
import { contact, links, maintainers, social } from "@/content/site"

const quickLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Recursos", href: "/#recursos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Download", href: "/#download" },
  { label: "Comunidade", href: "/#comunidade" },
]

const resources = [
  { label: "GitHub", href: links.github, external: true },
  { label: "Downloads", href: links.releases, external: true },
  { label: "Documentação", href: links.wiki, external: true },
  { label: "Política de Privacidade", href: "/politica-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Sistema open source de gestão de ordens de serviço, vendas e clientes.
          </p>
          <ul className="flex gap-2">
            {social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex size-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <BrandIcon name={s.icon} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Links rápidos">
          {quickLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Recursos">
          {resources.map((l) => (
            <li key={l.href}>
              {l.external ? (
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className="hover:text-foreground">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Mantenedores">
          {maintainers.map((m) => (
            <li key={m.email}>
              <span className="block font-medium text-foreground">{m.name}</span>
              <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
                <Mail className="size-3.5" /> {m.email}
              </a>
            </li>
          ))}
          <li className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" /> {contact.location}
          </li>
          <li>
            <a
              href={links.whatsappContact}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Phone className="size-3.5" /> {contact.phone}
            </a>
          </li>
        </FooterColumn>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} <strong className="text-foreground">Map-OS</strong>. Todos os
            direitos reservados.
          </p>
          <p>Powered by MountBit.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">{children}</ul>
    </div>
  )
}
