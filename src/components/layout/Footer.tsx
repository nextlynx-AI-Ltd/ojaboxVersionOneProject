import { ShoppingBasket, MessageCircle } from "lucide-react"
import Link from "next/link"

const Footer = () => (
  <footer className="border-t bg-secondary/50 mt-20">
    <div className="container py-12 grid gap-8 md:grid-cols-3">
      <div>
        <div className="flex items-center gap-2 font-bold text-lg mb-3">
          <ShoppingBasket className="h-5 w-5 text-primary" />
          Oja Box
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Restock your kitchen without the market stress. Fresh foodstuff packs delivered to your door in Lagos.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link href="/order" className="hover:text-foreground transition-colors">Browse Packs</Link></li>
          <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
          <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-3">Need Help?</h4>
        <a
          href="https://wa.me/2348000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          Chat with us on WhatsApp
        </a>
        <p className="text-xs text-muted-foreground mt-4">© {new Date().getFullYear()} Oja Box. Lagos, Nigeria.</p>
      </div>
    </div>
  </footer>
)

export default Footer