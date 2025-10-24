"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const productDetails: Record<number, any> = {
  1: {
    name: "Bolsa Tote Sustentável",
    price: 189.9,
    image: "/bolsa-tote-artesanal.jpg",
    description:
      "Uma bolsa clássica e versátil, perfeita para o dia a dia. Feita com algodão orgânico certificado e acabamento em couro vegetal.",
    details: [
      "Material: Algodão orgânico 100%",
      "Acabamento: Couro vegetal",
      "Dimensões: 40cm x 35cm x 15cm",
      "Peso: 650g",
      "Cores disponíveis: Natural, Marrom, Preto",
    ],
    colors: ["Natural", "Marrom", "Preto"],
    materials: ["Algodão Orgânico", "Couro Vegetal"],
    care: "Limpar com pano úmido. Evitar exposição prolongada ao sol.",
  },
  2: {
    name: "Carteira Artesanal",
    price: 79.9,
    image: "/carteira-artesanal.jpg",
    description:
      "Carteira compacta com múltiplos compartimentos. Design minimalista que combina funcionalidade e elegância.",
    details: [
      "Material: Couro vegetal",
      "Compartimentos: 8",
      "Dimensões: 19cm x 10cm",
      "Peso: 150g",
      "Cores: Marrom, Preto, Caramelo",
    ],
    colors: ["Marrom", "Preto", "Caramelo"],
    materials: ["Couro Vegetal"],
    care: "Limpar regularmente com pano seco. Aplicar condicionador de couro a cada 3 meses.",
  },
}

export default function ProdutoDetalhePage({ params }: { params: { id: string } }) {
  const product = productDetails[Number.parseInt(params.id)] || productDetails[1]
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/produtos" className="text-primary hover:underline mb-8 inline-block">
          ← Voltar para Coleção
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagem */}
          <div className="flex items-center justify-center bg-accent/10 rounded-lg overflow-hidden aspect-square">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Detalhes */}
          <div>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">R$ {product.price.toFixed(2)}</p>

            <p className="text-lg text-muted-foreground mb-8">{product.description}</p>

            {/* Cores */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">Cor</label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      selectedColor === color
                        ? "border-primary bg-primary/10"
                        : "border-primary/20 hover:border-primary/40"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantidade */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">Quantidade</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border border-primary/20 rounded-lg hover:bg-accent/10"
                >
                  −
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border border-primary/20 rounded-lg hover:bg-accent/10"
                >
                  +
                </button>
              </div>
            </div>

            {/* Botões */}
            <div className="flex gap-4 mb-12">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-white hover:bg-primary/90 py-6 text-lg"
              >
                {addedToCart ? "✓ Adicionado ao Carrinho" : "Adicionar ao Carrinho"}
              </Button>
              <a
                href={`https://wa.me/5511999999999?text=Gostaria%20de%20personalizar%20o%20produto%20${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="py-6 text-lg bg-transparent">
                  Personalizar
                </Button>
              </a>
            </div>

            {/* Especificações */}
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Especificações</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Cuidados */}
            <Card className="border-primary/10 mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Como Cuidar</h3>
                <p className="text-sm text-muted-foreground">{product.care}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
