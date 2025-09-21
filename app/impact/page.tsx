import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Users, Heart, Award, MapPin } from "lucide-react"

export default function ImpactDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Cultural Impact Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Measuring our collective impact on preserving global artisan traditions
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Artisans Supported</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cultural Traditions</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Across 47 countries</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heritage Preserved</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">Cultural authenticity score</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Community Impact</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2.4M</div>
              <p className="text-xs text-muted-foreground">Direct artisan earnings</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="regions">Regions</TabsTrigger>
            <TabsTrigger value="traditions">Traditions</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cultural Preservation Score</CardTitle>
                  <CardDescription>Real-time assessment of heritage authenticity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Traditional Techniques</span>
                      <span>96%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Cultural Storytelling</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Heritage Documentation</span>
                      <span>89%</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Community Engagement</span>
                      <span>94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Impact Trends</CardTitle>
                  <CardDescription>Monthly growth in cultural preservation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">New Artisans Onboarded</span>
                      <Badge variant="secondary">+127 this month</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Traditions Documented</span>
                      <Badge variant="secondary">+8 new crafts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Cultural Stories Shared</span>
                      <Badge variant="secondary">+342 stories</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Heritage Videos Created</span>
                      <Badge variant="secondary">+56 videos</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Featured Success Stories</CardTitle>
                <CardDescription>Highlighting exceptional cultural preservation achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold">Oaxacan Textile Revival</h4>
                    <p className="text-sm text-muted-foreground">
                      Supporting 47 Zapotec weavers in preserving ancient dyeing techniques
                    </p>
                    <Badge variant="outline">Heritage Score: 98%</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Award className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold">Japanese Raku Ceramics</h4>
                    <p className="text-sm text-muted-foreground">
                      Documenting 400-year-old firing techniques with master artisans
                    </p>
                    <Badge variant="outline">Heritage Score: 96%</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Globe className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h4 className="font-semibold">Moroccan Zellige Tiles</h4>
                    <p className="text-sm text-muted-foreground">
                      Preserving geometric patterns and traditional glazing methods
                    </p>
                    <Badge variant="outline">Heritage Score: 94%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Global Impact by Region</CardTitle>
                <CardDescription>Cultural preservation efforts across continents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Latin America</span>
                      <span className="text-sm text-muted-foreground">847 artisans</span>
                    </div>
                    <Progress value={85} className="h-3" />
                    <p className="text-sm text-muted-foreground">Focus: Textile traditions, pottery, metalwork</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Asia Pacific</span>
                      <span className="text-sm text-muted-foreground">1,203 artisans</span>
                    </div>
                    <Progress value={92} className="h-3" />
                    <p className="text-sm text-muted-foreground">Focus: Ceramics, woodworking, silk production</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Africa</span>
                      <span className="text-sm text-muted-foreground">542 artisans</span>
                    </div>
                    <Progress value={78} className="h-3" />
                    <p className="text-sm text-muted-foreground">Focus: Beadwork, basketry, bronze casting</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Europe</span>
                      <span className="text-sm text-muted-foreground">255 artisans</span>
                    </div>
                    <Progress value={88} className="h-3" />
                    <p className="text-sm text-muted-foreground">Focus: Glassblowing, lace making, stone carving</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="traditions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Craft Traditions by Category</CardTitle>
                <CardDescription>Breakdown of preserved cultural practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Textiles & Weaving</span>
                      <Badge>42 traditions</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Ceramics & Pottery</span>
                      <Badge>38 traditions</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Metalwork & Jewelry</span>
                      <Badge>29 traditions</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Woodworking</span>
                      <Badge>23 traditions</Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Basketry & Fiber Arts</span>
                      <Badge>18 traditions</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Stone & Glass Work</span>
                      <Badge>12 traditions</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Leather & Hide Work</span>
                      <Badge>8 traditions</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Musical Instruments</span>
                      <Badge>6 traditions</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sustainability" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sustainability Metrics</CardTitle>
                <CardDescription>Environmental and social impact of our marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-700">Environmental Impact</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Carbon Footprint Reduction</span>
                        <span className="text-sm font-medium">-34%</span>
                      </div>
                      <Progress value={66} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Sustainable Materials Used</span>
                        <span className="text-sm font-medium">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Waste Reduction</span>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-700">Social Impact</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Fair Trade Compliance</span>
                        <span className="text-sm font-medium">96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Community Reinvestment</span>
                        <span className="text-sm font-medium">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Skills Transfer Programs</span>
                        <span className="text-sm font-medium">89%</span>
                      </div>
                      <Progress value={89} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
