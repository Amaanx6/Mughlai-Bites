"use client"

import { useAuthStore } from "@/context/auth-store"
import { useOrdersStore } from "@/context/orders-store"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/format"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const { user, logout } = useAuthStore()
  const { orders } = useOrdersStore()
  const router = useRouter()

  if (!user) {
    if (typeof window !== "undefined") router.replace("/login")
    return null
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="h-royal text-3xl">Profile</h1>
      <div className="border rounded-lg p-4 mt-4">
        <div className="font-medium">{user.username}</div>
        <div className="text-sm text-muted-foreground">Role: {user.role}</div>
        <Button variant="outline" className="mt-3 bg-transparent" onClick={logout}>
          Logout
        </Button>
      </div>

      <h2 className="h-royal text-2xl mt-8 mb-3">Order History</h2>
      <div className="space-y-3">
        {orders.length === 0 && <div className="text-muted-foreground text-sm">No orders yet.</div>}
        {orders.map((o) => (
          <div key={o.id} className="border rounded-lg p-3">
            <div className="text-sm">
              Order ID: <span className="font-mono">{o.id}</span>
            </div>
            <div className="text-sm">Status: {o.status}</div>
            <div className="font-medium mt-1">Total: {formatCurrency(o.total)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
