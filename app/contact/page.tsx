"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="h-royal text-3xl mb-4">Contact Us</h1>
      {!sent ? (
        <form
          className="grid gap-3 max-w-xl"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <Input placeholder="Your name" />
          <Input placeholder="Email" type="email" />
          <Textarea placeholder="Message" />
          <Button type="submit" className="bg-primary text-primary-foreground">
            Send
          </Button>
        </form>
      ) : (
        <div className="text-sm text-muted-foreground">Thanks! We'll get back to you soon.</div>
      )}

      <div className="mt-8 aspect-video rounded-xl overflow-hidden border">
        <iframe
          title="Map"
          className="w-full h-full"
          src="https://maps.google.com/maps?q=Delhi&t=&z=11&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  )
}
