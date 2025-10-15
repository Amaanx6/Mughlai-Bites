"use client"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
  categories,
}: {
  search: string
  setSearch: (v: string) => void
  category: string
  setCategory: (v: string) => void
  categories: string[]
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Input placeholder="Search dishes..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger>
          <SelectValue placeholder="All categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {categories.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
