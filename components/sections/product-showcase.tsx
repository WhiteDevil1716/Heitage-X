"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/store/cart"
import { Heart, ShoppingBag, Sparkles, Award, ArrowRight } from "lucide-react"

const products = [
  {
    id: "zapotec-diamond-rug",
    name: "Zapotec Diamond Rug",
    artisan: "Maria Santos",
    artisanId: "maria-santos",
    price: 485,
    originalPrice: 620,
    image: "/beautiful-handwoven-zapotec-diamond-pattern-rug-in.jpg",
    category: "Textiles",
    heritage: "Oaxacan Tradition",
    story: "Woven using 500-year-old techniques passed down through generations",
    impactScore: 95,
    authenticity: "Verified Handmade",
    timeToMake: "3 weeks",
    isLiked: false,
  },
  {
    id: "raku-ceramic-bowl-set",
    name: "Raku Ceramic Bowl Set",
    artisan: "Kenji Nakamura",
    artisanId: "kenji-nakamura",
    price: 320,
    originalPrice: 380,
    image: "/elegant-japanese-raku-ceramic-bowls-with-crackled-.jpg",
    category: "Ceramics",
    heritage: "Kyoto Pottery",
    story: "Fired using traditional raku techniques dating back to the 16th century",
    impactScore: 92,
    authenticity: "Master Certified",
    timeToMake: "2 weeks",
    isLiked: true,
  },
  {
    id: "bogolan-mud-cloth",
    name: "Bogolan Mud Cloth",
    artisan: "Amara Diallo",
    artisanId: "amara-diallo",
    price: 275,
    originalPrice: 340,
    image: "/traditional-african-mud-cloth-with-geometric-patte.jpg",
    category: "Textiles",
    heritage: "Malian Heritage",
    story: "Created with natural dyes and ancient symbols telling ancestral stories",
    impactScore: 98,
    authenticity: "UNESCO Recognized",
    timeToMake: "4 weeks",
    isLiked: false,
  },
  {
    id: "andean-alpaca-throw",
    name: "Andean Alpaca Throw",
    artisan: "Carlos Mendoza",
    artisanId: "carlos-mendoza",
    price: 195,
    originalPrice: 245,
    image: "/luxurious-alpaca-wool-throw-blanket-with-tradition.jpg",
    category: "Textiles",
    heritage: "Peruvian Highlands",
    story: "Hand-spun from alpaca wool using pre-Columbian techniques",
    impactScore: 89,
    authenticity: "Fair Trade Certified",
    timeToMake: "5 weeks",
    isLiked: true,
  },
]

export function ProductShowcase() {
  const { addItem } = useCartStore()

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      artisan: product.artisan,
      artisanId: product.artisanId,
      heritage: product.heritage,
      timeToMake: product.timeToMake,
      impactScore: product.impactScore,
      culturalStory: product.story,
    })
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Curated Collection
          </Badge>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Handcrafted treasures with
            <span className="text-primary"> cultural stories</span>
          </h2>

          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Every piece in our collection is authenticated, priced fairly, and comes with its complete cultural heritage
            story powered by AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover-lift border-0 shadow-lg bg-card/50 backdrop-blur overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className={`h-4 w-4 ${product.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <Badge variant="secondary" className="text-xs bg-card/90 backdrop-blur">
                      <Award className="h-3 w-3 mr-1" />
                      {product.authenticity}
                    </Badge>
                    <Badge className="text-xs bg-primary/90 backdrop-blur">Impact: {product.impactScore}%</Badge>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-semibold line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">by {product.artisan}</p>
                    <Badge variant="outline" className="text-xs w-fit">
                      {product.heritage}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 text-pretty">{product.story}</p>

                  <div className="flex items-center justify-between pt-2 border-t border-border/40">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold">${product.price}</span>
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{product.timeToMake} to craft</p>
                    </div>

                    <Button size="sm" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View Full Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
