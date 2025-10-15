"use client"

import foodsData from "@/data/foods.json"
import { RequireAdmin } from "@/components/admin/require-admin"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useOrdersStore } from "@/context/orders-store"
import { formatCurrency } from "@/lib/format"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

export default function AdminDashboardPage() {
  const [foods, setFoods] = useState(foodsData)
  const { orders, updateStatus } = useOrdersStore()

  const revenue = orders.reduce((acc, o) => acc + o.total, 0)
  const stats = [
    { label: "Total Dishes", value: foods.length },
    { label: "Total Orders", value: orders.length },
    { label: "Revenue", value: formatCurrency(revenue) },
    { label: "Popular Dish", value: foods[0]?.name ?? "-" },
  ]

  const [open, setOpen] = useState(false)
  const [newDish, setNewDish] = useState({ name: "", price: 100, category: "Kebabs" })

  const addDish = () => {
    const id = Math.max(...foods.map((f) => f.id)) + 1
    setFoods([
      {
        id,
        name: newDish.name,
        price: Number(newDish.price),
        category: newDish.category,
        rating: 4.3,
        image: "/new-dish.jpg",
        spiceLevel: "Medium",
        description: "Newly added",
      },
      ...foods,
    ])
    setOpen(false)
  }

  const ordersChart = Object.entries(
    orders.reduce<Record<string, number>>((acc, o) => {
      const day = new Date(o.createdAt).toLocaleDateString()
      acc[day] = (acc[day] ?? 0) + o.total
      return acc
    }, {}),
  ).map(([name, value]) => ({ name, value }))

  return (
    <RequireAdmin>
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        <h1 className="h-royal text-3xl">Admin Dashboard</h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">{s.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-xl font-semibold">{s.value}</CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Revenue (by day)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ordersChart}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="var(--accent)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>Menu (CRUD)</CardTitle>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary text-primary-foreground">Add Dish</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Dish</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-3">
                    <Input
                      placeholder="Name"
                      value={newDish.name}
                      onChange={(e) => setNewDish((d) => ({ ...d, name: e.target.value }))}
                    />
                    <Input
                      type="number"
                      placeholder="Price"
                      value={newDish.price}
                      onChange={(e) => setNewDish((d) => ({ ...d, price: Number(e.target.value) }))}
                    />
                    <Input
                      placeholder="Category"
                      value={newDish.category}
                      onChange={(e) => setNewDish((d) => ({ ...d, category: e.target.value }))}
                    />
                    <Button onClick={addDish} className="bg-primary text-primary-foreground">
                      Save
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {foods.map((f) => (
                    <TableRow key={f.id}>
                      <TableCell>{f.name}</TableCell>
                      <TableCell>{f.category}</TableCell>
                      <TableCell>{formatCurrency(f.price)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((o) => (
                    <TableRow key={o.id}>
                      <TableCell className="font-mono">{o.id.slice(0, 8)}</TableCell>
                      <TableCell>
                        <select
                          className="bg-transparent border rounded px-2 py-1"
                          value={o.status}
                          onChange={(e) => updateStatus(o.id, e.target.value as any)}
                        >
                          <option>Preparing</option>
                          <option>Out for Delivery</option>
                          <option>Delivered</option>
                        </select>
                      </TableCell>
                      <TableCell>{formatCurrency(o.total)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Users (Static)</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Username</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>admin</TableCell>
                  <TableCell>admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>user</TableCell>
                  <TableCell>user</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </RequireAdmin>
  )
}
