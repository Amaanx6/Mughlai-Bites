"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "@/context/cart-store"
import { formatCurrency } from "@/lib/format"
import { motion } from "framer-motion"

export type Dish = {
  id: number
  name: string
  category: string
  price: number
  rating: number
  image: string
  spiceLevel: "Mild" | "Medium" | "Spicy"
  description: string
}

export function DishCard({ dish }: { dish: Dish }) {
  const add = useCartStore((s) => s.add)
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card className="overflow-hidden">
        <Link href={`/menu/${dish.id}`} aria-label={`View ${dish.name}`}>
          <Image
            alt={dish.name}
            src={dish.image || "/placeholder.svg"}
            width={480}
            height={320}
            className="w-full h-48 object-cover"
          />
        </Link>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between">
            <span className="text-pretty">{dish.name}</span>
            <span className="text-accent font-semibold">{formatCurrency(dish.price)}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-accent mr-1" />
              {dish.rating}
            </div>
            <div>{dish.category}</div>
          </div>
          <div className="mt-3 flex gap-2">
            <Button asChild variant="outline">
              <Link href={`/menu/${dish.id}`}>Details</Link>
            </Button>
            <Button
              className="bg-primary text-primary-foreground"
              onClick={() =>
                add({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, spiceLevel: dish.spiceLevel })
              }
            >
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
