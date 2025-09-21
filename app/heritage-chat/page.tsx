import { HeritageChatbot } from "@/components/ai/heritage-chatbot"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"

export default function HeritageChatPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1" />
            UNESCO-Trained Cultural Knowledge
          </Badge>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Heritage
            <span className="text-primary"> Knowledge Hub</span>
          </h1>

          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Explore the rich world of traditional crafts and cultural heritage. Our AI guide is trained on UNESCO data
            and artisan interviews to provide authentic insights into global craft traditions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <HeritageChatbot />
        </div>
      </main>
    </div>
  )
}
