"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background to-accent/5 flex items-center justify-center overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mb-8 inline-block">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Artesanato Sustentável</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
          Bolsas e Acessórios Feitos com Paixão
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
          Cada peça é uma obra de arte. Materiais sustentáveis, design exclusivo e histórias que conectam você ao
          artesanato autêntico.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/produtos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              Explorar Coleção
            </Button>
          </Link>
          <Link href="#sobre">
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              Conheça Nossa História
            </Button>
          </Link>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative mx-auto max-w-4xl">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden border border-primary/10">
            <img
              src="/artesanato-bolsas-moda-sustent-vel.jpg"
              alt="Coleção de bolsas artesanais"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
