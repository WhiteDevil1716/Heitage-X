import { CheckoutForm } from "@/components/checkout/checkout-form"
import { Header } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <ShieldCheck className="h-3 w-3 mr-1" />
            Secure Checkout
          </Badge>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Complete Your
            <span className="text-primary"> Heritage Purchase</span>
          </h1>

          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            You're about to support traditional artisan communities and preserve cultural heritage. Your purchase makes
            a real difference.
          </p>
        </div>

        <CheckoutForm />
      </main>
    </div>
  )
}
