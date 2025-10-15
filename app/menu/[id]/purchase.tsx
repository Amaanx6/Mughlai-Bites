"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCartStore } from "@/context/cart-store"
import { formatCurrency } from "@/lib/format"
import type { Dish } from "@/components/dish-card"

export function AddToCartClient({ dish }: { dish: Dish }) {
  const add = useCartStore((s) => s.add)
  const [spice, setSpice] = useState<Dish["spiceLevel"]>(dish.spiceLevel)
  return (
    <div className="mt-4 space-y-3">
      <div className="grid w-52 gap-2">
        <Label>Spice level</Label>
        <Select value={spice} onValueChange={(v) => setSpice(v as any)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Mild">Mild</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Spicy">Spicy</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-3">
        <Button
          className="bg-primary text-primary-foreground"
          onClick={() => add({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, spiceLevel: spice })}
        >
          Add to Cart - {formatCurrency(dish.price)}
        </Button>
      </div>
    </div>
  )
}
