import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Globe, Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="h-3 w-3 mr-1" />
                AI-Powered Cultural Discovery
              </Badge>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Discover authentic
                <span className="text-primary"> artisan treasures</span>
                <br />
                with cultural stories
              </h1>

              <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
                Transform your space with handcrafted pieces that carry centuries of tradition. Each purchase preserves
                cultural heritage and supports artisan communities worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explore Marketplace
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg">
                Learn Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/40">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Globe className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Heart className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">1,200+</span>
                </div>
                <p className="text-sm text-muted-foreground">Artisans</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Sparkles className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">15,000+</span>
                </div>
                <p className="text-sm text-muted-foreground">Unique Pieces</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 p-8">
              <img
                src="/artisan-crafting-beautiful-pottery-with-hands-cove.jpg"
                alt="Master artisan crafting pottery"
                className="w-full h-full object-cover rounded-2xl hover-lift"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg hover-lift">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live crafting</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg hover-lift">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Authenticity Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
