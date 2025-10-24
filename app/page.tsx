import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Sustainability } from "@/components/sustainability"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Sustainability />
      <Newsletter />
    </main>
  )
}
