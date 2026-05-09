"üse client";
import PackCard from "@/components/PackCard";
import { packs } from "@/data/packs";

const Packs = () => (
  <div className="container py-12 md:py-16">
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-2">Our Packs</h1>
      <p className="text-muted-foreground">
        Pick a pack that suits your household, then customize every item.
      </p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {packs.map((pack) => (
        <PackCard key={pack.id} pack={pack} />
      ))}
    </div>
  </div>
);

export default Packs;
