"use client"

import { useCartStore } from "@/context/cart-store"
import { CheckoutForm } from "@/components/checkout-form"
import { formatCurrency } from "@/lib/format"
import { motion } from "framer-motion"
import { CreditCard, ShoppingBag } from "lucide-react"

export default function CheckoutPage() {
  const subtotal = useCartStore((s) => s.subtotal())
  const total = Math.round(subtotal * 0.9) // presume coupon may apply on previous screen; display subtotal and total anyway

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="h-royal text-4xl md:text-5xl text-balance">Checkout</h1>
            <p className="mt-3 text-muted-foreground">
              Complete your order securely with Razorpay
            </p>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="h-royal text-2xl mb-4">Payment Details</h2>
            <div className="border rounded-lg p-6 bg-secondary">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Razorpay Checkout</div>
                  <div className="text-xs text-muted-foreground">Secure payment gateway</div>
                </div>
              </div>
              <CheckoutForm total={total} />
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="h-royal text-2xl mb-4">Order Summary</h2>
            <div className="border rounded-lg p-6 bg-secondary">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <div className="font-semibold">Your Order</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Subtotal</div>
                  <div className="font-medium">{formatCurrency(subtotal)}</div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm font-semibold">Estimated Total</div>
                  <div className="text-xl font-semibold text-primary">{formatCurrency(total)}</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-xs text-muted-foreground text-center">
                  By completing this purchase, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}