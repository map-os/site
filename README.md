# Site Map-OS

Site institucional do [Map-OS](https://github.com/RamonSilva20/mapos), construído com Next.js 16 (App Router), Tailwind CSS v4 e shadcn/ui.

## Desenvolvimento

```bash
npm install
cp .env.example .env.local   # configure as variáveis dos formulários
npm run dev                  # http://localhost:3000
```

## Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `RESEND_API_KEY` | Chave da API do [Resend](https://resend.com), usada pelos formulários de apoiador e newsletter |
| `CONTACT_TO_EMAIL` | Destinatário(s) das mensagens, separados por vírgula |
| `CONTACT_FROM_EMAIL` | Remetente verificado no Resend (opcional) |

Sem essas variáveis, os formulários exibem uma mensagem de erro amigável e registram o problema no log do servidor.

## Onde editar o conteúdo

- `src/content/site.ts` — textos, links, estatísticas, versão atual, redes sociais e mantenedores
- `src/content/supporters.ts` — apoiadores (itens com `vencimento` expirado são ocultados automaticamente; a página é revalidada diariamente)
- `src/components/sections/*` — seções da página inicial
- `src/app/politica-privacidade` e `src/app/termos-de-uso` — páginas legais

## Deploy

Pensado para a Vercel (ou qualquer host Node): `npm run build && npm start`.
