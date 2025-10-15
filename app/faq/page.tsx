"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { HelpCircle, Truck, Leaf, Flame, CreditCard, Users } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    { 
      icon: Truck,
      q: "Do you offer delivery?", 
      a: "Yes, we deliver across the city during operating hours (11 AM - 11 PM). Delivery is free for orders above ₹500. Track your order in real-time through our app." 
    },
    { 
      icon: Leaf,
      q: "Is there a vegetarian menu?", 
      a: "Absolutely! We have an extensive vegetarian Mughlai menu including Paneer Tikka, Vegetable Korma, Dal Makhani, and Mughlai Paratha. All dishes are clearly marked on our menu." 
    },
    { 
      icon: Flame,
      q: "What about spice levels?", 
      a: "You can customize the spice level for any dish. Choose from Mild, Medium, or Spicy when placing your order. Our chefs will adjust the heat to match your preference perfectly." 
    },
    { 
      icon: CreditCard,
      q: "Which payment methods do you accept?", 
      a: "We accept all major payment methods including Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery. Our checkout process is secure and easy to use." 
    },
    { 
      icon: Users,
      q: "Do you cater events?", 
      a: "Yes! We provide catering services for weddings, corporate events, and parties. Contact us for custom menu planning and special pricing for bulk orders." 
    },
  ]

  const categories = [
    { title: "Orders & Delivery", count: 2 },
    { title: "Menu & Dietary", count: 1 },
    { title: "Payment & Pricing", count: 1 },
    { title: "Services", count: 1 }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background text-sm font-medium">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span>Got Questions?</span>
            </div>
            <h1 className="h-royal text-4xl md:text-5xl text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-balance">
              Find answers to common questions about our menu, delivery, and services
            </p>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border rounded-lg p-4 bg-secondary text-center"
            >
              <div className="font-semibold text-sm mb-1">{cat.title}</div>
              <div className="text-xs text-muted-foreground">{cat.count} questions</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border rounded-xl bg-secondary p-6"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border rounded-lg bg-background px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">{f.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-[52px] pr-4 text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="border rounded-xl bg-secondary p-8 text-center">
          <h2 className="h-royal text-2xl mb-3">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center px-6 py-2 rounded-md border bg-background font-medium hover:bg-secondary transition-colors"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}