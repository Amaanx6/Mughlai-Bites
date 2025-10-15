"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  spiceLevel?: "Mild" | "Medium" | "Spicy"
}

type CartState = {
  items: CartItem[]
  add: (item: Omit<CartItem, "quantity">, qty?: number) => void
  remove: (id: number) => void
  updateQty: (id: number, qty: number) => void
  clear: () => void
  subtotal: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add(item, qty = 1) {
        const items = [...get().items]
        const idx = items.findIndex((i) => i.id === item.id && i.spiceLevel === item.spiceLevel)
        if (idx >= 0) items[idx].quantity += qty
        else items.push({ ...item, quantity: qty })
        set({ items })
      },
      remove(id) {
        set({ items: get().items.filter((i) => i.id !== id) })
      },
      updateQty(id, qty) {
        set({ items: get().items.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)) })
      },
      clear() {
        set({ items: [] })
      },
      subtotal() {
        return get().items.reduce((acc, i) => acc + i.price * i.quantity, 0)
      },
    }),
    { name: "mb-cart" },
  ),
)
