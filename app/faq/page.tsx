import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    { q: "Do you offer delivery?", a: "Yes, we deliver across the city during operating hours." },
    { q: "Is there a vegetarian menu?", a: "Absolutely. We have plenty of veg Mughlai options." },
    { q: "What about spice levels?", a: "Choose Mild, Medium, or Spicy on dish pages." },
    { q: "Which payment methods?", a: "Card, UPI, and Net Banking (mock checkout)." },
    { q: "Do you cater events?", a: "Yes, please contact us for custom menus." },
  ]
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="h-royal text-3xl mb-4">FAQ</h1>
      <Accordion type="single" collapsible>
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{f.q}</AccordionTrigger>
            <AccordionContent>{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
