"use client"

import { useCartStore } from "@/context/cart-store"
import { CheckoutForm } from "@/components/checkout-form"
import { formatCurrency } from "@/lib/format"

export default function CheckoutPage() {
  const subtotal = useCartStore((s) => s.subtotal())
  const total = Math.round(subtotal * 0.9) // presume coupon may apply on previous screen; display subtotal and total anyway

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-2">
      <div>
        <h1 className="h-royal text-3xl mb-2">Razorpay Checkout (Mock)</h1>
        <p className="text-muted-foreground mb-4">Securely complete your order payment.</p>
        <CheckoutForm total={total} />
      </div>
      <div className="border rounded-lg p-4 bg-card h-fit">
        <div className="font-semibold mb-2">Order Summary</div>
        <div className="text-sm text-muted-foreground">Subtotal</div>
        <div className="mb-2">{formatCurrency(subtotal)}</div>
        <div className="text-sm text-muted-foreground">Estimated Total</div>
        <div className="text-accent font-semibold">{formatCurrency(total)}</div>
      </div>
    </div>
  )
}
