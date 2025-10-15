"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "@/context/cart-store"
import { formatCurrency } from "@/lib/format"
import { motion, AnimatePresence } from "framer-motion"

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
  const [showToast, setShowToast] = useState(false)

  const handleAddToCart = () => {
    add({ 
      id: dish.id, 
      name: dish.name, 
      price: dish.price, 
      image: dish.image, 
      spiceLevel: dish.spiceLevel 
    })
    
    // Show toast
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <>
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
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Inline Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="fixed bottom-4 right-4 z-50"
          >
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">Added to cart</div>
                <div className="text-sm opacity-90">{dish.name}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}