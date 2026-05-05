import Link from "next/link"
import { Lock } from "lucide-react"

const PrivacyPolicy = () => (
  <div className="container py-12 md:py-20 max-w-3xl mx-auto">
    <div className="mb-10">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-4">
        <Lock className="h-7 w-7 text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: May 2026</p>
    </div>

    <div className="space-y-8 text-muted-foreground leading-relaxed">

      <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-sm text-foreground">
        At Oja Box, we take your privacy seriously. This policy explains what personal 
        information we collect, how we use it, and your rights regarding your data. 
        We comply with the Nigerian Data Protection Regulation (NDPR).
      </div>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h2>
        <p className="mb-3">When you place an order with Oja Box, we collect:</p>
        <ul className="space-y-2 list-none">
          {[
            "Full name",
            "Phone number",
            "Email address (optional)",
            "Delivery address",
            "Payment information (processed securely by Paystack — we never store card details)",
            "Order history and preferences",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
        <p className="mb-3">We use your information to:</p>
        <ul className="space-y-2 list-none">
          {[
            "Process and fulfill your orders",
            "Communicate with you about your order status",
            "Send delivery updates via WhatsApp or email",
            "Resolve complaints and customer service issues",
            "Improve our service based on order patterns",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          We do not use your information for advertising purposes and we do not sell 
          your data to third parties.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">3. How We Store Your Information</h2>
        <p className="mb-3">
          Your order information is stored securely in Airtable, a cloud-based database 
          platform. Access is restricted to authorised Oja Box team members only.
        </p>
        <p>
          Payment information is handled entirely by Paystack and is never stored on 
          our servers. Paystack is PCI-DSS compliant and meets international security standards.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">4. Who We Share Your Information With</h2>
        <p className="mb-3">We only share your information with:</p>
        <ul className="space-y-2 list-none">
          {[
            "Paystack — to process your payment securely",
            "Our delivery partners — your name, phone, and address only, to fulfill your delivery",
            "Our suppliers — order details only, to prepare your items",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          We do not share your information with any other third parties without your consent.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">5. How Long We Keep Your Information</h2>
        <p>
          We retain your order information for up to 12 months for record-keeping and 
          customer service purposes. After this period, your personal data is deleted 
          from our systems unless required by law to retain it longer.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
        <p className="mb-3">Under the Nigerian Data Protection Regulation (NDPR), you have the right to:</p>
        <ul className="space-y-2 list-none">
          {[
            "Access the personal information we hold about you",
            "Request correction of inaccurate information",
            "Request deletion of your personal information",
            "Withdraw consent for us to use your information",
            "Lodge a complaint with the Nigeria Data Protection Bureau (NDPB)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          To exercise any of these rights, contact us via WhatsApp and we will respond 
          within 7 business days.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">7. Cookies</h2>
        <p>
          Our website uses minimal technical cookies necessary for the site to function. 
          We do not use advertising or tracking cookies. No personal data is collected 
          through cookies.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be 
          posted on this page with an updated date. We encourage you to review this 
          policy periodically.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your 
          personal data, please contact us via WhatsApp.
        </p>
      </section>

      <div className="rounded-xl border bg-card p-6">
        <p className="font-medium text-foreground mb-2">Questions about your data?</p>
        <p className="text-sm mb-4">
          Reach out to us on WhatsApp and we'll respond within 7 business days.
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

export default PrivacyPolicy