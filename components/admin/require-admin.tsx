"use client"
import { useAuthStore } from "@/context/auth-store"
import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function RequireAdmin({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.replace("/login")
    else if (user.role !== "admin") router.replace("/profile")
  }, [user, router])

  if (!user || user.role !== "admin") return null
  return <>{children}</>
}
