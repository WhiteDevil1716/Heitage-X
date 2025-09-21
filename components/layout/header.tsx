"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CartSidebar } from "@/components/cart/cart-sidebar"
import { useCartStore } from "@/lib/store/cart"
import { ShoppingBag, Search, Menu, X, Globe, Heart, User } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleCart, getTotalItems } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <Globe className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold text-foreground">HERITAGE X</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/marketplace"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Marketplace
              </Link>
              <Link
                href="/artisans"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Artisans
              </Link>
              <Link
                href="/heritage-chat"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Heritage Chat
              </Link>
              <Link
                href="/ai-demo"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                AI Stories
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Search className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Heart className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="sm" className="relative" onClick={toggleCart}>
                <ShoppingBag className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <User className="h-4 w-4" />
              </Button>

              {/* Mobile menu button */}
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border/40 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/marketplace"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Marketplace
                </Link>
                <Link
                  href="/artisans"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Artisans
                </Link>
                <Link
                  href="/heritage-chat"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Heritage Chat
                </Link>
                <Link
                  href="/ai-demo"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Stories
                </Link>
                <div className="flex items-center space-x-4 pt-4 border-t border-border/40">
                  <Button variant="ghost" size="sm">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4" />
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartSidebar />
    </>
  )
}
