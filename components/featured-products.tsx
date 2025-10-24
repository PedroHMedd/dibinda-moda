"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Bolsa Tote Sustentável",
    price: "R$ 189,90",
    image: "/bolsa-tote-artesanal.jpg",
    badge: "Destaque",
    description: "Feita com algodão orgânico e acabamento em couro vegetal",
  },
  {
    id: 2,
    name: "Carteira Artesanal",
    price: "R$ 79,90",
    image: "/carteira-artesanal-couro.jpg",
    badge: "Popular",
    description: "Compartimentos funcionais com design minimalista",
  },
  {
    id: 3,
    name: "Bolsa Crossbody",
    price: "R$ 149,90",
    image: "/bolsa-crossbody-moda.jpg",
    badge: "Novo",
    description: "Perfeita para o dia a dia com alça ajustável",
  },
  {
    id: 4,
    name: "Cinto Trançado",
    price: "R$ 59,90",
    image: "/cinto-tran-ado-artesanal.jpg",
    description: "Técnica tradicional com materiais premium",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Coleção em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seleção de peças exclusivas que representam o melhor do nosso artesanato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Link key={product.id} href={`/produtos/${product.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-primary/10">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-accent/10 aspect-square">
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                        {product.badge}
                      </div>
                    )}
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <Button size="sm" variant="outline">
                        Ver
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/produtos">
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
