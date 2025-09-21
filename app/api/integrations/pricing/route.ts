import { type NextRequest, NextResponse } from "next/server"
import { MLPricingService } from "@/lib/integrations/ml-pricing"

const pricingService = new MLPricingService()

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json()

    const recommendation = await pricingService.getPricingRecommendation(productData)

    return NextResponse.json(recommendation)
  } catch (error) {
    console.error("Pricing API error:", error)
    return NextResponse.json({ error: "Failed to generate pricing recommendation" }, { status: 500 })
  }
}
