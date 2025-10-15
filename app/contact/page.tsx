"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      subtext: "Mon-Sun, 11 AM - 11 PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@mughlaibites.com",
      subtext: "We reply within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Delhi, India",
      subtext: "Royal Mughlai District"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "11:00 AM - 11:00 PM",
      subtext: "Open all days"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="h-royal text-4xl md:text-5xl text-balance">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-balance">
              Have questions about our menu or want to place a special order? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border rounded-lg p-6 bg-secondary text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              <p className="text-sm font-medium mb-1">{info.details}</p>
              <p className="text-xs text-muted-foreground">{info.subtext}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="border rounded-xl bg-secondary p-6 md:p-8">
              <h2 className="h-royal text-2xl mb-2">Send Us a Message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and we'll respond as soon as possible.
              </p>

              {!sent ? (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email</label>
                    <Input placeholder="your.email@example.com" type="email" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone (Optional)</label>
                    <Input placeholder="+91 98765 43210" type="tel" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <Textarea 
                      placeholder="Tell us how we can help you..." 
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-lg">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out! We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSent(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="border rounded-xl overflow-hidden h-full min-h-[500px]">
              <iframe
                title="Mughlai Bites Location"
                className="w-full h-full"
                src="https://maps.google.com/maps?q=Delhi&t=&z=11&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="border rounded-xl bg-secondary p-8 text-center">
          <h2 className="h-royal text-2xl mb-3">Visit Our Restaurant</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the royal ambience in person. Our restaurant features traditional Mughal decor, 
            live tandoor cooking, and an extensive menu of authentic dishes prepared by master chefs.
          </p>
        </div>
      </section>
    </div>
  )
}