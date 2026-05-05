import Link from "next/link"
import { Shield } from "lucide-react"

const RefundPolicy = () => (
  <div className="container py-12 md:py-20 max-w-3xl mx-auto">
    <div className="mb-10">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-4">
        <Shield className="h-7 w-7 text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Refund & Replacement Policy</h1>
      <p className="text-muted-foreground">Last updated: May 2026</p>
    </div>

    <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed">

      <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-sm text-foreground">
        At Oja Box, we are committed to delivering fresh and well-packaged food items. 
        If something goes wrong with your order, we will make it right within the terms below.
      </div>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">1. Eligibility for Refund or Replacement</h2>
        <p className="mb-3">You may request a refund or replacement if:</p>
        <ul className="space-y-2 list-none">
          {[
            "You receive damaged items (e.g. broken eggs, leaking oil)",
            "Items are missing from your order",
            "You receive the wrong items",
            "The quality of an item is clearly unacceptable upon delivery",
            "Items are significantly short-weighted compared to what was ordered",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">2. Time Frame for Complaints</h2>
        <p className="mb-3">
          All issues must be reported within <strong className="text-foreground">24 hours of delivery</strong>.
        </p>
        <p className="mb-3">To report an issue, contact us via WhatsApp with:</p>
        <ul className="space-y-2 list-none">
          {[
            "Your order reference number",
            "A short description of the issue",
            "Clear photos where applicable",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">3. Resolution Options</h2>
        <p className="mb-3">Depending on the issue, we will:</p>
        <ul className="space-y-2 list-none mb-3">
          {[
            "Replace the affected item(s), or",
            "Issue a partial refund for the affected item(s)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mb-3">
          Full order refunds are only issued in cases of major failure affecting the entire order.
        </p>
        <p>
          Approved refunds will be processed within <strong className="text-foreground">3–5 business days</strong> back 
          to the original payment method.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">4. Non-Refundable Cases</h2>
        <p className="mb-3">We do not offer refunds for:</p>
        <ul className="space-y-2 list-none">
          {[
            "Change of mind after delivery",
            "Minor variations in size, weight, or packaging",
            "Issues reported after 24 hours of delivery",
            "Incorrect delivery details provided by the customer",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">5. Delivery Issues</h2>
        <p className="mb-3">If a delivery fails due to an incorrect address or unavailability of the customer at the time of delivery, a redelivery fee of <strong className="text-foreground">₦1,500</strong> will apply.</p>
        <p>Please ensure someone is available to receive your order at the provided address.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">6. Item Substitutions</h2>
        <p>
          In rare cases where an item is unavailable, we may substitute it with a similar item 
          of equal or greater value. You will be notified via WhatsApp before any substitution occurs 
          and may choose to accept or cancel the substitution.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">7. Our Commitment</h2>
        <p>
          We aim to ensure every order is properly packed, verified, and delivered in good condition. 
          If something goes wrong, we will work quickly to resolve it fairly and transparently.
        </p>
      </section>

      <div className="rounded-xl border bg-card p-6">
        <p className="font-medium text-foreground mb-2">Need help with an order?</p>
        <p className="text-sm mb-4">
          Our team is available on WhatsApp to resolve any issues as quickly as possible.
        </p>
        
          <a href="https://wa.me/2348000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Chat with us on WhatsApp →
        </a>
      </div>

    </div>
  </div>
)

export default RefundPolicy