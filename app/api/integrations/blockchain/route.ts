import { type NextRequest, NextResponse } from "next/server"
import { BlockchainService } from "@/lib/integrations/blockchain"

const blockchainService = new BlockchainService()

export async function POST(request: NextRequest) {
  try {
    const { action, productId, artisanId, tokenId } = await request.json()

    switch (action) {
      case "create_token":
        const token = await blockchainService.createAuthenticityToken(productId, artisanId)
        return NextResponse.json(token)

      case "verify":
        const isAuthentic = await blockchainService.verifyAuthenticity(tokenId)
        return NextResponse.json({ authentic: isAuthentic })

      case "get_provenance":
        const provenance = await blockchainService.getProvenance(tokenId)
        return NextResponse.json(provenance)

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("Blockchain API error:", error)
    return NextResponse.json({ error: "Blockchain operation failed" }, { status: 500 })
  }
}
