"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import {
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
  ShoppingBasket,
  PlusCircle,
  Info,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  packs,
  allItems,
  formatPrice,
  FoodItem,
  categoryLabels,
  ItemCategory,
} from "@/data/packs";
import { useOrder, CartItem } from "@/context/OrderContext";

const CATEGORY_ORDER: ItemCategory[] = [
  "staples",
  "quick-foods",
  "cooking-essentials",
  "extras",
];

const Customise = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setOrder } = useOrder();

  const packId = searchParams.get("pack");
  const pack = packs.find((p) => p.id === packId);

  const [items, setItems] = useState<CartItem[]>(
    pack
      ? pack.items.map((pi) => ({
          item: pi.item,
          quantity: pi.quantity,
          min: pi.min,
          max: pi.max,
        }))
      : [],
  );
  const [showAdd, setShowAdd] = useState(false);

  const total = useMemo(
    () =>
      items.reduce((sum, ci) => sum + ci.item.pricePerUnit * ci.quantity, 0),
    [items],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, ci) => sum + ci.quantity, 0),
    [items],
  );

  const availableToAdd = allItems.filter(
    (ai) => !items.some((ci) => ci.item.id === ai.id),
  );

  const groupedItems = useMemo(() => {
    const groups: Record<string, CartItem[]> = {};
    for (const ci of items) {
      const cat = ci.item.category;
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(ci);
    }
    return groups;
  }, [items]);

  const groupedAvailable = useMemo(() => {
    const groups: Record<string, FoodItem[]> = {};
    for (const item of availableToAdd) {
      const cat = item.category;
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(item);
    }
    return groups;
  }, [availableToAdd]);

  if (!pack) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Pack not found</h1>
        <Button asChild>
          <Link href="/order">Browse packs</Link>
        </Button>
      </div>
    );
  }

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((ci) => {
        if (ci.item.id !== id) return ci;
        const newQty = ci.quantity + delta;
        if (newQty < ci.min || newQty > ci.max) return ci;
        return { ...ci, quantity: newQty };
      }),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const addItem = (item: FoodItem) => {
    setItems((prev) => [...prev, { item, quantity: 1, min: 0, max: 10 }]);
  };

  const handleCheckout = () => {
    setOrder({ packId: pack.id, packName: pack.name, items, total });
    router.push("/order/checkout");
  };

  return (
    <div className="min-h-screen flex flex-col pb-24 lg:pb-0">
      <div className="container py-8 md:py-12 flex-1">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        {/* Guide banner */}
        <div className="rounded-xl bg-primary/5 border border-primary/10 p-4 md:p-5 mb-8 flex items-start gap-3">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-sm mb-1">
              Customize your {pack.name}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Adjust quantities within the recommended range for this pack. Your
              total updates automatically as you make changes.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Items List */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={pack.icon}
                alt={pack.name}
                width={48}
                height={48}
                unoptimized
                className="object-contain"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{pack.name}</h1>
                <p className="text-sm text-muted-foreground">
                  {pack.description}
                </p>
              </div>
            </div>

            {CATEGORY_ORDER.map((cat) => {
              const catItems = groupedItems[cat];
              if (!catItems || catItems.length === 0) return null;
              return (
                <div key={cat} className="mb-8">
                  <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="h-px flex-1 bg-border" />
                    {categoryLabels[cat]}
                    <span className="h-px flex-1 bg-border" />
                  </h2>
                  <div className="space-y-2">
                    {catItems.map((ci) => {
                      const atMin = ci.quantity <= ci.min;
                      const atMax = ci.quantity >= ci.max;
                      return (
                        <div
                          key={ci.item.id}
                          className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border bg-card hover:border-primary/10 transition-colors"
                        >
                          <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center overflow-hidden shrink-0">
                            <Image
                              src={ci.item.image}
                              alt={ci.item.name}
                              width={48}
                              height={48}
                              unoptimized
                              className="object-cover rounded-xl"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">
                              {ci.item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {ci.item.unit} ·{" "}
                              {formatPrice(ci.item.pricePerUnit)} each
                            </p>
                            {atMax && (
                              <p className="text-xs text-destructive/80 mt-0.5">
                                Max {ci.max} for this pack
                              </p>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => updateQty(ci.item.id, -1)}
                              disabled={atMin}
                              className="h-8 w-8 rounded-lg border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-8 text-center text-sm font-semibold tabular-nums">
                              {ci.quantity}
                            </span>
                            <button
                              onClick={() => updateQty(ci.item.id, 1)}
                              disabled={atMax}
                              className="h-8 w-8 rounded-lg border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <p className="text-sm font-semibold w-20 text-right tabular-nums hidden sm:block">
                            {formatPrice(ci.item.pricePerUnit * ci.quantity)}
                          </p>

                          {ci.min === 0 && (
                            <button
                              onClick={() => removeItem(ci.item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors p-1"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Add items */}
            {availableToAdd.length > 0 && (
              <div className="mt-2">
                {!showAdd ? (
                  <button
                    onClick={() => setShowAdd(true)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <PlusCircle className="h-4 w-4" /> Add more items to your
                    box
                  </button>
                ) : (
                  <div className="border rounded-xl p-4 md:p-5 bg-card">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-medium text-sm">Available items</p>
                      <button
                        onClick={() => setShowAdd(false)}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Close
                      </button>
                    </div>
                    {CATEGORY_ORDER.map((cat) => {
                      const catItems = groupedAvailable[cat];
                      if (!catItems || catItems.length === 0) return null;
                      return (
                        <div key={cat} className="mb-4 last:mb-0">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            {categoryLabels[cat]}
                          </p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {catItems.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => addItem(item)}
                                className="flex items-center gap-3 p-3 rounded-xl border hover:border-primary/20 hover:bg-primary/5 transition-all text-left"
                              >
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={40}
                                  height={40}
                                  unoptimized
                                  className="rounded-lg object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium">
                                    {item.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {item.unit}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold">
                                    {formatPrice(item.pricePerUnit)}
                                  </span>
                                  <Plus className="h-4 w-4 text-primary" />
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Summary Sidebar - Desktop */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24 rounded-xl border bg-card p-6">
              <h3 className="font-semibold mb-1 flex items-center gap-2">
                <ShoppingBasket className="h-5 w-5 text-primary" />
                Your Box
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                {itemCount} items · {items.length} unique products
              </p>

              <div className="space-y-2 mb-4 text-sm max-h-64 overflow-y-auto">
                {items.map((ci) => (
                  <div
                    key={ci.item.id}
                    className="flex justify-between text-muted-foreground"
                  >
                    <span className="flex items-center gap-1.5">
                      <Image
                        src={ci.item.image}
                        alt={ci.item.name}
                        width={16}
                        height={16}
                        unoptimized
                        className="rounded-full object-cover"
                      />
                      {ci.item.name} x{ci.quantity}
                    </span>
                    <span className="tabular-nums font-medium text-foreground">
                      {formatPrice(ci.item.pricePerUnit * ci.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Subtotal</span>
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(total)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Delivery fee added at checkout
                </p>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={handleCheckout}
                disabled={items.length === 0}
              >
                Review Order
              </Button>

              <div className="mt-4 pt-4 border-t">
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <ShoppingBasket className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  <span>
                    Secure checkout. Pay with card, bank transfer, or USSD via
                    Paystack.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky bottom bar - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-4 lg:hidden z-40">
        <div className="container flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">{itemCount} items</p>
            <p className="text-lg font-bold text-primary">
              {formatPrice(total)}
            </p>
          </div>
          <Button
            size="lg"
            onClick={handleCheckout}
            disabled={items.length === 0}
            className="px-8"
          >
            Review Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Customise;
