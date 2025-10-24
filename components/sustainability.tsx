"use client"

export function Sustainability() {
  const values = [
    {
      title: "Materiais Sustentáveis",
      description: "Utilizamos algodão orgânico, couro vegetal e fibras naturais em todas as nossas peças.",
      icon: "🌱",
    },
    {
      title: "Produção Artesanal",
      description: "Cada item é feito à mão com técnicas tradicionais que valorizam o trabalho humano.",
      icon: "🤝",
    },
    {
      title: "Comércio Justo",
      description: "Apoiamos comunidades locais e garantimos práticas éticas em toda a cadeia produtiva.",
      icon: "🌍",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Nossa Filosofia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acreditamos que moda sustentável e artesanato autêntico podem transformar o mundo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-background border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center border border-primary/20">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Conheça a História de Ana Souza</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Com mais de 15 anos de experiência em artesanato, Ana Souza transformou sua paixão por moda sustentável em
            uma marca que conecta pessoas ao trabalho manual autêntico. Cada bolsa, cada acessório carrega a dedicação e
            o amor pela criação.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Gostaria%20de%20conhecer%20mais%20sobre%20a%20Ana%20Souza%20Artesanato"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
