"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-primary/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AS</span>
          </div>
          <span className="font-serif font-bold text-lg text-foreground hidden sm:inline">Ana Souza</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/produtos" className="text-foreground hover:text-primary transition-colors">
            Produtos
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/carrinho">
            <Button variant="outline" size="sm">
              🛍️ Carrinho
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-accent rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background border-b border-primary/10 md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/produtos" className="text-foreground hover:text-primary">
                Produtos
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary">
                Blog
              </Link>
              <a href="#sobre" className="text-foreground hover:text-primary">
                Sobre
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary"
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
