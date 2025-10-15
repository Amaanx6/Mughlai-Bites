"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useMemo } from "react"
import { motion } from "framer-motion"

export default function SuccessPage() {
  const search = useSearchParams()
  const router = useRouter()
  const orderId = useMemo(
    () => search.get("order") || "ORDER-" + Math.random().toString(36).slice(2, 10).toUpperCase(),
    [search],
  )

  // Simple confetti with floating squares using framer-motion
  useEffect(() => {
    // No-op: animation handled by JSX below
  }, [])

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <div className="relative h-20 mb-6 overflow-visible">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute inline-block h-2 w-2 rounded-sm"
            style={{ background: ["#D4AF37", "#f59e0b", "#22c55e", "#ef4444"][i % 4], left: `${(i * 100) / 24}%` }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: [0, 60, 80], opacity: [1, 1, 0] }}
            transition={{ delay: i * 0.05, duration: 1.2, ease: "easeOut" }}
          />
        ))}
      </div>
      <h1 className="h-royal text-3xl">Payment Successful</h1>
      <p className="text-muted-foreground mt-2">Your order has been placed successfully.</p>
      <div className="mt-3 text-sm">
        Order ID: <span className="font-mono">{orderId}</span>
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <Button onClick={() => router.push("/profile")} className="bg-primary text-primary-foreground">
          Go to Orders
        </Button>
        <Button variant="outline" onClick={() => router.push("/")}>
          Return Home
        </Button>
      </div>
    </div>
  )
}
