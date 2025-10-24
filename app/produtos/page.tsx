"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const allProducts = [
  {
    id: 1,
    name: "Bolsa Tote Sustentável",
    price: 189.9,
    category: "bolsas",
    image: "/bolsa-tote-artesanal.jpg",
    description: "Feita com algodão orgânico",
  },
  {
    id: 2,
    name: "Carteira Artesanal",
    price: 79.9,
    category: "acessórios",
    image: "/carteira-artesanal.jpg",
    description: "Compartimentos funcionais",
  },
  {
    id: 3,
    name: "Bolsa Crossbody",
    price: 149.9,
    category: "bolsas",
    image: "/bolsa-crossbody.jpg",
    description: "Perfeita para o dia a dia",
  },
  {
    id: 4,
    name: "Cinto Trançado",
    price: 59.9,
    category: "acessórios",
    image: "/cinto-tran-ado.jpg",
    description: "Técnica tradicional",
  },
  {
    id: 5,
    name: "Mochila Artesanal",
    price: 199.9,
    category: "bolsas",
    image: "/mochila-artesanal.jpg",
    description: "Design funcional e elegante",
  },
  {
    id: 6,
    name: "Bolsa Clutch",
    price: 99.9,
    category: "bolsas",
    image: "/bolsa-clutch.jpg",
    description: "Perfeita para eventos",
  },
]

export default function ProdutosPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const filteredProducts =
    selectedCategory === "todos" ? allProducts : allProducts.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Nossa Coleção</h1>
          <p className="text-lg text-muted-foreground">Explore nossas peças exclusivas feitas com amor e dedicação</p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["todos", "bolsas", "acessórios"].map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-primary text-white" : ""}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/produtos/${product.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-primary/10">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden bg-accent/10 aspect-square">
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
                      <span className="text-lg font-bold text-primary">R$ {product.price.toFixed(2)}</span>
                      <Button size="sm" variant="outline">
                        Ver Detalhes
                      </Button>
                    </div>
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
