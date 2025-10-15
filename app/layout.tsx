import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Cinzel_Decorative, Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import "./globals.css"

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mughlai Bites",
  description: "Taste the Royal Tradition",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${inter.variable} ${GeistSans.variable} ${GeistMono.variable} font-sans min-h-dvh flex flex-col`}
      >
        <Suspense>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
