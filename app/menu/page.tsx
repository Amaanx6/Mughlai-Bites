"use client"

import foods from "@/data/foods.json"
import { useMemo, useState } from "react"
import { DishCard } from "@/components/dish-card"
import { SearchFilter } from "@/components/search-filter"

export default function MenuPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const categories = useMemo(() => Array.from(new Set(foods.map((f) => f.category))), [])

  const filtered = foods.filter((f) => {
    const s = search.toLowerCase()
    const matchesSearch = !s || f.name.toLowerCase().includes(s) || f.description.toLowerCase().includes(s)
    const matchesCategory = !category || f.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="h-royal text-3xl mb-4">Menu</h1>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {filtered.map((d) => (
          <DishCard key={d.id} dish={d} />
        ))}
      </div>
    </div>
  )
}
