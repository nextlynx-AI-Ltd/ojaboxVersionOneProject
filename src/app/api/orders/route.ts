import Airtable from "airtable"
import { NextRequest, NextResponse } from "next/server"

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      orderReference,
      customerName,
      phoneNumber,
      deliveryAddress,
      area,
      packName,
      items,
      subtotal,
      deliveryFee,
      packagingFee,
      serviceCharge,
      grandTotal,
    } = body

    await base(process.env.AIRTABLE_TABLE_ID!).create([
  {
    fields: {
      "Order Reference": orderReference,
      "Customer Name": customerName,
      "Phone Number": phoneNumber,
      "Delivery Address": deliveryAddress,
      "Area": area,
      "Pack Name": packName,
      "Items": items,
      "Subtotal": subtotal,
      "Delivery Fee": deliveryFee,
      "Packaging Fee": packagingFee,
      "Service Charge": serviceCharge,
      "Grand Total": grandTotal,
      "Payment Status": "Paid",
      "Delivery Status": "Pending",
      "Date": new Date().toISOString(),
    },
  },
])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Airtable error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to save order" },
      { status: 500 }
    )
  }
}