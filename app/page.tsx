import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { FeaturedArtisans } from "@/components/sections/featured-artisans"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { CulturalStories } from "@/components/sections/cultural-stories"
import { ImpactMetrics } from "@/components/sections/impact-metrics"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedArtisans />
        <ProductShowcase />
        <CulturalStories />
        <ImpactMetrics />
      </main>
      <Footer />
    </div>
  )
}
