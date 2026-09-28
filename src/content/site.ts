import {
  BarChart3,
  ClipboardList,
  Code2,
  ShoppingCart,
  UserCog,
  Users,
  type LucideIcon,
} from "lucide-react"

export const links = {
  github: "https://github.com/RamonSilva20/mapos",
  releases: "https://github.com/RamonSilva20/mapos/releases",
  wiki: "https://github.com/RamonSilva20/mapos/wiki",
  donate: "https://donate.mapos.com.br",
  hosting:
    "https://cliente.sysgo.com.br/index.php?rp=%2Fstore%2Fsistemas&utm_source=site_mapos",
  whatsappContact: "https://api.whatsapp.com/send?phone=16464321509",
}

export const social = [
  { name: "GitHub", href: "https://github.com/RamonSilva20/mapos", icon: "github" },
  {
    name: "WhatsApp",
    href: "https://chat.whatsapp.com/GVSg8tPQzXy0grfYpRfQps?mode=hqrt3",
    icon: "whatsapp",
  },
  { name: "Instagram", href: "https://www.instagram.com/maposoficial/", icon: "instagram" },
  { name: "Facebook", href: "https://facebook.com/mapOsOficial", icon: "facebook" },
  { name: "Twitter", href: "https://twitter.com/MapOsOficial", icon: "x" },
] as const

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Apoiadores", href: "#apoio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Hospedar", href: "#hospedar" },
  { label: "Download", href: "#download" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Contato", href: "#contato" },
]

export const heroStats = [
  { value: "10k+", label: "Downloads" },
  { value: "10+", label: "Países" },
  { value: "100%", label: "Gratuito" },
]

export type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

export const features: Feature[] = [
  {
    title: "Ordens de Serviço",
    description:
      "Acompanhe cada ordem em tempo real, com controle de status, prioridade, técnicos responsáveis e histórico completo.",
    icon: ClipboardList,
  },
  {
    title: "Controle de Vendas",
    description:
      "Gerencie vendas, produtos e estoque em um só lugar, com relatórios detalhados de desempenho.",
    icon: ShoppingCart,
  },
  {
    title: "Gestão de Clientes",
    description:
      "Cadastro completo de clientes com histórico de serviços e vendas sempre à mão.",
    icon: Users,
  },
  {
    title: "Relatórios Completos",
    description: "Dashboards e relatórios detalhados para acompanhar a performance do seu negócio.",
    icon: BarChart3,
  },
  {
    title: "Multi-usuário",
    description: "Controle de acesso com níveis de permissão para cada membro da equipe.",
    icon: UserCog,
  },
  {
    title: "100% Open Source",
    description: "Código aberto, gratuito e totalmente personalizável para a sua realidade.",
    icon: Code2,
  },
]

export const aboutStats = [
  { value: "10k+", label: "Downloads ativos" },
  { value: "10+", label: "Países usando" },
  { value: "1k+", label: "Estrelas no GitHub" },
  { value: "100%", label: "Open Source" },
]

export const aboutHighlights = [
  {
    title: "Interface Moderna",
    description: "Design intuitivo e responsivo para melhor experiência.",
    image: "/img/slider/01.jpg",
  },
  {
    title: "Navegação Intuitiva",
    description: "Menu organizado e fácil de usar.",
    image: "/img/portfolio/h02.png",
  },
  {
    title: "Relatórios Visuais",
    description: "Gráficos e dashboards para análise de dados.",
    image: "/img/portfolio/h01.png",
  },
]

export const hostingPerks = [
  "Instalação automática",
  "Suporte especializado",
  "Backups diários",
  "Acesso seguro de qualquer lugar",
  "Pronto para usar em menos de 5 minutos",
]

export const release = {
  version: "v4.53.0",
  description: "Versão estável com todas as funcionalidades",
  note: "Inclui pasta VENDOR",
  perks: ["Gratuito e Open Source", "Sem limitações", "Atualizações constantes"],
}

export const communityStats = [
  { value: "1000+", label: "Estrelas no GitHub" },
  { value: "100+", label: "Contribuidores" },
  { value: "10+", label: "Países usando" },
  { value: "Constantes", label: "Atualizações" },
]

export const maintainers = [
  { name: "Gianluca Bine", email: "gian@mapos.com.br" },
  { name: "Wilmerson", email: "wilmerson@mapos.com.br" },
]

export const contact = {
  location: "Guarapuava, PR, Brasil",
  phone: "(646) 432-1509",
}
