export type ItemCategory = "staples" | "quick-foods" | "cooking-essentials" | "extras";

export const categoryLabels: Record<ItemCategory, string> = {
  staples: "Staples / Essentials",
  "quick-foods": "Quick Foods",
  "cooking-essentials": "Cooking Essentials",
  extras: "Extras",
};

export interface FoodItem {
  id: string;
  name: string;
  unit: string;
  pricePerUnit: number;
  category: ItemCategory;
  image: string;
  description: string;
}

export interface PackItem {
  item: FoodItem;
  quantity: number;
  min: number;
  max: number;
}

export interface Pack {
  id: string;
  name: string;
  description: string;
  target: string;
  basePrice: number;
  icon: string;
  items: PackItem[];
}

export const allItems: FoodItem[] = [
  // Staples
  { id: "rice", name: "Rice", unit: "5kg bag", pricePerUnit: 7500, category: "staples", image: "/assets/items/rice.jpeg", description: "Premium rice" },
  { id: "garri", name: "Garri", unit: "5kg bag", pricePerUnit: 1800, category: "staples", image: "/assets/items/Garri.jpeg", description: "Garri for eba or soaking" },
  { id: "beans", name: "Beans", unit: "2.5kg bag", pricePerUnit: 4000, category: "staples", image: "/assets/items/beans.jpeg", description: "Clean beans" },
  { id: "yam", name: "Yam", unit: "1 tuber", pricePerUnit: 4000, category: "staples", image: "/assets/items/yam.jpg", description: "One full tuber yam" },
  { id: "elubo", name: "Yam Flour (Elubo)", unit: "2.5kg bag", pricePerUnit: 3800, category: "staples", image: "/assets/items/elubo.jpg", description: "Ground yam flour for amala" },
  { id: "semo", name: "Semovita", unit: "1kg pack", pricePerUnit: 1800, category: "staples", image: "/assets/items/semovita.png", description: "Smooth semovita for swallow" },

  // Quick Foods
  { id: "spaghetti", name: "Spaghetti", unit: "pack", pricePerUnit: 1000, category: "quick-foods", image: "/assets/items/spaghetti.jpg", description: "Golden Penny spaghetti pasta" },
  { id: "macaroni", name: "Macaroni", unit: "pack", pricePerUnit: 1000, category: "quick-foods", image: "/assets/items/macaroni.jpg", description: "Golden Penny macaroni pasta" },
  { id: "noodles", name: "Noodles", unit: "pack", pricePerUnit: 250, category: "quick-foods", image: "/assets/items/noodles.jpeg", description: "Indomie Instant noodles" },

  // Cooking Essentials
  { id: "salt", name: "Salt", unit: "1 pack", pricePerUnit: 500, category: "cooking-essentials", image: "/assets/items/salt.png", description: "Dangote table salt" },
  { id: "seasoning-cubes", name: "Seasoning Cubes", unit: "pack", pricePerUnit: 350, category: "cooking-essentials", image: "/assets/items/seasoning-cube.jpg", description: "Chicken Flavour seasoning cubes" },
  { id: "palm-oil", name: "Palm Oil", unit: "1L bottle", pricePerUnit: 1600, category: "cooking-essentials", image: "/assets/items/palm-oil.jpg", description: "Fresh, unadulterated palm oil" },
  { id: "veg-oil", name: "Vegetable Oil", unit: "1L bottle", pricePerUnit: 4200, category: "cooking-essentials", image: "/assets/items/veg-oil.jpg", description: "King's vegetable cooking oil" },
  { id: "tomato-paste", name: "Tomato Paste", unit: "sachet roll", pricePerUnit: 900, category: "cooking-essentials", image: "/assets/items/tomato-paste.png", description: "Gino tomato paste" },
  { id: "ground-pepper", name: "Ground Pepper (Ata Gungun)", unit: "sachet roll", pricePerUnit: 800, category: "cooking-essentials", image: "/assets/items/ground-pepper.jpg", description: "Hot pepper ground pepper" },
  { id: "seasoning-curry", name: "Seasoning Curry", unit: "sachet roll", pricePerUnit: 600, category: "cooking-essentials", image: "/assets/items/curry.jpeg", description: "Gino Curry seasoning set" },
  { id: "seasoning-thyme", name: "Seasoning (Thyme)", unit: "sachet roll", pricePerUnit: 600, category: "cooking-essentials", image: "/assets/items/thyme.jpg", description: "Gino Thyme seasoning set" },
  { id: "onions", name: "Onions", unit: "piece", pricePerUnit: 200, category: "cooking-essentials", image: "/assets/items/onions.jpg", description: "Fresh Big-sized onions" },

  // Extras
  { id: "iru", name: "Locust Beans (Iru)", unit: "portion", pricePerUnit: 1200, category: "extras", image: "/assets/items/iru.jpg", description: "Fermented locust beans for soups" },
  { id: "eggs", name: "Eggs", unit: "crate (6)", pricePerUnit: 1400, category: "extras", image: "/assets/items/eggs.png", description: "Fresh chicken eggs" },
  { id: "plantain", name: "Plantain", unit: "piece", pricePerUnit: 400, category: "extras", image: "/assets/items/plantain.jpg", description: "Ripe plantain for frying or boiling" },
  { id: "potatoes", name: "Potatoes", unit: "portion", pricePerUnit: 1500, category: "extras", image: "/assets/items/potatoes.jpg", description: "Fresh Irish potatoes" },
  { id: "ginger-garlic", name: "Ginger & Garlic Powder", unit: "sachet roll", pricePerUnit: 800, category: "extras", image: "/assets/items/ginger&garlic.jfif", description: "Vitals ginger garlic Powder" },
  { id: "cornflakes", name: "Cornflakes", unit: "pack", pricePerUnit: 2500, category: "extras", image: "/assets/items/cornflakes.jfif", description: "Breakfast cornflakes cereal" },
//   { id: "milk", name: "Milk", unit: "tin", pricePerUnit: 1500, category: "extras", image: "/assets/items/milk.jpg", description: "Powdered or evaporated milk" },
//   { id: "milo", name: "Milo", unit: "tin", pricePerUnit: 2500, category: "extras", image: "/assets/items/milo.jpg", description: "Milo chocolate drink" },
  { id: "sugar", name: "Sugar", unit: "500g pack", pricePerUnit: 1000, category: "extras", image: "/assets/items/sugar.png", description: "Golden Penny Granulated white sugar" },
//   { id: "tea-coffee", name: "Tea / Coffee", unit: "pack", pricePerUnit: 600, category: "extras", image: "/assets/items/tea-coffee.jpg", description: "Lipton tea or instant coffee" },
  { id: "custard", name: "Custard", unit: "pack", pricePerUnit: 1200, category: "extras", image: "/assets/items/custard.jpg", description: "Custard powder for breakfast" },
  { id: "pap", name: "Pap (Ogi)", unit: "portion", pricePerUnit: 800, category: "extras", image: "/assets/items/pap.jpg", description: "Nigerian corn pap" },
];

