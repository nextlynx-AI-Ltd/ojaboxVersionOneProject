import { MapPin, Heart, ShieldCheck, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
  {
    name: "Oluwatobi Akano",
    role: "Founder",
    bio: "Born and raised in Lagos. Spent years understanding the supply chain before deciding to solve the market stress problem for busy professionals.",
    initials: "O.A.",
  },
  {
    name: "Timilehin Amolegbe",
    role: "Developer",
    bio: "A developer who got tired of spending Saturdays at the market. Builds every part of the Oja Box experience with real Lagos users in mind.",
    initials: "T.A.",
  },
  {
    name: "Lady Adeola",
    role: "Operations Manager",
    bio: "Lagos market veteran with 15+ years of experience. She ensures our packs are filled with the freshest items and that deliveries run smoothly across Ikeja.",
    initials: "L.A.",
  },
  {
    name: "Daniel Chinoso",
    role: "Graphic Designer",
    bio: "The creative mind behind Oja Box's look and feel. Daniel's designs capture the vibrant, fresh, and approachable spirit of our brand.",
    initials: "D.C.",
  },
]

const values = [
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    description: "Every item is priced clearly. No hidden markups, no surprise fees. What you see is what you pay.",
  },
  {
    icon: Heart,
    title: "Freshness First",
    description: "We source directly from trusted market vendors. Your items are picked and packed the same day they're delivered.",
  },
  {
    icon: MapPin,
    title: "Lagos Born & Based",
    description: "We understand Lagos. The traffic, the hustle, the need for convenience. Oja Box is built for this city, starting from Ikeja.",
  },
]

const About = () => (
  <div className="min-h-screen flex flex-col">

    {/* Hero */}
    <section className="bg-secondary/30 border-b">
      <div className="container py-16 md:py-24 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          We're making kitchen restocking
          <br />
          <span className="text-primary">stress-free in Ikeja</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
          Oja Box started from a simple frustration — spending hours at the market every week.
          We built a better way: curated food packs, honest pricing, and delivery you can count on.
        </p>
      </div>
    </section>

    {/* Our Story */}
    <section className="container py-16 md:py-20 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Our Story</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          We're a small team of young professionals in Lagos who all dealt with the same problem —
          finding time to go to the market. Between work, traffic, and the general hustle of Lagos life,
          restocking the kitchen was always the last thing anyone wanted to do.
        </p>
        <p>
          We tried existing delivery apps but they felt overwhelming — hundreds of products,
          confusing categories, and prices that didn't add up. We didn't need a marketplace.
          We needed someone to just handle the restock.
        </p>
        <p>
          That's how Oja Box was born. Pick a pack, adjust it to your taste, and we handle the rest.
          We start in Ikeja and we're growing from there.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="bg-secondary/30 border-y">
      <div className="container py-16 md:py-20">
        <h2 className="text-2xl font-bold text-center mb-12">What We Stand For</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="container py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-3">Meet the Team</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Real people, based in Ikeja, building a service we'd use ourselves.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
        {team.map((member) => (
          <div key={member.name} className="rounded-xl border bg-card p-6 text-center">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">{member.initials}</span>
            </div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary/5 border-t">
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-3">Have questions?</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          We're always happy to chat. Reach out on WhatsApp and we'll respond within minutes.
        </p>
        <Button asChild size="lg">
          <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" /> Chat with us on WhatsApp
          </a>
        </Button>
      </div>
    </section>

  </div>
)

export default About