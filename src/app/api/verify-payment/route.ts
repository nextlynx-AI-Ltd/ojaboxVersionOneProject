import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { reference } = await req.json()

    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    )

    const data = await response.json()

    if (data.data.status === "success") {
      return NextResponse.json({ verified: true })
    } else {
      return NextResponse.json({ verified: false })
    }
  } catch (error) {
    console.error("Paystack verification error:", error)
    return NextResponse.json({ verified: false }, { status: 500 })
  }
}