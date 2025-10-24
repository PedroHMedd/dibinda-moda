"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Fique por Dentro das Novidades</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Receba dicas de moda, lançamentos exclusivos e ofertas especiais direto no seu email
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <Button type="submit" className="bg-white text-primary hover:bg-white/90">
            Inscrever
          </Button>
        </form>

        {submitted && <p className="mt-4 text-white/80 text-sm">✓ Obrigada! Verifique seu email.</p>}
      </div>
    </section>
  )
}
