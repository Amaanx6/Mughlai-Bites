import foods from "@/data/foods.json"
import Image from "next/image"
import { notFound } from "next/navigation"
import { AddToCartClient } from "./purchase"

export default function DishDetailsPage({ params }: { params: { id: string } }) {
  const dish = foods.find((d) => d.id === Number(params.id))
  if (!dish) return notFound()

  const related = foods.filter((d) => d.category === dish.category && d.id !== dish.id).slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 grid gap-8 md:grid-cols-2">
      <Image
        alt={dish.name}
        src={dish.image || "/placeholder.svg"}
        width={640}
        height={420}
        className="rounded-xl border"
      />
      <div>
        <h1 className="h-royal text-3xl">{dish.name}</h1>
        <p className="text-muted-foreground mt-2">{dish.description}</p>
        <AddToCartClient dish={dish} />
      </div>

      {related.length > 0 && (
        <div className="md:col-span-2">
          <h2 className="h-royal text-2xl mt-6 mb-3">Related</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <a key={r.id} href={`/menu/${r.id}`} className="border rounded-lg p-4 hover:bg-secondary">
                {r.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
