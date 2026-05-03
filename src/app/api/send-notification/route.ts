import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const {
      orderReference,
      customerName,
      phoneNumber,
      deliveryAddress,
      area,
      packName,
      items,
      grandTotal,
    } = await req.json()

    await resend.emails.send({
      from: "OjaBox Orders <onboarding@resend.dev>",
      to: process.env.TEAM_EMAIL!,
      subject: `New Order ${orderReference} — ${packName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B6F3C; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New OjaBox Order 🎉</h1>
          </div>
          <div style="border: 1px solid #eee; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 140px;">Order Reference</td>
                <td style="padding: 8px 0; font-weight: bold;">${orderReference}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">Customer Name</td>
                <td style="padding: 8px 0;">${customerName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">Phone Number</td>
                <td style="padding: 8px 0;">${phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">Delivery Address</td>
                <td style="padding: 8px 0;">${deliveryAddress}, ${area}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">Pack</td>
                <td style="padding: 8px 0;">${packName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; vertical-align: top;">Items</td>
                <td style="padding: 8px 0;">${items}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">Grand Total</td>
                <td style="padding: 8px 0; font-weight: bold; color: #1B6F3C; font-size: 18px;">₦${grandTotal.toLocaleString("en-NG")}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
              <p style="margin: 0; font-size: 13px; color: #666;">Log in to Airtable to update the order status and coordinate delivery.</p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}