"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import foods from "@/data/foods.json"
import { Button } from "@/components/ui/button"
import { DishCard } from "@/components/dish-card"
import { motion } from "framer-motion"
import { Search, X, Utensils, Flame, Soup, ChefHat } from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const categoryIcons = {
    "Kebabs": Flame,
    "Korma": Soup,
    "Nihari": ChefHat,
    "Tandoori": Utensils
  }
  
  const categories = ["All", "Kebabs", "Korma", "Nihari", "Tandoori"]
  
  const filteredFoods = foods.filter((dish) => {
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dish.description?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  
  const featured = filteredFoods.slice(0, 8)
  
  const clearSearch = () => {
    setSearchQuery("")
    setSelectedCategory("All")
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-rose-950/20">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="h-royal text-4xl md:text-5xl text-balance">Taste the Royal Tradition</h1>
            <p className="mt-3 text-muted-foreground text-lg">
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
              className="rounded-xl border shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        {/* Refined Search & Filter UI */}
        <div className="mb-8">
          <div className="flex flex-col gap-4">
            {/* Search Bar - Minimal & Elegant */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for dishes, ingredients, or flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition-all text-base placeholder:text-muted-foreground"
              />
              {(searchQuery || selectedCategory !== "All") && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Category Filters - Clean & Minimal */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-muted-foreground">
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all font-medium text-sm ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            {/* Active Filters Display - Subtle */}
            {(searchQuery || selectedCategory !== "All") && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Showing results for:</span>
                {searchQuery && (
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded">
                    "{searchQuery}"
                  </span>
                )}
                {selectedCategory !== "All" && (
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded">
                    {selectedCategory}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="h-royal text-2xl">
            {searchQuery || selectedCategory !== "All" ? "Search Results" : "Featured Dishes"}
          </h2>
          <span className="text-sm text-muted-foreground">
            {featured.length} {featured.length === 1 ? 'dish' : 'dishes'}
          </span>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.length > 0 ? (
            featured.map((d) => (
              <DishCard key={d.id} dish={d} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-lg font-medium mb-2">No dishes found</p>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters
              </p>
              <Button onClick={clearSearch} variant="outline">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="h-royal text-2xl mb-6">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Kebabs", "Korma", "Nihari", "Tandoori"].map((c) => {
            const Icon = categoryIcons[c]
            const count = foods.filter(f => f.category === c).length
            return (
              <motion.button
                key={c}
                onClick={() => {
                  setSelectedCategory(c)
                  window.scrollTo({ top: 400, behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`border rounded-xl p-6 text-center transition-all cursor-pointer ${
                  selectedCategory === c
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-card hover:bg-accent hover:border-border'
                }`}
              >
                <Icon className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold text-lg">{c}</div>
                <div className="text-sm opacity-70 mt-1">{count} dishes</div>
              </motion.button>
            )
          })}
        </div>
      </section>
    </div>
  )
}