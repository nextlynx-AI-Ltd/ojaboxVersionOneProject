import { ShoppingBasket, MessageCircle, X, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Footer = () => (
  <footer className="border-t bg-secondary/50 mt-20">
    <div className="container py-12 grid gap-8 md:grid-cols-3">
      <div>
        
        <Image
          src="/logo-stacked.svg"
          alt="OjaBox"
          width={100}
          height={70}
          style={{ width: "100px", height: "auto" }}
        />
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          Powered by NextLynx.ai Ltd
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link href="/order" className="hover:text-foreground transition-colors">Browse Packs</Link></li>
          <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
          <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a></li>
          <li>
            <Link href="/refund-policy" className="hover:text-foreground transition-colors">
              Refund Policy
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/delivery-policy" className="hover:text-foreground transition-colors">
              Delivery Policy
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-3">Need Help?</h4>
        <a
          href="https://wa.me/2348139578438"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline mb-3"
        >
          <MessageCircle className="h-4 w-4" />
          Chat with us on WhatsApp
        </a>
        <div className="flex gap-3 mb-4">
          <a
            href="https://x.com/OJA_box?s=20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            title="Follow us on X"
          >
            <X className="h-4 w-4" />
          </a>
          <a
            href="mailto:ojabox55@gmail.com"
            className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            title="Email us"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Oja Box. Lagos, Nigeria.</p>
      </div>
    </div>
  </footer>
)

export default Footer