'use client'

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Shield, Truck, CreditCard, Lock, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { formatPrice, isValidLagosArea, getDeliveryFee, ALL_LOCATIONS } from "@/data/packs"
import { useOrder } from "@/context/OrderContext"

const PACKAGING_FEE = 500
const SERVICE_CHARGE = 1500

const Checkout = () => {
  const router = useRouter()
  const { order, setConfirmation, clearOrder } = useOrder()
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", area: "" })
  const [submitting, setSubmitting] = useState(false)
  const [areaError, setAreaError] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Filter locations based on user input
  const suggestions = useMemo(() => {
    if (!form.area) return []
    return ALL_LOCATIONS.filter(loc => 
      loc.toLowerCase().includes(form.area.toLowerCase()) && 
      loc.toLowerCase() !== form.area.toLowerCase()
    )
  }, [form.area])

  const deliveryFee = order && form.area ? getDeliveryFee(form.area) : 0
  const grandTotal = order ? order.total + deliveryFee + PACKAGING_FEE + SERVICE_CHARGE : 0

  const handleAreaChange = (value: string) => {
    setForm({ ...form, area: value })
    setShowSuggestions(true)
    
    if (value && !isValidLagosArea(value)) {
      setAreaError("Please select a valid Lagos area from the suggestions.")
    } else {
      setAreaError("")
    }
  }

  const selectArea = (loc: string) => {
    setForm({ ...form, area: loc })
    setAreaError("")
    setShowSuggestions(false)
  }

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

  const isValid = form.name && form.phone && form.address && form.area && isValidLagosArea(form.area)

  const handlePaymentSuccess = async (response: { reference: string }) => {
    setSubmitting(true)
    try {
      const verifyRes = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: response.reference }),
      })

      const { verified } = await verifyRes.json()

      if (!verified) {
        alert("Payment verification failed. Please contact support.")
        setSubmitting(false)
        return
      }

      const itemsSummary = order.items
        .map((ci) => `${ci.item.name} x${ci.quantity}`)
        .join(", ")

      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderReference: response.reference,
          customerName: form.name,
          phoneNumber: form.phone,
          customerEmail: form.email,
          deliveryAddress: form.address,
          area: form.area,
          packName: order.packName,
          items: itemsSummary,
          subtotal: order.total,
          deliveryFee,
          packagingFee: PACKAGING_FEE,
          serviceCharge: SERVICE_CHARGE,
          grandTotal,
        }),
      })

      await fetch("/api/send-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderReference: response.reference,
          customerName: form.name,
          phoneNumber: form.phone,
          deliveryAddress: form.address,
          area: form.area,
          packName: order.packName,
          items: itemsSummary,
          grandTotal,
        }),
      })

      setConfirmation({
        orderId: response.reference,
        packName: order.packName,
        grandTotal,
        delivery: form,
        date: new Date().toISOString(),
      })

      clearOrder()
      router.push("/order/confirmation")
    } catch (error) {
      console.error("Payment processing error:", error)
      setSubmitting(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return

    const reference = "OJA-" + Math.random().toString(36).substring(2, 8).toUpperCase()

    const handler = (window as any).PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: `${form.phone}@ojabox.com`,
      amount: grandTotal * 100,
      currency: "NGN",
      ref: reference,
      metadata: {
        custom_fields: [
          { display_name: "Customer Name", variable_name: "customer_name", value: form.name },
          { display_name: "Phone", variable_name: "phone", value: form.phone },
          { display_name: "Address", variable_name: "address", value: form.address },
          { display_name: "Email", variable_name: "email", value: form.email },
        ]
      },
      callback: (response: { reference: string }) => {
        handlePaymentSuccess(response)
      },
      onClose: () => {
        setSubmitting(false)
      },
    })

    handler.openIframe()
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
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Amaka Johnson"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0801 234 5678"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="email">
                    Email address 
                    <span className="text-muted-foreground font-normal ml-1">(optional — for order updates)</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm({ ...form, email: e.target.value })}
                    placeholder="amaka@gmail.com"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="12 Toyin Street, Ikeja"
                  />
                </div>
                
                {/* Searchable LGA Field */}
                <div className="space-y-2 relative">
                  <Label htmlFor="area">Local Government Area (Lagos Only)</Label>
                  <Input
                    id="area"
                    required
                    autoComplete="off"
                    value={form.area}
                    onChange={(e) => handleAreaChange(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    placeholder="e.g. Ikeja, Lekki..."
                    className={areaError ? "border-red-500" : ""}
                  />
                  
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto">
                      {suggestions.map((loc) => (
                        <div
                          key={loc}
                          className="px-4 py-2 hover:bg-primary/10 cursor-pointer text-sm"
                          onClick={() => selectArea(loc)}
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {areaError && <p className="text-sm text-red-500 mt-1">{areaError}</p>}
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

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto px-12"
              disabled={!isValid || submitting}
            >
              {submitting ? "Processing..." : `Pay ${formatPrice(grandTotal)}`}
            </Button>

            <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" /> Delivery within 24–48 hours
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-primary" /> WhatsApp confirmation after payment
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5 text-primary" /> Delivery to your door
              </span>
            </div>
            
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
                  <span>{formatPrice(deliveryFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Packaging</span>
                  <span>{formatPrice(PACKAGING_FEE)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Charge</span>
                  <span>{formatPrice(SERVICE_CHARGE)}</span>
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