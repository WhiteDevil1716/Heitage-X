import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, MapPin, ArrowRight } from "lucide-react"

const stories = [
  {
    id: 1,
    title: "The Sacred Art of Zapotec Weaving",
    excerpt:
      "Discover how ancient Mesoamerican symbols are woven into every thread, carrying messages from ancestors to future generations.",
    image: "/close-up-of-hands-weaving-colorful-zapotec-pattern.jpg",
    region: "Oaxaca, Mexico",
    readTime: "8 min read",
    category: "Textile Heritage",
    featured: true,
  },
  {
    id: 2,
    title: "Raku: The Philosophy of Imperfection",
    excerpt:
      "Explore the Japanese tea ceremony tradition that celebrates the beauty of imperfection and impermanence in ceramic art.",
    image: "/japanese-tea-ceremony-with-raku-pottery-bowls-in-s.jpg",
    region: "Kyoto, Japan",
    readTime: "6 min read",
    category: "Ceramic Arts",
    featured: false,
  },
  {
    id: 3,
    title: "Bogolan: Mud Cloth Stories of Mali",
    excerpt:
      "Uncover the symbolic language of mud cloth, where geometric patterns tell stories of family history and spiritual beliefs.",
    image: "/african-woman-displaying-traditional-mud-cloth-wit.jpg",
    region: "Bamako, Mali",
    readTime: "10 min read",
    category: "African Textiles",
    featured: true,
  },
]

export function CulturalStories() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1" />
            Cultural Heritage
          </Badge>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Stories that preserve
            <span className="text-primary"> living traditions</span>
          </h2>

          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Dive deep into the cultural significance behind each craft. Our AI-powered storytelling reveals the hidden
            meanings and historical context of artisan traditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Story */}
          <div className="lg:col-span-2">
            <Card className="group hover-lift border-0 shadow-xl bg-card/50 backdrop-blur overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={stories[0].image || "/placeholder.svg"}
                    alt={stories[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <Badge className="mb-3 bg-primary/90 backdrop-blur">{stories[0].category}</Badge>
                    <h3 className="font-serif text-2xl font-bold mb-2 text-balance">{stories[0].title}</h3>
                    <p className="text-white/90 text-pretty mb-4">{stories[0].excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-white/80">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {stories[0].region}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {stories[0].readTime}
                        </div>
                      </div>

                      <Button variant="secondary" size="sm" className="group/btn">
                        Read Story
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side Stories */}
          <div className="space-y-6">
            {stories.slice(1).map((story) => (
              <Card key={story.id} className="group hover-lift border-0 shadow-lg bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="aspect-[16/10] overflow-hidden rounded-lg">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="space-y-3">
                      <Badge variant="outline" className="text-xs w-fit">
                        {story.category}
                      </Badge>

                      <h4 className="font-serif text-lg font-semibold text-balance">{story.title}</h4>

                      <p className="text-sm text-muted-foreground text-pretty">{story.excerpt}</p>

                      <div className="flex items-center justify-between pt-2 border-t border-border/40">
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {story.region}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {story.readTime}
                          </div>
                        </div>

                        <Button variant="ghost" size="sm" className="group/btn text-xs">
                          Read
                          <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Explore All Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
