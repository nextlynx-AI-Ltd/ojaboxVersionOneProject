'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle2, MessageCircle, Package, Clock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/data/packs"
import { useOrder } from "@/context/OrderContext"

const Confirmation = () => {
  const { confirmation } = useOrder()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  //  Initial mounting check to prevent Hydration mismatch
  if (!mounted) return null

  //  While mounted is true, wait a moment for context to resolve 
  // If confirmation is undefined/null right at mount, show a loader 
  if (confirmation === undefined) {
    return (
      <div className="container py-20 flex flex-col items-center justify-center text-center">
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground">Loading your order details...</p>
      </div>
    )
  }

  // 3. Now, if it's definitely null after the context check
  if (!confirmation) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">No confirmation found</h1>
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    )
  }

  const whatsappMessage = encodeURIComponent(
    `Hi OjaBox! I just placed Order ${confirmation.orderId}.\n\nPack: ${confirmation.packName}\nTotal: ${formatPrice(confirmation.grandTotal)}\nDelivery: ${confirmation.delivery.address}, ${confirmation.delivery.area}\n\nPlease confirm my order. Thank you!`
  )

  return (
    <div className="container py-12 md:py-20 flex-1 max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6">
        <CheckCircle2 className="h-10 w-10 text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
      <p className="text-muted-foreground mb-8">
        Thank you, {confirmation.delivery.name.split(" ")[0]}! Your order has been placed.
      </p>

      <div className="rounded-xl border bg-card p-6 text-left mb-8">
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">Order ID</p>
            <p className="font-semibold">{confirmation.orderId}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Pack</p>
            <p className="font-semibold">{confirmation.packName}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Total Paid</p>
            <p className="font-semibold text-primary">{formatPrice(confirmation.grandTotal)}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Delivery Address</p>
            <p className="font-semibold">
              {confirmation.delivery.address}, {confirmation.delivery.area}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-secondary/30 p-6 mb-8">
        <h3 className="font-semibold mb-4">What happens next?</h3>
        <div className="space-y-4 text-sm text-left">
          {[
            { icon: Package, text: "We're preparing your box with fresh items from the market." },
            { icon: Clock, text: "Expect delivery within 24–48 hours in Ikeja." },
            { icon: MessageCircle, text: "You'll receive a WhatsApp update when your rider is on the way." },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild variant="outline">
          <a href={`https://wa.me/2348139578438?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" /> Contact us on WhatsApp
          </a>
        </Button>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default Confirmation