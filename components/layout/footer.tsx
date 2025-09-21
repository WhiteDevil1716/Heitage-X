import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Globe, Mail, Instagram, Twitter, Facebook, MapPin, Phone, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center">
                <Globe className="h-4 w-4 text-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">HERITAGE X</span>
            </Link>

            <p className="text-background/80 text-pretty">
              Preserving cultural heritage through authentic artisan crafts. Every purchase supports traditional
              communities worldwide.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:text-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold">Explore</h3>
            <nav className="space-y-3">
              <Link href="/marketplace" className="block text-background/80 hover:text-background transition-colors">
                Marketplace
              </Link>
              <Link href="/artisans" className="block text-background/80 hover:text-background transition-colors">
                Featured Artisans
              </Link>
              <Link href="/stories" className="block text-background/80 hover:text-background transition-colors">
                Cultural Stories
              </Link>
              <Link href="/heritage" className="block text-background/80 hover:text-background transition-colors">
                Heritage Hub
              </Link>
              <Link href="/impact" className="block text-background/80 hover:text-background transition-colors">
                Our Impact
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold">Support</h3>
            <nav className="space-y-3">
              <Link href="/help" className="block text-background/80 hover:text-background transition-colors">
                Help Center
              </Link>
              <Link href="/shipping" className="block text-background/80 hover:text-background transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-background/80 hover:text-background transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="/authenticity" className="block text-background/80 hover:text-background transition-colors">
                Authenticity Guarantee
              </Link>
              <Link href="/contact" className="block text-background/80 hover:text-background transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-semibold">Stay Connected</h3>
            <p className="text-background/80 text-sm text-pretty">
              Get stories from artisans, new arrivals, and cultural insights delivered to your inbox.
            </p>

            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="secondary" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-background/60">We respect your privacy. Unsubscribe at any time.</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <MapPin className="h-4 w-4" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <Phone className="h-4 w-4" />
                <span>+91 (44) 2345-6789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-background/80">
              <span>© 2024 HERITAGE X. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-background/10 text-background border-background/20">
                <Heart className="h-3 w-3 mr-1" />
                Made with love for artisans
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
