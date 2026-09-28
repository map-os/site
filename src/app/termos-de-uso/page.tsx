import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Termos de Uso",
  alternates: { canonical: "/termos-de-uso" },
}

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Uso">
      <h2>1. Aceitação dos Termos</h2>
      <p>
        Ao baixar, instalar ou utilizar este aplicativo (doravante referido como &quot;App&quot;), você
        concorda com estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar
        com algum destes termos, está proibido de usar ou acessar este App.
      </p>
      <h2>2. Uso Licenciado</h2>
      <p>
        O Map-OS concede a você uma licença limitada, não exclusiva e intransferível para baixar, instalar
        e usar o App apenas para uso pessoal e não comercial, de acordo com estes Termos de Uso e as
        diretrizes estabelecidas pela Google Play Store.
      </p>
      <h2>3. Responsabilidades do Usuário</h2>
      <p>
        Você concorda em usar o App de forma responsável e em conformidade com todas as leis e
        regulamentos aplicáveis. Você é o único responsável por todas as atividades que ocorrem em sua
        conta e deve manter sua senha segura.
      </p>
      <h2>4. Privacidade</h2>
      <p>
        O Map-OS respeita a sua privacidade e está em conformidade com todas as leis de proteção de dados
        aplicáveis. Ao utilizar o App, você concorda com a coleta, armazenamento e uso de suas informações
        de acordo com a nossa Política de Privacidade.
      </p>
      <h2>5. Limitações de Responsabilidade</h2>
      <p>
        O Map-OS não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais,
        consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar o App.
      </p>
      <h2>6. Modificações dos Termos de Uso</h2>
      <p>
        O Map-OS reserva-se o direito de atualizar ou modificar estes Termos de Uso a qualquer momento.
        Recomendamos que você revise os Termos de Uso periodicamente para estar ciente de quaisquer
        alterações.
      </p>
      <h2>7. Lei Aplicável</h2>
      <p>
        Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se
        submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele Estado ou localidade.
      </p>
    </LegalPage>
  )
}
