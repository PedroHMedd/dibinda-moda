"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Como Cuidar de Bolsas de Couro Vegetal",
    excerpt: "Dicas essenciais para manter suas peças em perfeito estado por muito tempo.",
    date: "15 de Outubro, 2024",
    category: "Cuidados",
    image: "/cuidados-couro-vegetal.jpg",
  },
  {
    id: 2,
    title: "Moda Sustentável: O Futuro da Indústria",
    excerpt: "Entenda por que escolher artesanato sustentável é investir no planeta.",
    date: "10 de Outubro, 2024",
    category: "Sustentabilidade",
    image: "/moda-sustent-vel.jpg",
  },
  {
    id: 3,
    title: "Tendências de Moda para Outono 2024",
    excerpt: "Descubra as cores e estilos que vão dominar a estação.",
    date: "5 de Outubro, 2024",
    category: "Tendências",
    image: "/tend-ncias-moda-outono.jpg",
  },
  {
    id: 4,
    title: "A Arte do Artesanato: Conheça Nossa Técnica",
    excerpt: "Explore o processo criativo por trás de cada peça Ana Souza.",
    date: "1 de Outubro, 2024",
    category: "Artesanato",
    image: "/artesanato-t-cnica.jpg",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Dicas de moda, cuidados com acessórios e histórias do artesanato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-primary/10 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-accent/10 aspect-video">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary uppercase">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
