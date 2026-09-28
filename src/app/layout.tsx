import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

const description =
  "Map-OS: sistema open source e gratuito de gestão de ordens de serviço, vendas, produtos e clientes. Simples, intuitivo e sem limitações."

export const metadata: Metadata = {
  metadataBase: new URL("https://mapos.com.br"),
  title: {
    default: "Map-OS — Sistema de Gestão de Ordens de Serviço Open Source",
    template: "%s | Map-OS",
  },
  description,
  keywords: [
    "ordem de serviço",
    "sistema de OS",
    "gestão de ordens de serviço",
    "open source",
    "assistência técnica",
    "controle de vendas",
    "Map-OS",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Map-OS",
    title: "Map-OS — Sistema de Gestão de Ordens de Serviço",
    description,
    images: [{ url: "/img/slider/01.jpg", width: 1030, height: 755, alt: "Dashboard do Map-OS" }],
  },
  twitter: { card: "summary_large_image", site: "@MapOsOficial" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1219" },
  ],
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
