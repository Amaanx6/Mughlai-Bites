import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <div className="h-royal text-lg">Mughlai Bites</div>
          <p className="text-sm mt-2 text-muted-foreground text-pretty">
            Taste the Royal Tradition. Authentic Mughlai flavors—kebabs, korma, nihari, and more.
          </p>
        </div>
        <div>
          <div className="font-medium">Links</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/menu" className="hover:underline">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Social</div>
          <div className="mt-3 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground py-3 border-t">
        © {new Date().getFullYear()} Mughlai Bites. All rights reserved.
      </div>
    </footer>
  )
}
