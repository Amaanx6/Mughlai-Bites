"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/context/cart-store"
import { useOrdersStore } from "@/context/orders-store"

export function CheckoutForm({ total }: { total: number }) {
  const router = useRouter()
  const [method, setMethod] = useState("card")
  const [loading, setLoading] = useState(false)
  const items = useCartStore((s) => s.items)
  const clear = useCartStore((s) => s.clear)
  const placeOrder = useOrdersStore((s) => s.placeOrder)

  const pay = async () => {
    setLoading(true)
    // mock processing
    setTimeout(() => {
      const id = placeOrder(items, total)
      clear()
      router.push(`/success?order=${id}`)
    }, 1400)
  }

  return (
    <div className="space-y-4">
      <RadioGroup value={method} onValueChange={setMethod} className="grid gap-3">
        <div className="flex items-center gap-2 border rounded-lg p-3">
          <RadioGroupItem value="card" id="m-card" />
          <Label htmlFor="m-card">Card</Label>
        </div>
        <div className="flex items-center gap-2 border rounded-lg p-3">
          <RadioGroupItem value="upi" id="m-upi" />
          <Label htmlFor="m-upi">UPI</Label>
        </div>
        <div className="flex items-center gap-2 border rounded-lg p-3">
          <RadioGroupItem value="net" id="m-net" />
          <Label htmlFor="m-net">Net Banking</Label>
        </div>
      </RadioGroup>

      {method === "card" && (
        <div className="grid gap-3">
          <Input placeholder="Card number" />
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="MM/YY" />
            <Input placeholder="CVV" />
          </div>
          <Input placeholder="Name on card" />
        </div>
      )}
      {method === "upi" && <Input placeholder="your@upi" />}
      {method === "net" && <Input placeholder="Bank username" />}

      <Button className="w-full bg-primary text-primary-foreground" onClick={pay} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </div>
  )
}
