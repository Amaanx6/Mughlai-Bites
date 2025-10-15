"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuthStore } from "@/context/auth-store"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { LogIn, User, Lock, Crown, ShieldCheck } from "lucide-react"
import Image from "next/image"

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
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
      toast({ 
        title: "Welcome back!", 
        description: `Logged in as ${values.username}`,
      })
      if (values.username === "admin") router.replace("/admin/dashboard")
      else router.replace("/profile")
    } else {
      toast({ 
        title: "Invalid credentials", 
        description: "Please check your username and password.", 
        variant: "destructive" 
      })
    }
  }

  const quickLogins = [
    { role: "Admin", icon: Crown, username: "admin", password: "admin", desc: "Full dashboard access" },
    { role: "User", icon: User, username: "user", password: "user", desc: "Customer account" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Secure Login</span>
            </div>
            <h1 className="h-royal text-4xl md:text-5xl">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to access your account and continue your royal culinary journey
            </p>
          </div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="border rounded-xl bg-secondary p-6 md:p-8 max-w-md mx-auto lg:mx-0">
              <div className="mb-6">
                <h2 className="h-royal text-2xl mb-2">Sign In</h2>
                <p className="text-sm text-muted-foreground">
                  Enter your credentials to continue
                </p>
              </div>

              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      placeholder="Enter username" 
                      className="pl-10"
                      {...form.register("username")} 
                    />
                  </div>
                  {form.formState.errors.username && (
                    <p className="text-xs text-destructive mt-1">
                      {form.formState.errors.username.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      type="password" 
                      placeholder="Enter password" 
                      className="pl-10"
                      {...form.register("password")} 
                    />
                  </div>
                  {form.formState.errors.password && (
                    <p className="text-xs text-destructive mt-1">
                      {form.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground"
                  disabled={form.formState.isSubmitting}
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              {/* Quick Login Options */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-secondary px-2 text-muted-foreground">Demo Accounts</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  {quickLogins.map((demo, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        form.setValue("username", demo.username)
                        form.setValue("password", demo.password)
                      }}
                      className="border rounded-lg p-3 bg-background hover:bg-muted transition-colors text-left"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <demo.icon className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-sm">{demo.role}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{demo.desc}</p>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Click to auto-fill credentials
                </p>
              </div>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <Image
                src="/royal-mughlai-feast-platter.jpg"
                alt="Mughlai cuisine"
                width={600}
                height={600}
                className="rounded-xl border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl flex items-end p-6">
                <div>
                  <h3 className="font-bold text-xl mb-2">Experience Royal Flavors</h3>
                  <p className="text-sm text-muted-foreground">
                    Sign in to access exclusive deals, track orders, and manage your preferences
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="border rounded-xl bg-secondary p-8">
          <div className="text-center mb-6">
            <h2 className="h-royal text-2xl mb-2">Why Create an Account?</h2>
            <p className="text-sm text-muted-foreground">Enjoy these benefits with your Mughlai Bites account</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Fast Checkout", desc: "Save addresses and payment info for quick orders" },
              { title: "Order History", desc: "Track all your past orders and reorder favorites" },
              { title: "Exclusive Offers", desc: "Get special discounts and early access to new dishes" }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}