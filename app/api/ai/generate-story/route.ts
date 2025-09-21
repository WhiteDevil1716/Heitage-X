import { type NextRequest, NextResponse } from "next/server"
import { CulturalStorytellingEngine } from "@/lib/ai/storytelling"

export async function POST(request: NextRequest) {
  try {
    const { prompt, product } = await request.json()

    // Initialize the storytelling engine
    const engine = new CulturalStorytellingEngine()

    // For now, use the fallback method since we need OpenAI integration
    // In production, this would call OpenAI API with the prompt
    const story = await engine.generateProductStory(product)

    return NextResponse.json(story)
  } catch (error) {
    console.error("Error in generate-story API:", error)
    return NextResponse.json({ error: "Failed to generate cultural story" }, { status: 500 })
  }
}
