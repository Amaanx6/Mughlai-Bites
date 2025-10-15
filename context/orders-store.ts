"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { uuid } from "@/lib/format"
import type { CartItem } from "./cart-store"

export type Order = {
  id: string
  items: CartItem[]
  total: number
  createdAt: string
  status: "Preparing" | "Out for Delivery" | "Delivered"
}

type OrdersState = {
  orders: Order[]
  placeOrder: (items: CartItem[], total: number) => string
  updateStatus: (id: string, status: Order["status"]) => void
}

export const useOrdersStore = create<OrdersState>()(
  persist(
    (set, get) => ({
      orders: [],
      placeOrder(items, total) {
        const id = uuid()
        const entry: Order = { id, items, total, createdAt: new Date().toISOString(), status: "Preparing" }
        set({ orders: [entry, ...get().orders] })
        return id
      },
      updateStatus(id, status) {
        set({ orders: get().orders.map((o) => (o.id === id ? { ...o, status } : o)) })
      },
    }),
    { name: "mb-orders" },
  ),
)
