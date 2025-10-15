"use client"

import Image from "next/image"
import { useCartStore } from "@/context/cart-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartSummary } from "@/components/cart-summary"

export default function CartPage() {
  const { items, remove, updateQty } = useCartStore()

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="h-royal text-3xl mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-3">
            {items.map((it) => (
              <div key={it.id} className="flex gap-3 border rounded-lg p-3">
                <Image
                  src={it.image || "/placeholder.svg"}
                  alt={it.name}
                  width={96}
                  height={96}
                  className="rounded-md border w-24 h-24 object-cover"
                />
                <div className="flex-1">
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-muted-foreground">Spice: {it.spiceLevel}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      className="w-20"
                      type="number"
                      min={1}
                      value={it.quantity}
                      onChange={(e) => updateQty(it.id, Number(e.target.value))}
                    />
                    <Button variant="outline" onClick={() => remove(it.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CartSummary />
        </div>
      )}
    </div>
  )
}
