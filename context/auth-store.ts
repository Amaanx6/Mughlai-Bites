"use client"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type Role = "admin" | "user"
export type User = { id: number; username: string; role: Role } | null

type AuthState = {
  user: User
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      async login(username, password) {
        // Mock users
        const users = (await import("@/data/users.json")).default as Array<{
          id: number
          username: string
          password: string
          role: Role
        }>
        const found = users.find((u) => u.username === username && u.password === password)
        if (found) {
          set({ user: { id: found.id, username: found.username, role: found.role } })
          return true
        }
        return false
      },
      logout() {
        set({ user: null })
      },
    }),
    { name: "mb-auth" },
  ),
)
