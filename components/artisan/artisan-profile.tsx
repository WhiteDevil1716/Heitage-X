"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  MapPin,
  Star,
  Award,
  Heart,
  ShoppingBag,
  Clock,
  CheckCircle,
  Globe,
  Palette,
  Hammer,
  BookOpen,
} from "lucide-react"

interface Artisan {
  id: string
  name: string
  location: string
  specialty: string
  rating: number
  reviews: number
  image: string
  coverImage: string
  heritage: string
  yearsOfExperience: number
  joinedDate: string
  bio: string
  story: string
  techniques: string[]
  materials: string[]
  achievements: string[]
  impact: {
    studentsTrained: number
    techniquesPreserved: number
    communitySupported: number
    yearsActive: number
  }
  products: Array<{
    id: number
    name: string
    price: number
    image: string
    timeToMake: string
    sold: number
  }>
  testimonials: Array<{
    id: number
    author: string
    rating: number
    content: string
    date: string
    verified: boolean
  }>
}

interface ArtisanProfileProps {
  artisan: Artisan
}

export function ArtisanProfile({ artisan }: ArtisanProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false)

  const joinedYear = new Date(artisan.joinedDate).getFullYear()
  const totalProductsSold = artisan.products.reduce((sum, product) => sum + product.sold, 0)

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={artisan.coverImage || "/placeholder.svg"}
          alt={`${artisan.name}'s workshop`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <img
                  src={artisan.image || "/placeholder.svg"}
                  alt={artisan.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <Badge className="absolute -bottom-2 -right-2 bg-primary">
                  <Award className="h-3 w-3 mr-1" />
                  Master
                </Badge>
              </div>

              <div className="flex-1 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="font-serif text-3xl font-bold">{artisan.name}</h1>
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                </div>

                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{artisan.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{artisan.rating}</span>
                    <span className="text-white/80">({artisan.reviews} reviews)</span>
                  </div>
                </div>

                <p className="text-lg font-medium mb-2">{artisan.specialty}</p>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {artisan.heritage}
                </Badge>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant={isFollowing ? "secondary" : "default"}
                  onClick={() => setIsFollowing(!isFollowing)}
                  className="min-w-[120px]"
                >
                  <Heart className={`h-4 w-4 mr-2 ${isFollowing ? "fill-current" : ""}`} />
                  {isFollowing ? "Following" : "Follow"}
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="story">Story</TabsTrigger>
                <TabsTrigger value="techniques">Craft</TabsTrigger>
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Artisan Story</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{artisan.bio}</p>
                    <p className="text-muted-foreground leading-relaxed">{artisan.story}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Achievements & Recognition</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {artisan.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="techniques" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Hammer className="h-5 w-5 text-primary" />
                        <span>Traditional Techniques</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {artisan.techniques.map((technique, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{technique}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Palette className="h-5 w-5 text-primary" />
                        <span>Materials & Tools</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {artisan.materials.map((material, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-sm text-muted-foreground">{material}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="products" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {artisan.products.map((product) => (
                    <Card key={product.id} className="group hover-lift">
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-t-lg">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 space-y-3">
                          <h3 className="font-serif text-lg font-semibold">{product.name}</h3>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{product.timeToMake}</span>
                            </div>
                            <span>{product.sold} sold</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold">${product.price}</span>
                            <Button size="sm">
                              <ShoppingBag className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="space-y-4">
                  {artisan.testimonials.map((testimonial) => (
                    <Card key={testimonial.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-primary">{testimonial.author.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">{testimonial.author}</span>
                                {testimonial.verified && <CheckCircle className="h-4 w-4 text-green-500" />}
                              </div>
                              <div className="flex items-center space-x-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(testimonial.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Cultural Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{artisan.impact.studentsTrained}</div>
                    <div className="text-xs text-muted-foreground">Students Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{artisan.impact.techniquesPreserved}</div>
                    <div className="text-xs text-muted-foreground">Techniques Preserved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{artisan.impact.communitySupported}</div>
                    <div className="text-xs text-muted-foreground">Community Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{artisan.impact.yearsActive}</div>
                    <div className="text-xs text-muted-foreground">Years Active</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Artisan Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Experience</span>
                  <span className="font-medium">{artisan.yearsOfExperience} years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Joined</span>
                  <span className="font-medium">{joinedYear}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Products Sold</span>
                  <span className="font-medium">{totalProductsSold}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{artisan.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Heritage Preservation */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Heritage Keeper</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {artisan.name} is dedicated to preserving traditional {artisan.specialty.toLowerCase()}
                  techniques for future generations.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cultural Preservation</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <Badge className="w-full justify-center">UNESCO Heritage Supporter</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
