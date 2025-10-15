"use client"

import Link from "next/link"
import Image from "next/image"
import foods from "@/data/foods.json"
import { Button } from "@/components/ui/button"
import { DishCard } from "@/components/dish-card"
import { motion } from "framer-motion"

export default function HomePage() {
  const featured = foods.slice(0, 4)

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="h-royal text-4xl md:text-5xl text-balance">Taste the Royal Tradition</h1>
            <p className="mt-3 text-muted-foreground">
              Mughlai Bites brings regal flavors to your table—kebabs, korma, nihari, and tandoori delights.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild className="bg-primary text-primary-foreground">
                <Link href="/menu">Explore Menu</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Image
              alt="Mughlai Feast"
              src="/royal-mughlai-feast-platter.jpg"
              width={600}
              height={420}
              className="rounded-xl border"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="h-royal text-2xl mb-4">Featured Dishes</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((d) => (
            <DishCard key={d.id} dish={d} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="h-royal text-2xl mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Kebabs", "Korma", "Nihari", "Tandoori"].map((c) => (
            <div key={c} className="border rounded-lg p-6 text-center bg-secondary">
              {c}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
