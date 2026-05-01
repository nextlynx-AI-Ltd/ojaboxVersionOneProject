import { Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Pack, formatPrice } from "@/data/packs"
import { Button } from "@/components/ui/button"

interface PackCardProps {
  pack: Pack
}

const PackCard = ({ pack }: PackCardProps) => (
  <div className="group rounded-xl border bg-card p-6 flex flex-col hover:shadow-lg hover:border-primary/20 transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden">
        <Image
          src={pack.icon}
          alt={pack.name}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full px-3 py-1">
        <Users className="h-3 w-3" />
        {pack.target}
      </span>
    </div>

    <h3 className="font-semibold text-lg mb-1">{pack.name}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{pack.description}</p>

    {/* Item preview */}
    <div className="flex flex-wrap gap-1.5 mb-4">
      {pack.items.slice(0, 5).map((pi) => (
        <span
          key={pi.item.id}
          className="inline-flex items-center gap-1 text-xs bg-secondary/80 rounded-full px-2.5 py-1"
          title={`${pi.item.name} — ${pi.item.unit}`}
        >
          <Image
            src={pi.item.image}
            alt={pi.item.name}
            width={16}
            height={16}
            className="rounded-full object-cover"
          />
          <span className="text-muted-foreground">{pi.item.name.split(" ")[0]}</span>
        </span>
      ))}
      {pack.items.length > 5 && (
        <span className="inline-flex items-center text-xs text-muted-foreground bg-secondary/80 rounded-full px-2.5 py-1">
          +{pack.items.length - 5} more
        </span>
      )}
    </div>

    <div className="flex items-center justify-between pt-4 border-t">
      <div>
        <p className="text-xs text-muted-foreground">Starting from</p>
        <p className="text-lg font-bold text-primary">{formatPrice(pack.basePrice)}</p>
      </div>
      <Button asChild size="sm">
        <Link href={`/order/customize?pack=${pack.id}`}>
          Customize <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
)

export default PackCard