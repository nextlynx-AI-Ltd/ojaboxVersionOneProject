import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/sonner"
import { OrderProvider } from "@/context/OrderContext"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oja Box — Fresh Foodstuff Delivered in Lagos",
  description: "Restock your kitchen without the market stress. Curated food packs delivered to your door in Ikeja, Lagos.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <OrderProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </OrderProvider>
      </body>
    </html>
  )
}