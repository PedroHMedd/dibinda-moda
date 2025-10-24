"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Ana Souza</h3>
            <p className="text-background/80 text-sm">
              Artesanato sustentável que conecta você ao trabalho manual autêntico.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/produtos" className="hover:text-background transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-background transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@anasouza.com.br" className="hover:text-background transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/80">
          <p>&copy; 2025 Ana Souza Artesanato. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
