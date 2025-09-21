"use client"

import { useCartStore } from "@/lib/store/cart"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { X, Plus, Minus, ShoppingBag, Heart, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CartSidebar() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice, getCulturalImpact } = useCartStore()

  const totalPrice = getTotalPrice()
  const culturalImpact = getCulturalImpact()
  const shipping = totalPrice > 200 ? 0 : 25
  const finalTotal = totalPrice + shipping

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleCart} />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <h2 className="font-serif text-xl font-semibold">Your Cart</h2>
              {items.length > 0 && <Badge variant="secondary">{items.length} items</Badge>}
            </div>
            <Button variant="ghost" size="sm" onClick={toggleCart}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {items.length === 0 ? (
            /* Empty Cart */
            <div className="flex-1 flex items-center justify-center p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Your cart is empty</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Discover authentic handcrafted treasures from artisans worldwide
                  </p>
                  <Button onClick={toggleCart} className="w-full">
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="space-y-3">
                      <div className="flex space-x-4">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-secondary">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-2">
                          <div>
                            <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                            <p className="text-xs text-muted-foreground">by {item.artisan}</p>
                            <Badge variant="outline" className="text-xs mt-1">
                              {item.heritage}
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-6 w-6 p-0 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-6 w-6 p-0 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                          <div className="text-xs text-muted-foreground">${item.price} each</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground bg-secondary/30 rounded-lg p-2">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-3 w-3 text-primary" />
                          <span>Impact: {item.impactScore}%</span>
                        </div>
                        <span>{item.timeToMake} to craft</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Cultural Impact Summary */}
              <div className="p-6 border-t border-border bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Cultural Impact</span>
                  </div>
                  <Badge className="bg-primary">{culturalImpact}% Heritage Preservation</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your purchase supports traditional crafts and artisan communities
                </p>
              </div>

              {/* Order Summary */}
              <div className="p-6 border-t border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && <p className="text-xs text-green-600">Free shipping on orders over $200!</p>}
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Link href="/checkout" onClick={toggleCart}>
                    <Button className="w-full group">
                      Secure Checkout
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full bg-transparent" onClick={toggleCart}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
