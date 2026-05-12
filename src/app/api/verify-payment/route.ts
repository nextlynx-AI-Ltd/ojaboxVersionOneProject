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

    // Log full response to see what Paystack returns
    console.log("Paystack verify response:", JSON.stringify(data))

    if (!data || !data.data) {
      console.error("Paystack response missing data:", data)
      return NextResponse.json({ verified: false, reason: "no_data" })
    }

    if (data.data.status === "success") {
      return NextResponse.json({ verified: true })
    } else {
      console.error("Payment not successful:", data.data.status)
      return NextResponse.json({ verified: false, reason: data.data.status })
    }
  } catch (error) {
    console.error("Paystack verification error:", error)
    return NextResponse.json({ verified: false, reason: "exception" }, { status: 500 })
  }
}