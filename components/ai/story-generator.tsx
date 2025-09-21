"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Sparkles, Loader2, Award, DollarSign, Heart } from "lucide-react"
import type { CulturalStoryOutput, ProductDetails, ArtisanProfile } from "@/lib/ai/storytelling"

export function StoryGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [story, setStory] = useState<CulturalStoryOutput | null>(null)
  const [productData, setProductData] = useState({
    name: "Zapotec Diamond Rug",
    materials: "wool, natural dyes",
    timeTaken: "3 weeks",
    culturalTechnique: "traditional Zapotec weaving",
    historicalContext: "500-year-old Oaxacan tradition",
    artisanName: "Maria Santos",
    artisanRegion: "Oaxaca, Mexico",
    artisanTradition: "Zapotec weaving",
    artisanExperience: "25",
    artisanBackground: "5th generation weaver preserving ancestral techniques",
  })

  const generateStory = async () => {
    setIsGenerating(true)

    try {
      const artisan: ArtisanProfile = {
        name: productData.artisanName,
        background: productData.artisanBackground,
        region: productData.artisanRegion,
        tradition: productData.artisanTradition,
        yearsOfExperience: Number.parseInt(productData.artisanExperience),
        specialties: [productData.culturalTechnique],
        culturalSignificance: productData.historicalContext,
      }

      const product: ProductDetails = {
        name: productData.name,
        materials: productData.materials.split(",").map((m) => m.trim()),
        timeTaken: productData.timeTaken,
        culturalTechnique: productData.culturalTechnique,
        historicalContext: productData.historicalContext,
        artisan,
      }

      const response = await fetch("/api/ai/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate story")
      }

      const generatedStory = await response.json()
      setStory(generatedStory)
    } catch (error) {
      console.error("Error generating story:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>AI Cultural Storytelling Generator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="productName">Product Name</Label>
              <Input
                id="productName"
                value={productData.name}
                onChange={(e) => setProductData((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="materials">Materials (comma-separated)</Label>
              <Input
                id="materials"
                value={productData.materials}
                onChange={(e) => setProductData((prev) => ({ ...prev, materials: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeTaken">Time to Create</Label>
              <Input
                id="timeTaken"
                value={productData.timeTaken}
                onChange={(e) => setProductData((prev) => ({ ...prev, timeTaken: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="technique">Cultural Technique</Label>
              <Input
                id="technique"
                value={productData.culturalTechnique}
                onChange={(e) => setProductData((prev) => ({ ...prev, culturalTechnique: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="artisanName">Artisan Name</Label>
              <Input
                id="artisanName"
                value={productData.artisanName}
                onChange={(e) => setProductData((prev) => ({ ...prev, artisanName: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="artisanRegion">Artisan Region</Label>
              <Input
                id="artisanRegion"
                value={productData.artisanRegion}
                onChange={(e) => setProductData((prev) => ({ ...prev, artisanRegion: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="historicalContext">Historical Context</Label>
            <Textarea
              id="historicalContext"
              value={productData.historicalContext}
              onChange={(e) => setProductData((prev) => ({ ...prev, historicalContext: e.target.value }))}
              rows={2}
            />
          </div>

          <Button onClick={generateStory} disabled={isGenerating} className="w-full">
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Cultural Story...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate AI Story
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {story && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Generated Cultural Story</span>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">
                    <Award className="h-3 w-3 mr-1" />
                    Authenticity: {story.authenticity_score}%
                  </Badge>
                  <Badge className="bg-primary">
                    <Heart className="h-3 w-3 mr-1" />
                    Impact: {story.impact_score}%
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Short Story</h4>
                  <p className="text-muted-foreground">{story.story_short}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Detailed Cultural Narrative</h4>
                  <p className="text-muted-foreground leading-relaxed">{story.story_long}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-secondary/30">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <h5 className="font-semibold">Fair Pricing</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">{story.price_range}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary/30">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Heart className="h-4 w-4 text-primary" />
                        <h5 className="font-semibold">Cultural Impact</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">{story.impact_explanation}</p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Cultural Significance</h4>
                  <p className="text-muted-foreground">{story.cultural_significance}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Preservation Value</h4>
                  <p className="text-muted-foreground">{story.preservation_value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
