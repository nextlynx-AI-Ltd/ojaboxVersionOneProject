export interface Item {
  id: string
  name: string
  category: 'staples' | 'quickMeals' | 'cookingEssentials' | 'extras'
  unit: string
  pricePerUnit: number
  defaultQty: number
  maxQty: number
}

export interface Pack {
  id: string
  name: string
  slug: string
  tagline: string
  forWho: string
  priceRange: string
  items: {
    itemId: string
    qty: number
  }[]
}

export interface OrderItem {
  item: Item
  qty: number
}

export interface Order {
  reference: string
  customerName: string
  phone: string
  address: string
  zone: string
  items: OrderItem[]
  total: number
  createdAt: string
}