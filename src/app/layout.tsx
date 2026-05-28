import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/sonner"
import { OrderProvider } from "@/context/OrderContext"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "OjaBox — Foodstuff Delivered in Lagos",
    template: "%s | OjaBox"
  },
  description: "Restock your kitchen without the market stress. Curated food packs delivered to your door in Lagos. Choose a pack, customize it, and get it delivered in 24–48 hours.",
  keywords: ["foodstuff delivery Lagos", "grocery delivery Lagos", "food pack Lagos", "Lagos food delivery", "Nigerian grocery delivery"],
  authors: [{ name: "OjaBox" }],
  creator: "OjaBox",
  metadataBase: new URL("https://www.ojabox.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.ojabox.com",
    siteName: "OjaBox",
    title: "OjaBox — Foodstuff Delivered in Lagos",
    description: "Restock your kitchen without the market stress. Curated food packs delivered to your door in Lagos.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "OjaBox — Foodstuff Delivered in Lagos",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OjaBox — Foodstuff Delivered in Lagos",
    description: "Restock your kitchen without the market stress. Curated food packs delivered to your door in Lagos.",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="beforeInteractive"
        />
      </head>
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