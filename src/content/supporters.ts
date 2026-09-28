export type Supporter = {
  name: string
  logo: string
  description: string
  link: string
  /** Data de vencimento no formato YYYY-MM-DD; após essa data o apoiador deixa de ser exibido. */
  vencimento?: string
}

export const supporters: Supporter[] = [
  {
    name: "Bruno Barreto & Luka Sabino",
    logo: "/img/apoiador/sysgo.png",
    description:
      "Apoiamos o projeto por acreditar em ferramentas que simplificam e profissionalizam a gestão de ordens de serviço. Criamos iniciativas para fortalecer o ecossistema open source brasileiro e promover inovação acessível para empresas de todos os portes.",
    link: "https://sysgo.com.br/mapos",
    vencimento: "2026-12-16",
  },
]

export function activeSupporters(today = new Date()) {
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  return supporters.filter((s) => {
    if (!s.vencimento) return true
    const [y, m, d] = s.vencimento.split("-").map(Number)
    return new Date(y, m - 1, d) >= start
  })
}
