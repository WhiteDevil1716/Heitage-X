import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Award, ArrowRight } from "lucide-react"

const featuredArtisans = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Oaxaca, Mexico",
    specialty: "Traditional Zapotec Weaving",
    rating: 4.9,
    reviews: 127,
    image: "/elderly-mexican-woman-weaving-colorful-traditional.jpg",
    heritage: "5th Generation Weaver",
    impact: "Preserved 200-year-old techniques",
  },
  {
    id: 2,
    name: "Kenji Nakamura",
    location: "Kyoto, Japan",
    specialty: "Ceramic Pottery",
    rating: 4.8,
    reviews: 89,
    image: "/japanese-master-potter-working-with-clay-on-potter.jpg",
    heritage: "Raku Pottery Master",
    impact: "UNESCO Heritage Keeper",
  },
  {
    id: 3,
    name: "Amara Diallo",
    location: "Bamako, Mali",
    specialty: "Mud Cloth Artistry",
    rating: 4.9,
    reviews: 156,
    image: "/african-woman-creating-intricate-mud-cloth-pattern.jpg",
    heritage: "Bogolan Tradition",
    impact: "Empowered 50+ women",
  },
]

export function FeaturedArtisans() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Award className="h-3 w-3 mr-1" />
            Master Craftspeople
          </Badge>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">Meet our featured artisans</h2>

          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover the stories behind the hands that create. Each artisan brings generations of knowledge and cultural
            heritage to their craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArtisans.map((artisan) => (
            <Card key={artisan.id} className="group hover-lift border-0 shadow-lg bg-card/50 backdrop-blur">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={artisan.image || "/placeholder.svg"}
                    alt={artisan.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl font-semibold">{artisan.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{artisan.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {artisan.location}
                    </div>

                    <p className="text-sm font-medium text-primary">{artisan.specialty}</p>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {artisan.heritage}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{artisan.impact}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="text-sm text-muted-foreground">{artisan.reviews} reviews</span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      View Profile
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Discover All Artisans
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
