import Link from "next/link"
import { FileText } from "lucide-react"

const TermsOfService = () => (
  <div className="container py-12 md:py-20 max-w-3xl mx-auto">
    <div className="mb-10">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-4">
        <FileText className="h-7 w-7 text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-muted-foreground">Last updated: May 2026</p>
    </div>

    <div className="space-y-8 text-muted-foreground leading-relaxed">

      <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-sm text-foreground">
        By placing an order with Oja Box, you agree to the following terms and conditions. 
        Please read them carefully before using our service.
      </div>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">1. About Oja Box</h2>
        <p>
          Oja Box is a food pack delivery service based in Lagos, Nigeria. We provide 
          curated household foodstuff bundles that customers can customize and have 
          delivered to their door. Our service is currently available within Lagos State.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">2. Eligibility</h2>
        <p className="mb-3">To use Oja Box you must:</p>
        <ul className="space-y-2 list-none">
          {[
            "Be at least 18 years of age",
            "Provide accurate and complete delivery information",
            "Have a valid means of payment via Paystack",
            "Be located within our current delivery zones in Lagos",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">3. Orders</h2>
        <ul className="space-y-2 list-none">
          {[
            "All orders must be paid for in full before processing begins",
            "Orders are confirmed only after successful payment via Paystack",
            "We reserve the right to cancel any order that cannot be fulfilled due to stock unavailability",
            "You will be notified via WhatsApp if your order cannot be fulfilled",
            "Prices displayed on the website are in Nigerian Naira (₦) and are inclusive of applicable fees",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">4. Pricing</h2>
        <p className="mb-3">
          All prices displayed on the Oja Box website are fixed and transparent. 
          The total amount charged includes:
        </p>
        <ul className="space-y-2 list-none">
          {[
            "Item subtotal based on your customized pack",
            "Delivery fee based on your location within Lagos",
            "Packaging fee",
            "Service charge",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Prices may be updated from time to time due to market conditions. 
          The price shown at checkout is the final price you will be charged.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">5. Delivery</h2>
        <p className="mb-3">
          Delivery is available within Lagos State only. Estimated delivery times are 
          provided as a guide and are not guaranteed. Oja Box is not liable for delays 
          caused by factors outside our control such as traffic, weather, or logistics 
          partner issues.
        </p>
        <p>
          For full details on delivery, please read our{" "}
          <Link href="/delivery-policy" className="text-primary hover:underline">
            Delivery Policy
          </Link>.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">6. Refunds & Replacements</h2>
        <p>
          Our refund and replacement terms are governed by our{" "}
          <Link href="/refund-policy" className="text-primary hover:underline">
            Refund & Replacement Policy
          </Link>
          . By placing an order you agree to the terms outlined in that policy.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">7. Customer Responsibilities</h2>
        <p className="mb-3">As a customer you are responsible for:</p>
        <ul className="space-y-2 list-none">
          {[
            "Providing accurate delivery details at the time of order",
            "Being available or having someone available to receive your delivery",
            "Inspecting your order upon delivery and reporting issues within 24 hours",
            "Not providing false information when placing an order",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">8. Limitation of Liability</h2>
        <p className="mb-3">
          Oja Box is not liable for:
        </p>
        <ul className="space-y-2 list-none">
          {[
            "Indirect or consequential losses arising from use of our service",
            "Delays caused by third-party logistics partners",
            "Loss or damage caused by incorrect delivery information provided by the customer",
            "Price fluctuations in the general market beyond our control",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Our maximum liability in any case is limited to the total amount paid for 
          the specific order in question.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">9. Intellectual Property</h2>
        <p>
          All content on the Oja Box website including the logo, text, images, and 
          design is the property of Oja Box and may not be copied, reproduced, or 
          used without written permission.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">10. Governing Law</h2>
        <p>
          These terms are governed by the laws of the Federal Republic of Nigeria. 
          Any disputes arising from use of Oja Box will be subject to the jurisdiction 
          of Nigerian courts.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">11. Changes to These Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Continued use of 
          Oja Box after changes are posted constitutes acceptance of the updated terms.
        </p>
      </section>

      <div className="rounded-xl border bg-card p-6">
        <p className="font-medium text-foreground mb-2">Questions about our terms?</p>
        <p className="text-sm mb-4">
          Reach out to us on WhatsApp and we'll be happy to clarify anything.
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

export default TermsOfService