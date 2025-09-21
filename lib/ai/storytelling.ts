// AI Cultural Storytelling System
// Generates rich cultural narratives, pricing suggestions, and impact scores

export interface ArtisanProfile {
  name: string
  background: string
  region: string
  tradition: string
  yearsOfExperience: number
  specialties: string[]
  culturalSignificance: string
}

export interface ProductDetails {
  name: string
  materials: string[]
  timeTaken: string
  culturalTechnique: string
  historicalContext: string
  symbolism?: string
  artisan: ArtisanProfile
}

export interface CulturalStoryOutput {
  story_short: string
  story_long: string
  price_range: string
  impact_score: number
  impact_explanation: string
  authenticity_score: number
  cultural_significance: string
  preservation_value: string
}

export class CulturalStorytellingEngine {
  private apiKey: string

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.OPENAI_API_KEY || ""
  }

  async generateProductStory(product: ProductDetails): Promise<CulturalStoryOutput> {
    const prompt = this.buildStoryPrompt(product)

    try {
      const response = await fetch("/api/ai/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, product }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate story")
      }

      return await response.json()
    } catch (error) {
      console.error("Error generating cultural story:", error)
      return this.getFallbackStory(product)
    }
  }

  private buildStoryPrompt(product: ProductDetails): string {
    return `
You are an AI cultural storytelling expert for an artisan marketplace. Generate a comprehensive cultural story for this handcrafted product.

PRODUCT DETAILS:
- Name: ${product.name}
- Artisan: ${product.artisan.name} from ${product.artisan.region}
- Tradition: ${product.artisan.tradition}
- Materials: ${product.materials.join(", ")}
- Technique: ${product.culturalTechnique}
- Time to Create: ${product.timeTaken}
- Historical Context: ${product.historicalContext}
- Cultural Background: ${product.artisan.background}
- Years of Experience: ${product.artisan.yearsOfExperience}

REQUIREMENTS:
1. Be culturally respectful and educational
2. Highlight the preservation of traditional techniques
3. Explain the cultural significance and symbolism
4. Calculate fair pricing based on time, skill, materials, and cultural rarity
5. Generate an impact score (0-100) based on cultural preservation value
6. Provide authenticity assessment

OUTPUT FORMAT (JSON):
{
  "story_short": "2-3 sentence compelling description",
  "story_long": "Detailed 150-200 word cultural narrative",
  "price_range": "$X - $Y (reasoning: time, materials, skill level, cultural rarity)",
  "impact_score": 85,
  "impact_explanation": "How this purchase preserves cultural heritage",
  "authenticity_score": 95,
  "cultural_significance": "Historical and cultural importance",
  "preservation_value": "What traditions this helps preserve"
}
    `
  }

  private getFallbackStory(product: ProductDetails): CulturalStoryOutput {
    // Fallback story generation using template-based approach
    const basePrice = this.calculateBasePrice(product)
    const impactScore = this.calculateImpactScore(product)

    return {
      story_short: `Handcrafted ${product.name} by master artisan ${product.artisan.name}, preserving ${product.artisan.tradition} techniques passed down through generations.`,
      story_long: `This exquisite ${product.name} represents the culmination of ${product.artisan.yearsOfExperience} years of dedicated craftsmanship by ${product.artisan.name} from ${product.artisan.region}. Using traditional ${product.culturalTechnique} techniques and authentic ${product.materials.join(" and ")} materials, each piece takes ${product.timeTaken} to complete. The intricate patterns and methods used in this creation have been preserved within the ${product.artisan.tradition} community for centuries, making each piece not just an object of beauty, but a vessel of cultural heritage. By choosing this piece, you become part of a story that spans generations, supporting the continuation of these precious traditions while bringing authentic cultural artistry into your space.`,
      price_range: `$${basePrice.min} - $${basePrice.max} (based on ${product.timeTaken} crafting time, premium ${product.materials.join("/")} materials, master-level skill, and cultural rarity)`,
      impact_score: impactScore,
      impact_explanation: `Your purchase directly supports the preservation of ${product.artisan.tradition} traditions and provides sustainable income to artisan communities in ${product.artisan.region}.`,
      authenticity_score: 92,
      cultural_significance: `This piece represents the living heritage of ${product.artisan.tradition}, embodying techniques and cultural knowledge passed down through ${product.artisan.yearsOfExperience} years of practice.`,
      preservation_value: `Helps maintain traditional ${product.culturalTechnique} methods and supports the economic sustainability of cultural communities.`,
    }
  }

  private calculateBasePrice(product: ProductDetails): { min: number; max: number } {
    // Simple pricing algorithm based on time, materials, and skill
    const timeMultiplier = this.getTimeMultiplier(product.timeTaken)
    const materialCost = this.getMaterialCost(product.materials)
    const skillLevel = Math.min(product.artisan.yearsOfExperience / 10, 3) // Cap at 3x multiplier
    const culturalRarity = 1.5 // Cultural significance multiplier

    const basePrice = timeMultiplier * 50 + materialCost
    const adjustedPrice = basePrice * skillLevel * culturalRarity

    return {
      min: Math.round(adjustedPrice * 0.8),
      max: Math.round(adjustedPrice * 1.2),
    }
  }

  private getTimeMultiplier(timeTaken: string): number {
    const timeStr = timeTaken.toLowerCase()
    if (timeStr.includes("week")) {
      const weeks = Number.parseInt(timeStr) || 1
      return weeks * 7
    } else if (timeStr.includes("day")) {
      const days = Number.parseInt(timeStr) || 1
      return days
    } else if (timeStr.includes("month")) {
      const months = Number.parseInt(timeStr) || 1
      return months * 30
    }
    return 7 // Default to 1 week
  }

  private getMaterialCost(materials: string[]): number {
    const materialCosts: Record<string, number> = {
      wool: 30,
      alpaca: 50,
      silk: 80,
      cotton: 20,
      clay: 15,
      ceramic: 25,
      wood: 35,
      bamboo: 25,
      metal: 40,
      gold: 200,
      silver: 100,
      "natural dyes": 40,
      "organic materials": 30,
    }

    return materials.reduce((total, material) => {
      const cost = materialCosts[material.toLowerCase()] || 25
      return total + cost
    }, 0)
  }

  private calculateImpactScore(product: ProductDetails): number {
    let score = 70 // Base score

    // Add points for experience
    score += Math.min(product.artisan.yearsOfExperience / 2, 15)

    // Add points for traditional techniques
    if (product.culturalTechnique.includes("traditional") || product.culturalTechnique.includes("ancient")) {
      score += 10
    }

    // Add points for natural materials
    const naturalMaterials = ["wool", "cotton", "clay", "wood", "bamboo", "natural dyes"]
    const hasNaturalMaterials = product.materials.some((material) =>
      naturalMaterials.some((natural) => material.toLowerCase().includes(natural)),
    )
    if (hasNaturalMaterials) {
      score += 5
    }

    return Math.min(score, 100)
  }

  // Generate cultural heritage chatbot responses
  async generateHeritageResponse(question: string, context?: string): Promise<string> {
    const prompt = `
You are a cultural heritage expert chatbot for an artisan marketplace. Answer questions about traditional crafts, cultural significance, and artisan techniques.

Question: ${question}
Context: ${context || "General cultural heritage inquiry"}

Provide an educational, respectful response that:
1. Explains cultural significance
2. Provides historical context
3. Highlights preservation importance
4. Connects to artisan communities

Keep responses informative but accessible, around 100-150 words.
    `

    try {
      const response = await fetch("/api/ai/heritage-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, question }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate heritage response")
      }

      const data = await response.json()
      return data.response
    } catch (error) {
      console.error("Error generating heritage response:", error)
      return this.getFallbackHeritageResponse(question)
    }
  }

  private getFallbackHeritageResponse(question: string): string {
    const fallbackResponses: Record<string, string> = {
      weaving:
        "Traditional weaving techniques represent one of humanity's oldest crafts, with each culture developing unique patterns and methods that tell stories of their heritage. These techniques preserve not just artistic knowledge, but cultural identity and community traditions.",
      pottery:
        "Ceramic arts connect us to our ancestors through clay, fire, and human creativity. Each pottery tradition carries unique glazing techniques, firing methods, and cultural symbolism that have been refined over centuries.",
      textiles:
        "Textile traditions embody the cultural DNA of communities worldwide. From natural dye processes to intricate pattern work, these crafts preserve indigenous knowledge and provide sustainable livelihoods for artisan families.",
      default:
        "Traditional crafts are living repositories of cultural knowledge, preserving techniques, stories, and community wisdom that might otherwise be lost. Each handmade piece connects us to this rich heritage while supporting artisan communities.",
    }

    const questionLower = question.toLowerCase()
    for (const [key, response] of Object.entries(fallbackResponses)) {
      if (questionLower.includes(key)) {
        return response
      }
    }

    return fallbackResponses.default
  }
}

// Export singleton instance
export const culturalStorytelling = new CulturalStorytellingEngine()
