"use client"

import { motion } from "framer-motion"
import { Utensils, Crown, Flame, Clock, ChefHat, Heart } from 'lucide-react'
import Image from "next/image"

export default function AboutPage() {
  const features = [
    {
      icon: Crown,
      title: "Royal Heritage",
      description: "Recipes passed down from Mughal emperors, refined over centuries"
    },
    {
      icon: Flame,
      title: "Authentic Spices",
      description: "Hand-ground masalas and traditional spice blends"
    },
    {
      icon: Clock,
      title: "Slow Cooked",
      description: "Hours of preparation for tender, flavorful perfection"
    },
    {
      icon: ChefHat,
      title: "Master Chefs",
      description: "Trained in traditional Mughlai cooking techniques"
    }
  ]

  const timeline = [
    { period: "16th Century", event: "Mughal Empire brings Persian influences to Indian cuisine" },
    { period: "17th Century", event: "Development of signature dishes like Biryani and Korma" },
    { period: "18th Century", event: "Peak of royal kitchen innovations under Shah Jahan" },
    { period: "Today", event: "We preserve these timeless traditions at Mughlai Bites" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background text-sm font-medium">
              <Crown className="w-4 h-4 text-primary" />
              <span>Since the Mughal Era</span>
            </div>
            <h1 className="h-royal text-4xl md:text-5xl text-balance">
              A Royal Culinary Legacy
            </h1>
            <p className="text-muted-foreground text-balance">
              Experience the grandeur of Mughlai cuisine — where every dish tells a story of emperors, palaces, and timeless traditions
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-primary">
              <Utensils className="w-5 h-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">Our Story</span>
            </div>
            <h2 className="h-royal text-3xl">
              The Art of Mughlai Cooking
            </h2>
            <p className="text-muted-foreground">
              Mughlai cuisine emerged from the royal kitchens of the Mughal Empire, blending Persian sophistication with Indian richness. Each dish is a masterpiece — slow-cooked meats marinated in yogurt and spices, gravies enriched with cream and nuts, and breads baked fresh in clay tandoors.
            </p>
            <p className="text-muted-foreground">
              At Mughlai Bites, we honor this legacy by sourcing premium ingredients, following traditional recipes, and cooking with the patience these dishes deserve. Every kebab, every korma, every biryani is crafted to transport you to the golden age of Mughal royalty.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <span className="text-sm text-muted-foreground italic">Made with love and tradition</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="/royal-mughlai-dining-ambience.jpg" 
              alt="Royal Mughlai dining experience" 
              width={600}
              height={450}
              className="rounded-xl border w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-center space-y-3 mb-8">
          <h2 className="h-royal text-3xl">What Makes Us Special</h2>
          <p className="text-muted-foreground">The pillars of authentic Mughlai cuisine</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border rounded-lg p-6 bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-center space-y-3 mb-8">
          <h2 className="h-royal text-3xl">A Journey Through Time</h2>
          <p className="text-muted-foreground">Centuries of culinary excellence</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                {idx < timeline.length - 1 && (
                  <div className="w-0.5 h-full min-h-[60px] bg-border mt-2"></div>
                )}
              </div>
              <div className="border rounded-lg p-4 bg-secondary flex-1">
                <div className="font-bold text-primary mb-1">{item.period}</div>
                <div className="text-sm text-muted-foreground">{item.event}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="border rounded-xl bg-secondary p-8 md:p-12">
          <div className="text-center space-y-6">
            <h2 className="h-royal text-3xl">Our Signature Preparations</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { name: 'Kebabs', desc: 'Succulent marinated meats' },
                { name: 'Korma', desc: 'Creamy, aromatic curries' },
                { name: 'Nihari', desc: 'Slow-cooked overnight stew' },
                { name: 'Tandoori', desc: 'Clay oven specialties' }
              ].map((dish, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="border rounded-lg p-4 bg-background"
                >
                  <div className="font-semibold text-lg mb-1">{dish.name}</div>
                  <div className="text-xs text-muted-foreground">{dish.desc}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground italic max-w-2xl mx-auto pt-4 text-sm">
              "In the Mughal court, food was not just sustenance—it was poetry on a plate, a celebration of life's finest pleasures."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}