const getItem = (id: string) => allItems.find((i) => i.id === id)!;

export const packs: Pack[] = [
  {
    id: "solo-essentials",
    name: "Solo Essentials",
    description: "Perfect for one person living alone. Covers your basics for 2–3 weeks.",
    target: "1 person",
    icon: "/assets/packs/solo.png",
    basePrice: 18000,
    items: [
      { item: getItem("rice"), quantity: 1, min: 1, max: 2 },
      { item: getItem("beans"), quantity: 1, min: 0, max: 2 },
      { item: getItem("garri"), quantity: 1, min: 1, max: 2 },
      { item: getItem("spaghetti"), quantity: 2, min: 1, max: 4 },
      { item: getItem("noodles"), quantity: 5, min: 0, max: 15 },
      { item: getItem("veg-oil"), quantity: 1, min: 1, max: 2 },
      { item: getItem("palm-oil"), quantity: 1, min: 1, max: 2 },
      { item: getItem("salt"), quantity: 1, min: 1, max: 1 },
      { item: getItem("seasoning-cubes"), quantity: 1, min: 1, max: 2 },
      { item: getItem("tomato-paste"), quantity: 2, min: 1, max: 5 },
      { item: getItem("ground-pepper"), quantity: 1, min: 0, max: 2 },
      { item: getItem("onions"), quantity: 3, min: 0, max: 10 },
      { item: getItem("eggs"), quantity: 1, min: 0, max: 3 },
      { item: getItem("plantain"), quantity: 4, min: 0, max: 8 },
    ],
  },
  {
    id: "two-persons",
    name: "2-Persons Pack",
    description: "For couples or roommates. A well-rounded selection for weekly cooking.",
    target: "2 people",
    icon: "/assets/packs/two-persons.png",
    basePrice: 32000,
    items: [
      { item: getItem("rice"), quantity: 2, min: 1, max: 3 },
      { item: getItem("beans"), quantity: 1, min: 0, max: 3 },
      { item: getItem("garri"), quantity: 1, min: 1, max: 3 },
      { item: getItem("semo"), quantity: 1, min: 0, max: 3 },
      { item: getItem("spaghetti"), quantity: 3, min: 1, max: 6 },
      { item: getItem("noodles"), quantity: 8, min: 0, max: 15 },
      { item: getItem("veg-oil"), quantity: 2, min: 1, max: 3 },
      { item: getItem("palm-oil"), quantity: 1, min: 1, max: 3 },
      { item: getItem("salt"), quantity: 1, min: 1, max: 1 },
      { item: getItem("seasoning-cubes"), quantity: 1, min: 1, max: 2 },
      { item: getItem("tomato-paste"), quantity: 4, min: 2, max: 8 },
      { item: getItem("ground-pepper"), quantity: 1, min: 0, max: 3 },
      { item: getItem("onions"), quantity: 5, min: 0, max: 10 },
      { item: getItem("eggs"), quantity: 1, min: 0, max: 3 },
      { item: getItem("plantain"), quantity: 6, min: 0, max: 12 },
      { item: getItem("potatoes"), quantity: 1, min: 0, max: 3 },
      { item: getItem("ginger-garlic"), quantity: 1, min: 0, max: 2 },
    ],
  },
  {
    id: "small-family",
    name: "Small Family Pack",
    description: "For a family of 3–4. Everything you need to keep the kitchen running.",
    target: "3–4 people",
    icon: "/assets/packs/family.png",
    basePrice: 52000,
    items: [
      { item: getItem("rice"), quantity: 3, min: 2, max: 5 },
      { item: getItem("beans"), quantity: 2, min: 1, max: 4 },
      { item: getItem("garri"), quantity: 2, min: 1, max: 4 },
      { item: getItem("semo"), quantity: 2, min: 0, max: 4 },
      { item: getItem("spaghetti"), quantity: 5, min: 2, max: 10 },
      { item: getItem("noodles"), quantity: 12, min: 0, max: 20 },
      { item: getItem("veg-oil"), quantity: 3, min: 2, max: 6 },
      { item: getItem("palm-oil"), quantity: 2, min: 1, max: 5 },
      { item: getItem("salt"), quantity: 1, min: 1, max: 2 },
      { item: getItem("seasoning-cubes"), quantity: 2, min: 1, max: 4 },
      { item: getItem("tomato-paste"), quantity: 6, min: 3, max: 12 },
      { item: getItem("ground-pepper"), quantity: 1, min: 1, max: 3 },
      { item: getItem("onions"), quantity: 8, min: 4, max: 15 },
      { item: getItem("eggs"), quantity: 2, min: 0, max: 4 },
      { item: getItem("plantain"), quantity: 10, min: 0, max: 20 },
      { item: getItem("potatoes"), quantity: 1, min: 0, max: 5 },
      { item: getItem("iru"), quantity: 1, min: 0, max: 2 },
      { item: getItem("ginger-garlic"), quantity: 1, min: 0, max: 4 },
    ],
  },
  {
    id: "monthly-essentials",
    name: "Monthly Essentials",
    description: "Full monthly restock for a household. Bulk quantities to last the whole month.",
    target: "2–4 people",
    icon: "/assets/packs/monthly.png",
    basePrice: 75000,
    items: [
      { item: getItem("rice"), quantity: 4, min: 3, max: 8 },
      { item: getItem("beans"), quantity: 3, min: 2, max: 6 },
      { item: getItem("garri"), quantity: 2, min: 1, max: 4 },
      { item: getItem("elubo"), quantity: 1, min: 0, max: 3 },
      { item: getItem("semo"), quantity: 3, min: 1, max: 5 },
      { item: getItem("spaghetti"), quantity: 8, min: 4, max: 15 },
      { item: getItem("noodles"), quantity: 20, min: 10, max: 30 },
      { item: getItem("veg-oil"), quantity: 5, min: 3, max: 8 },
      { item: getItem("palm-oil"), quantity: 3, min: 1, max: 5 },
      { item: getItem("salt"), quantity: 1, min: 1, max: 2 },
      { item: getItem("seasoning-cubes"), quantity: 3, min: 1, max: 5 },
      { item: getItem("tomato-paste"), quantity: 10, min: 5, max: 18 },
      { item: getItem("ground-pepper"), quantity: 2, min: 1, max: 4 },
      { item: getItem("onions"), quantity: 10, min: 5, max: 20 },
      { item: getItem("eggs"), quantity: 2, min: 1, max: 4 },
      { item: getItem("plantain"), quantity: 15, min: 5, max: 25 },
      { item: getItem("potatoes"), quantity: 1, min: 0, max: 3 },
      { item: getItem("iru"), quantity: 1, min: 0, max: 2 },
      { item: getItem("ginger-garlic"), quantity: 1, min: 0, max: 2 },
      { item: getItem("cornflakes"), quantity: 1, min: 0, max: 2 },
      // { item: getItem("milk"), quantity: 1, min: 0, max: 3 },
      // { item: getItem("milo"), quantity: 1, min: 0, max: 2 },
      { item: getItem("sugar"), quantity: 1, min: 0, max: 3 },
    ],
  },
];

