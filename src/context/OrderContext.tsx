'use client'

import { createContext, useContext, useState, ReactNode } from "react"
import { FoodItem } from "@/data/packs"

export interface CartItem {
  item: FoodItem
  quantity: number
  min: number
  max: number
}

export interface OrderData {
  packId: string
  packName: string
  items: CartItem[]
  total: number
}

export interface ConfirmationData {
  orderId: string
  packName: string
  grandTotal: number
  delivery: { name: string; phone: string; address: string; area: string }
  date: string
}

interface OrderContextType {
  order: OrderData | null
  confirmation: ConfirmationData | null
  setOrder: (order: OrderData) => void
  setConfirmation: (data: ConfirmationData) => void
  clearOrder: () => void
}

const OrderContext = createContext<OrderContextType | null>(null)

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrderState] = useState<OrderData | null>(null)
  const [confirmation, setConfirmationState] = useState<ConfirmationData | null>(null)

  const setOrder = (order: OrderData) => setOrderState(order)
  const setConfirmation = (data: ConfirmationData) => setConfirmationState(data)
  const clearOrder = () => setOrderState(null)

  return (
    <OrderContext.Provider value={{ order, confirmation, setOrder, setConfirmation, clearOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => {
  const ctx = useContext(OrderContext)
  if (!ctx) throw new Error("useOrder must be used within OrderProvider")
  return ctx
}