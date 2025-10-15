"use client"

import Image from "next/image"
import { useCartStore } from "@/context/cart-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartSummary } from "@/components/cart-summary"
import { motion } from "framer-motion"
import { ShoppingCart, Trash2 } from "lucide-react"

export default function CartPage() {
  const { items, remove, updateQty } = useCartStore()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="h-royal text-4xl md:text-5xl text-balance">Your Cart</h1>
            <p className="mt-3 text-muted-foreground">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border rounded-lg p-8 text-center bg-secondary"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground">Your cart is empty.</p>
            <p className="text-sm text-muted-foreground mt-1">Add some delicious dishes to get started!</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              {items.map((it, idx) => (
                <motion.div
                  key={it.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 border rounded-lg p-4 bg-secondary"
                >
                  <Image
                    src={it.image || "/placeholder.svg"}
                    alt={it.name}
                    width={96}
                    height={96}
                    className="rounded-md border w-24 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{it.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">Spice Level: {it.spiceLevel}</div>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-medium">Qty:</label>
                        <Input
                          className="w-20 h-9"
                          type="number"
                          min={1}
                          value={it.quantity}
                          onChange={(e) => updateQty(it.id, Number(e.target.value))}
                        />
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => remove(it.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CartSummary />
            </motion.div>
          </div>
        )}
      </section>
    </div>
  )
}