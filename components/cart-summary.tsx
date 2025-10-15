"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCartStore } from "@/context/cart-store"
import { useEffect, useState } from "react"
import { formatCurrency } from "@/lib/format"
import { useRouter } from "next/navigation"

export function CartSummary() {
  const router = useRouter()
  const subtotal = useCartStore((s) => s.subtotal())
  const [coupon, setCoupon] = useState("")
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    if (coupon.trim().toUpperCase() === "MUGHLAI10") setDiscount(0.1)
    else setDiscount(0)
  }, [coupon])

  const total = Math.round(subtotal * (1 - discount))

  return (
    <div className="border rounded-lg p-4 space-y-3 bg-card">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Subtotal</span>
        <span className="font-medium">{formatCurrency(subtotal)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Discount</span>
        <span className="font-medium">-{formatCurrency(subtotal * discount)}</span>
      </div>
      <div className="flex items-center justify-between border-t pt-2">
        <span className="font-semibold">Total</span>
        <span className="font-semibold text-accent">{formatCurrency(total)}</span>
      </div>

      <div className="flex gap-2">
        <Input placeholder="Coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
        <Button className="bg-primary text-primary-foreground" onClick={() => router.push("/checkout")}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}
