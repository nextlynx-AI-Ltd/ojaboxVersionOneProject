import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import type { ConfirmationData } from "@/context/OrderContext"

const GREEN: [number, number, number] = [27, 111, 60]
const GREY: [number, number, number] = [110, 110, 110]

// jsPDF's built-in fonts don't include the ₦ symbol, so we use "NGN"
const money = (n: number) => `NGN ${n.toLocaleString("en-NG")}`

export function generateInvoice(data: ConfirmationData) {
  const doc = new jsPDF({ unit: "mm", format: "a4" })
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 18

  // Header
  doc.setFont("helvetica", "bold")
  doc.setFontSize(22)
  doc.setTextColor(...GREEN)
  doc.text("OjaBox", margin, 22)

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(...GREY)
  doc.text("Fresh foodstuff, delivered.", margin, 28)

  doc.setFont("helvetica", "bold")
  doc.setFontSize(20)
  doc.setTextColor(30, 30, 30)
  doc.text("INVOICE", pageWidth - margin, 22, { align: "right" })

  // Invoice meta
  const dateStr = new Date(data.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.setTextColor(...GREY)
  doc.text(`Invoice No: ${data.orderId}`, pageWidth - margin, 29, { align: "right" })
  doc.text(`Date: ${dateStr}`, pageWidth - margin, 34, { align: "right" })

  doc.setDrawColor(...GREEN)
  doc.setLineWidth(0.6)
  doc.line(margin, 40, pageWidth - margin, 40)

  // Billed to
  doc.setFont("helvetica", "bold")
  doc.setFontSize(10)
  doc.setTextColor(...GREEN)
  doc.text("BILLED TO", margin, 50)

  doc.setFont("helvetica", "normal")
  doc.setTextColor(30, 30, 30)
  let y = 56
  const lines = [
    data.delivery.name,
    data.delivery.phone,
    ...(data.delivery.email ? [data.delivery.email] : []),
    `${data.delivery.address}, ${data.delivery.area}`,
  ]
  lines.forEach((line) => {
    doc.text(line, margin, y)
    y += 5
  })

  // Pack name
  doc.setFont("helvetica", "bold")
  doc.setTextColor(...GREEN)
  doc.text("PACK", pageWidth - margin, 50, { align: "right" })
  doc.setFont("helvetica", "normal")
  doc.setTextColor(30, 30, 30)
  doc.text(data.packName, pageWidth - margin, 56, { align: "right" })

  // Items table
  autoTable(doc, {
    startY: y + 6,
    margin: { left: margin, right: margin },
    head: [["Item", "Unit", "Qty", "Unit Price", "Total"]],
    body: data.items.map((i) => [
      i.name,
      i.unit,
      String(i.quantity),
      money(i.pricePerUnit),
      money(i.pricePerUnit * i.quantity),
    ]),
    headStyles: { fillColor: GREEN, textColor: 255, fontStyle: "bold" },
    styles: { fontSize: 9, cellPadding: 3 },
    alternateRowStyles: { fillColor: [247, 247, 244] },
    columnStyles: {
      2: { halign: "center" },
      3: { halign: "right" },
      4: { halign: "right" },
    },
  })

  // Totals
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let ty = (doc as any).lastAutoTable.finalY + 10
  const labelX = pageWidth - margin - 60
  const valueX = pageWidth - margin

  const row = (label: string, value: string, bold = false) => {
    doc.setFont("helvetica", bold ? "bold" : "normal")
    doc.setFontSize(bold ? 12 : 10)
    doc.setTextColor(bold ? 27 : 60, bold ? 111 : 60, bold ? 60 : 60)
    doc.text(label, labelX, ty)
    doc.text(value, valueX, ty, { align: "right" })
    ty += bold ? 8 : 6
  }

  row("Subtotal", money(data.subtotal))
  row("Delivery", money(data.deliveryFee))
  row("Packaging", money(data.packagingFee))
  row("Service Charge", money(data.serviceCharge))
  doc.setDrawColor(200, 200, 200)
  doc.line(labelX, ty - 3, valueX, ty - 3)
  ty += 2
  row("Total Paid", money(data.grandTotal), true)

  // Paid stamp
  ty += 4
  doc.setFont("helvetica", "bold")
  doc.setFontSize(11)
  doc.setTextColor(...GREEN)
  doc.text("PAID via Paystack", valueX, ty, { align: "right" })

  // Footer
  const pageHeight = doc.internal.pageSize.getHeight()
  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  doc.setTextColor(...GREY)
  doc.text("Thank you for choosing OjaBox.", pageWidth / 2, pageHeight - 20, { align: "center" })
  doc.text(
    "Questions? Chat with us on WhatsApp or email ojabox55@gmail.com",
    pageWidth / 2,
    pageHeight - 15,
    { align: "center" }
  )

  doc.save(`OjaBox-Invoice-${data.orderId}.pdf`)
}