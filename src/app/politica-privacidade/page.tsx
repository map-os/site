import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  alternates: { canonical: "/politica-privacidade" },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Política de Privacidade">
      <h2>Informações Coletadas</h2>
      <p>
        Não coletamos nenhum dado pessoal para usar o aplicativo Map-OS. O aplicativo é projetado para
        funcionar sem a necessidade de coletar ou armazenar informações pessoais dos usuários.
      </p>
      <h2>Uso das Informações</h2>
      <p>
        Como não coletamos informações pessoais, não há uso de tais informações para fornecer ou manter
        os serviços do Map-OS.
      </p>
      <h2>Compartilhamento de Informações</h2>
      <p>
        Como não coletamos informações pessoais, não há compartilhamento de informações com terceiros.
      </p>
      <h2>Segurança</h2>
      <p>
        Embora não coletamos informações pessoais, estamos empenhados em garantir a segurança dos dados
        transmitidos por meio do aplicativo Map-OS.
      </p>
    </LegalPage>
  )
}
