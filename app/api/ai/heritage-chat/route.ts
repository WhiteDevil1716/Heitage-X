import { type NextRequest, NextResponse } from "next/server"
import { culturalStorytelling } from "@/lib/ai/storytelling"

export async function POST(request: NextRequest) {
  try {
    const { question, context } = await request.json()

    const response = await culturalStorytelling.generateHeritageResponse(question, context)

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in heritage-chat API:", error)
    return NextResponse.json({ error: "Failed to generate heritage response" }, { status: 500 })
  }
}
