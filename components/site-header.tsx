"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ShoppingCart, User2, Menu, UtensilsCrossed, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "./theme-toggle"
import { useCartStore } from "@/context/cart-store"
import { useAuthStore } from "@/context/auth-store"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const itemsCount = useCartStore((s) => s.items.reduce((a, b) => a + b.quantity, 0))
  const { user, logout } = useAuthStore()

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header className="border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <UtensilsCrossed className="h-6 w-6 text-accent" />
          <span className="h-royal text-xl">Mughlai Bites</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <Link href={l.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "px-2 py-1 rounded-md hover:bg-secondary",
                        pathname === l.href && "underline underline-offset-4",
                      )}
                    >
                      {l.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <>
                <Button
                  variant="ghost"
                  onClick={() => router.push(user.role === "admin" ? "/admin/dashboard" : "/profile")}
                >
                  <User2 className="h-5 w-5 mr-2" />
                  {user.username}
                </Button>
                <Button variant="ghost" onClick={logout} aria-label="Logout">
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Button variant="ghost" onClick={() => router.push("/login")}>
                <User2 className="h-5 w-5 mr-2" />
                Login
              </Button>
            )}
            <Button
              onClick={() => router.push("/cart")}
              variant="default"
              className="bg-primary text-primary-foreground hover:opacity-90"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({itemsCount})
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="flex flex-col gap-2 mt-6">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "px-3 py-2 rounded-md hover:bg-secondary",
                      pathname === l.href && "underline underline-offset-4",
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="py-2">
                  <ThemeToggle />
                </div>
                <div className="flex gap-2">
                  {!user ? (
                    <Button onClick={() => (location.href = "/login")} variant="outline" className="w-full">
                      <User2 className="h-5 w-5 mr-2" />
                      Login
                    </Button>
                  ) : (
                    <Button onClick={logout} variant="outline" className="w-full bg-transparent">
                      <LogOut className="h-5 w-5 mr-2" />
                      Logout
                    </Button>
                  )}
                  <Button
                    onClick={() => (location.href = "/cart")}
                    className="w-full bg-primary text-primary-foreground"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Cart ({itemsCount})
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
