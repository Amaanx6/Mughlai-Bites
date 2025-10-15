"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuthStore } from "@/context/auth-store"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

const schema = z.object({
  username: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
})

export default function LoginPage() {
  const { toast } = useToast()
  const { login } = useAuthStore()
  const router = useRouter()
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "" },
  })

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const ok = await login(values.username, values.password)
    if (ok) {
      if (values.username === "admin") router.replace("/admin/dashboard")
      else router.replace("/profile")
    } else {
      toast({ title: "Invalid credentials", description: "Please try again.", variant: "destructive" })
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="h-royal text-3xl mb-4">Login</h1>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <Input placeholder="Username" {...form.register("username")} />
        <Input type="password" placeholder="Password" {...form.register("password")} />
        <Button type="submit" className="w-full bg-primary text-primary-foreground">
          Sign In
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-3">Admin: admin/admin, User: user/user</p>
    </div>
  )
}
