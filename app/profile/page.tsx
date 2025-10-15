"use client"

import { useAuthStore } from "@/context/auth-store"
import { useOrdersStore } from "@/context/orders-store"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/format"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { User, LogOut, ShoppingBag } from "lucide-react"

export default function ProfilePage() {
  const { user, logout } = useAuthStore()
  const { orders } = useOrdersStore()
  const router = useRouter()

  if (!user) {
    if (typeof window !== "undefined") router.replace("/login")
    return null
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="h-royal text-4xl md:text-5xl text-balance">Your Profile</h1>
            <p className="mt-3 text-muted-foreground">
              Manage your account and view your order history
            </p>
          </div>
        </div>
      </section>

      {/* Profile Info */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="h-royal text-2xl mb-4">Account Information</h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg p-6 bg-secondary"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">{user.username}</div>
              <div className="text-sm text-muted-foreground mt-1">Role: {user.role}</div>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={logout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Order History */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="h-royal text-2xl mb-4">Order History</h2>
        {orders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border rounded-lg p-8 text-center bg-secondary"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground">No orders yet.</p>
            <p className="text-sm text-muted-foreground mt-1">Start exploring our menu to place your first order!</p>
          </motion.div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orders.map((o, idx) => (
              <motion.div
                key={o.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border rounded-lg p-4 bg-secondary"
              >
                <div className="text-sm text-muted-foreground">Order ID</div>
                <div className="font-mono text-sm mb-2">{o.id}</div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t">
                  <div>
                    <div className="text-xs text-muted-foreground">Status</div>
                    <div className="text-sm font-medium capitalize">{o.status}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Total</div>
                    <div className="font-semibold">{formatCurrency(o.total)}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}