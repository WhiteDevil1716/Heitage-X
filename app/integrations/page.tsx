import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Database, Zap, Globe, Shield, TrendingUp, Eye, Network, Smartphone, Brain } from "lucide-react"

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">System Integrations</h1>
          <p className="text-muted-foreground text-lg">Advanced technology stack powering cultural preservation</p>
        </div>

        <Tabs defaultValue="ai-ml" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="ai-ml">AI & ML</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="arvr">AR/VR</TabsTrigger>
            <TabsTrigger value="data">Data Systems</TabsTrigger>
          </TabsList>

          <TabsContent value="ai-ml" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">Cultural Storytelling AI</CardTitle>
                  </div>
                  <CardDescription>GPT-4 powered narrative generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary">OpenAI GPT-4</Badge>
                    <p className="text-sm text-muted-foreground">
                      Generates authentic cultural narratives and product stories based on historical context and
                      artisan traditions.
                    </p>
                    <Button size="sm" className="w-full">
                      Configure API
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-lg">ML Pricing Engine</CardTitle>
                  </div>
                  <CardDescription>Dynamic pricing optimization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary">TensorFlow</Badge>
                    <p className="text-sm text-muted-foreground">
                      Machine learning algorithms analyze cultural rarity, market demand, and artisan reputation for
                      optimal pricing.
                    </p>
                    <Button size="sm" className="w-full">
                      Train Model
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-lg">Computer Vision</CardTitle>
                  </div>
                  <CardDescription>Authenticity verification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary">OpenCV</Badge>
                    <p className="text-sm text-muted-foreground">
                      Analyzes product images to verify traditional techniques and detect authenticity markers.
                    </p>
                    <Button size="sm" className="w-full">
                      Upload Dataset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">Authenticity Tokens</CardTitle>
                  </div>
                  <CardDescription>NFT-based provenance tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Network</span>
                      <Badge>Polygon</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Contract</span>
                      <Badge variant="outline">0x742d35...e4c2</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Tokens Minted</span>
                      <Badge variant="secondary">2,847</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Each product receives a unique authenticity token tracking its creation, ownership, and cultural
                      significance.
                    </p>
                    <Button size="sm" className="w-full">
                      View Contract
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Network className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-lg">Smart Contracts</CardTitle>
                  </div>
                  <CardDescription>Automated royalty distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Artisan Royalties</span>
                      <Badge>15%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cultural Fund</span>
                      <Badge>5%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Platform Fee</span>
                      <Badge>8%</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Automated distribution ensures fair compensation and supports cultural preservation initiatives.
                    </p>
                    <Button size="sm" className="w-full">
                      Deploy Contract
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="arvr" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-lg">AR Product Views</CardTitle>
                  </div>
                  <CardDescription>WebXR product visualization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary">Three.js</Badge>
                    <p className="text-sm text-muted-foreground">
                      Customers can view products in their space using augmented reality before purchasing.
                    </p>
                    <Button size="sm" className="w-full">
                      Test AR View
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">VR Workshops</CardTitle>
                  </div>
                  <CardDescription>Immersive learning experiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary">WebVR</Badge>
                    <p className="text-sm text-muted-foreground">
                      Virtual reality workshops where customers learn traditional crafting techniques from master
                      artisans.
                    </p>
                    <Button size="sm" className="w-full">
                      Join Workshop
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Cpu className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-lg">Cultural Journeys</CardTitle>
                  </div>
                  <CardDescription>360° cultural experiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="secondary">360° Video</Badge>
                    <p className="text-sm text-muted-foreground">
                      Immersive journeys to artisan workshops and cultural sites around the world.
                    </p>
                    <Button size="sm" className="w-full">
                      Start Journey
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">Knowledge Graph</CardTitle>
                  </div>
                  <CardDescription>Neo4j cultural connections</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cultural Nodes</span>
                      <Badge variant="secondary">15,847</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Relationships</span>
                      <Badge variant="secondary">42,156</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Traditions Mapped</span>
                      <Badge variant="secondary">156</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Graph database mapping relationships between artisans, techniques, materials, and cultural
                      traditions.
                    </p>
                    <Button size="sm" className="w-full">
                      Explore Graph
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-600" />
                    <CardTitle className="text-lg">Vector Database</CardTitle>
                  </div>
                  <CardDescription>Semantic search & recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Embeddings</span>
                      <Badge variant="secondary">Pinecone</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dimensions</span>
                      <Badge variant="secondary">1536</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Indexed Items</span>
                      <Badge variant="secondary">8,924</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Vector embeddings enable semantic search and intelligent product recommendations based on cultural
                      similarity.
                    </p>
                    <Button size="sm" className="w-full">
                      Update Index
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Integration Status</CardTitle>
            <CardDescription>Real-time monitoring of all system integrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <p className="text-sm font-medium">AI Services</p>
                <p className="text-xs text-muted-foreground">Operational</p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <p className="text-sm font-medium">Blockchain</p>
                <p className="text-xs text-muted-foreground">Operational</p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                <p className="text-sm font-medium">AR/VR</p>
                <p className="text-xs text-muted-foreground">Beta</p>
              </div>
              <div className="text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <p className="text-sm font-medium">Databases</p>
                <p className="text-xs text-muted-foreground">Operational</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
