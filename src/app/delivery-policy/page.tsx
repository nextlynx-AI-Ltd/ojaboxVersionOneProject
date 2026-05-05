import Link from "next/link"
import { Truck } from "lucide-react"

const DeliveryPolicy = () => (
  <div className="container py-12 md:py-20 max-w-3xl mx-auto">
    <div className="mb-10">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-4">
        <Truck className="h-7 w-7 text-primary" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Delivery Policy</h1>
      <p className="text-muted-foreground">Last updated: May 2026</p>
    </div>

    <div className="space-y-8 text-muted-foreground leading-relaxed">

      <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 text-sm text-foreground">
        At Oja Box, we are committed to getting your food pack to you fresh, on time, 
        and in perfect condition. Please read our delivery terms carefully before placing an order.
      </div>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">1. Delivery Zones</h2>
        <p className="mb-3">
          We currently deliver within <strong className="text-foreground">Lagos State</strong> only. 
          Delivery fees vary based on your location:
        </p>
        <div className="rounded-xl border bg-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary/5 border-b">
                <th className="text-left p-3 font-semibold text-foreground">Zone</th>
                <th className="text-left p-3 font-semibold text-foreground">Areas</th>
                <th className="text-left p-3 font-semibold text-foreground">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium text-foreground">Zone A</td>
                <td className="p-3">Ogba, Agege, Ifako-Ijaiye, Somolu</td>
                <td className="p-3 font-medium text-primary">₦2,500</td>
              </tr>
              <tr className="border-b bg-secondary/20">
                <td className="p-3 font-medium text-foreground">Zone B</td>
                <td className="p-3">Ikeja, Allen, Maryland, Mushin, Shomolu, Kosofe, Ejigbo</td>
                <td className="p-3 font-medium text-primary">₦3,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium text-foreground">Zone C</td>
                <td className="p-3">Gbagada, Ketu, Bariga, Isolo, Surulere, Yaba</td>
                <td className="p-3 font-medium text-primary">₦4,000</td>
              </tr>
              <tr className="bg-secondary/20">
                <td className="p-3 font-medium text-foreground">Zone D</td>
                <td className="p-3">Lekki, Victoria Island, Ikoyi, Ajah, Banana Island, Oniru, Eko Atlantic</td>
                <td className="p-3 font-medium text-primary">₦4,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm">
          Delivery fees are calculated automatically based on your selected area at checkout.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">2. Delivery Timeframe</h2>
        <p className="mb-3">
          Orders are typically delivered within <strong className="text-foreground">24–48 hours</strong> of 
          payment confirmation. Delivery times may vary based on:
        </p>
        <ul className="space-y-2 list-none">
          {[
            "Your location within Lagos",
            "Time of order placement",
            "Traffic and road conditions",
            "Public holidays or market closures",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          We do not currently offer same-day delivery. Orders placed after 4:00 PM 
          will be processed the following business day.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">3. Order Tracking</h2>
        <p className="mb-3">
          You will receive WhatsApp and email updates at each stage of your order:
        </p>
        <ul className="space-y-2 list-none">
          {[
            "Order confirmed — when payment is received",
            "Order packed — when your box is ready for dispatch",
            "Out for delivery — when our rider is on the way",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">4. Receiving Your Order</h2>
        <ul className="space-y-2 list-none">
          {[
            "Please ensure someone is available at the delivery address to receive your order",
            "Our rider will call your provided phone number upon arrival",
            "If nobody is available after two contact attempts, the order will be returned",
            "A redelivery fee of ₦1,500 will apply for returned orders",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">5. Delivery Partners</h2>
        <p>
          Oja Box works with trusted logistics partners to handle deliveries. 
          While we take every precaution to ensure safe and timely delivery, 
          we are not liable for delays caused by third-party logistics issues 
          outside our control.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">6. Damaged or Missing Items on Delivery</h2>
        <p>
          If you receive damaged or missing items, please inspect your order immediately 
          upon delivery and report any issues within 24 hours. For full details on how 
          we handle this, please read our{" "}
          <Link href="/refund-policy" className="text-primary hover:underline">
            Refund & Replacement Policy
          </Link>.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">7. Future Expansion</h2>
        <p>
          We are currently focused on Lagos State and plan to expand to other states 
          in Nigeria as we grow. Follow us on Instagram or join our WhatsApp community 
          to be notified when we launch in your area.
        </p>
      </section>

      <div className="rounded-xl border bg-card p-6">
        <p className="font-medium text-foreground mb-2">Questions about your delivery?</p>
        <p className="text-sm mb-4">
          Chat with us on WhatsApp and we'll give you a real-time update on your order.
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

export default DeliveryPolicy