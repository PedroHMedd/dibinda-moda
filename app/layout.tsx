import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ana Souza Artesanato - Bolsas e Acessórios Sustentáveis",
  description: "Bolsas e acessórios artesanais feitos com materiais sustentáveis. Moda exclusiva e autêntica.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