// Mainland Lagos areas with specific delivery fees
export const MAINLAND_AREAS: Record<string, number> = {
  "Ikeja": 3000,
  "Ogba": 2500,
  "Agege": 2500,
  "Ifako-Ijaiye": 2500,
  "Isolo": 3000,
  "Allen": 3000,
  "Maryland": 3000,
  "Gbagada": 3000,
  "Ketu": 3000,
  "Bariga": 3000,
  "Yaba": 4000,
  "Surulere": 4000,
  "Mushin": 3000,
  "Shomolu": 3000,
  "Kosofe": 3000,
  "Ejigbo": 3000,
  "Somolu": 2800,
  "Ojodu": 3000,
  "Festac": 3500,
  "Egbeda": 3000,
  "ikotun": 3000,
  "ipaja": 3000,
  "Magodo": 3500,
  "Ikorodu": 4000,
  "Abule Egba": 3000,
  "Ojo": 4000,
  

};

// Island Lagos areas - Fixed price of 4500
export const ISLAND_AREAS = [
  "Lekki",
  "VI",
  "Victoria Island",
  "Ikoyi",
  "Ajah",
  "Banana Island",
  "Oniru",
  "Eko Atlantic",
  "Sangotedo",
];

export const ALL_LOCATIONS = [
  ...Object.keys(MAINLAND_AREAS),
  ...ISLAND_AREAS
].sort();

export const isValidLagosArea = (areaInput: string): boolean => {
  if (!areaInput) return false;
  const normalizedInput = areaInput.toLowerCase().trim();
  
  return ALL_LOCATIONS.some(loc => loc.toLowerCase() === normalizedInput);
};

export const getDeliveryFee = (area: string): number => {
  const normalizedArea = area.toLowerCase().trim();
  
  // Check if it's an island area
  if (ISLAND_AREAS.some(a => a.toLowerCase() === normalizedArea)) {
    return 4500;
  }
  
  // Check mainland areas
  const mainlandKey = Object.keys(MAINLAND_AREAS).find(key => key.toLowerCase() === normalizedArea);
  if (mainlandKey) {
    return MAINLAND_AREAS[mainlandKey];
  }
  
  return 3000;
};

export const formatPrice = (amount: number) =>
  "₦" + amount.toLocaleString("en-NG");