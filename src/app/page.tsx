import { ArrowRight, Truck, Shield, Clock, ChevronRight, Star, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PackCard from "@/components/PackCard"
import { packs } from "@/data/packs"

const testimonials = [
  {
    name: "Funke A.",
    location: "Allen, Ikeja",
    text: "I used to spend my entire Saturday at the market. Now I just pick a pack, adjust a few things, and it shows up at my door. Game changer.",
    rating: 5,
  },
  {
    name: "Chidi O.",
    location: "Ogba, Ikeja",
    text: "The prices are transparent and fair. I can see exactly what I'm paying for each item. No surprises.",
    rating: 5,
  },
  {
    name: "Blessing E.",
    location: "Maryland, Ikeja",
    text: "As a single person, the Solo Essentials pack is perfect. I don't waste food and I save so much time.",
    rating: 5,
  },
]

const Index = () => (
  <div className="min-h-screen flex flex-col">

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container relative py-20 md:py-32 text-center max-w-3xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
          Now delivering within Ikeja, Lagos
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          Restock your kitchen
          <br />
          <span className="text-primary">without market stress</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          Choose a curated food pack, customize it to your taste, and get fresh foodstuff delivered to your door in Ikeja.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="text-base px-8">
            <Link href="/order">
              Browse Packs <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <a href="#how-it-works">How it works</a>
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {["FA", "CO", "BE"].map((initials) => (
              <div key={initials} className="h-8 w-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                <span className="text-[10px] font-semibold text-primary">{initials}</span>
              </div>
            ))}
          </div>
          <span>Trusted by households in Ikeja, Lagos</span>
        </div>
      </div>
    </section>

    {/* Trust Bar */}
    <section className="border-y bg-secondary/30">
      <div className="container py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: Truck, label: "Delivery within 24–48hrs in Ikeja" },
          { icon: Shield, label: "Transparent pricing, no hidden fees" },
          { icon: Clock, label: "Order in under 5 minutes" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3">
            <Icon className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>

        {/* How It Works */}
    <section id="how-it-works" className="bg-secondary/30 border-y">
      <div className="container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How it works</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-3xl mx-auto">
          {[
            { step: "1", title: "Pick a pack", desc: "Choose a pre-built foodstuff box that matches your household size and cooking style." },
            { step: "2", title: "Customize it", desc: "Add, remove, or adjust quantities. See your total update in real time — no surprises." },
            { step: "3", title: "Get it delivered", desc: "Pay securely via Paystack and receive your box within 24–48 hours in Ikeja." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="text-center">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                {step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Packs Preview */}
    <section className="container py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Choose your box</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Start with a curated pack, then customize every item before checkout.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packs.map((pack) => (
          <PackCard key={pack.id} pack={pack} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Button asChild variant="outline">
          <Link href="/order">
            View all packs <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>



    {/* Testimonials */}
    <section className="container py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">What our customers say</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Real feedback from real people using Oja Box in Ikeja.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-xl border bg-card p-6">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">{t.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {t.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* About teaser */}
    <section className="bg-primary/5 border-t">
      <div className="container py-16 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Built in Lagos, for Lagos</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We're a small team of young professionals who got tired of the market hustle.
          Oja Box is our way of solving a real problem for people like us.
        </p>
        <Button asChild variant="outline">
          <Link href="/about">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>

  </div>
)

export default Index