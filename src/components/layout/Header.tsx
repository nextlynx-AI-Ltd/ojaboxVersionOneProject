'use client'

import { ShoppingBasket, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-main.svg"
            alt="OjaBox"
            width={120}
            height={40}
            style={{ width: "120px", height: "auto" }}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="/order" className="text-muted-foreground hover:text-foreground transition-colors">Packs</Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
          <a href="https://wa.me/2348139578438" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-card px-4 pb-4 pt-2 space-y-3">
          <Link href="/" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Home</Link>
          <Link href="/order" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Packs</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">About Us</Link>
          <a href="https://wa.me/2348139578438" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm font-medium">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Header