import { StoryGenerator } from "@/components/ai/story-generator"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function AIDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Cultural Intelligence
          </Badge>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Cultural Storytelling
            <span className="text-primary"> AI System</span>
          </h1>

          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Experience our AI-powered cultural storytelling engine that generates authentic narratives, fair pricing
            suggestions, and cultural impact scores for artisan products.
          </p>
        </div>

        <StoryGenerator />
      </main>
    </div>
  )
}
