'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Shield, Truck, CreditCard, Lock, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { formatPrice } from "@/data/packs"
import { useOrder } from "@/context/OrderContext"

const DELIVERY_FEE = 3000
const PACKAGING_FEE = 800
const SERVICE_CHARGE = 1500

const Checkout = () => {
  const router = useRouter()
  const { order, setConfirmation, clearOrder } = useOrder()
  const [form, setForm] = useState({ name: "", phone: "", address: "", area: "" })
  const [submitting, setSubmitting] = useState(false)

  if (!order) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">No order found</h1>
        <Button asChild>
          <Link href="/order">Browse packs</Link>
        </Button>
      </div>
    )
  }

  const grandTotal = order.total + DELIVERY_FEE + PACKAGING_FEE + SERVICE_CHARGE
  const isValid = form.name && form.phone && form.address && form.area


    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    setSubmitting(true)

    setTimeout(() => {
        setConfirmation({
        orderId: "OJA-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
        packName: order!.packName,
        grandTotal,
        delivery: form,
        date: new Date().toISOString(),
        })
        clearOrder()
        router.push("/order/confirmation")
    }, 2000)
    }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container py-8 md:py-12 flex-1">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border bg-card p-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Delivery Details
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Amaka Johnson"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0801 234 5678"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="12 Toyin Street, Ikeja"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Area</Label>
                  <Input
                    id="area"
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    placeholder="Allen, Ogba, Maryland..."
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Payment
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                You'll be redirected to Paystack to complete your payment securely.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Shield className="h-3.5 w-3.5" /> Secure payment
                </span>
                <span className="inline-flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5" /> SSL encrypted
                </span>
                <span>Card, Bank Transfer, or USSD</span>
              </div>
            </div>

            {/* Trust messaging */}
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" /> Delivery within 24–48 hours in Ikeja
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-primary" /> WhatsApp confirmation after payment
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5 text-primary" /> Tracked delivery to your door
              </span>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto px-12"
              disabled={!isValid || submitting}
            >
              {submitting ? "Processing..." : `Pay ${formatPrice(grandTotal)}`}
            </Button>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border bg-card p-6">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <p className="text-sm text-muted-foreground mb-3">{order.packName}</p>
              <div className="space-y-2 mb-4 text-sm max-h-48 overflow-y-auto">
                {order.items.map((ci, i) => (
                  <div key={i} className="flex items-center justify-between text-muted-foreground gap-2">
                    <span className="flex items-center gap-1.5 min-w-0">
                      <Image
                        src={ci.item.image}
                        alt={ci.item.name}
                        width={20}
                        height={20}
                        className="rounded object-cover shrink-0"
                      />
                      <span className="truncate">{ci.item.name} x{ci.quantity}</span>
                    </span>
                    <span className="tabular-nums shrink-0">
                      {formatPrice(ci.item.pricePerUnit * ci.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(order.total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>{formatPrice(DELIVERY_FEE)}</span>
                </div>
                <div className="flex justify-between font-semibold text-base pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(grandTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout