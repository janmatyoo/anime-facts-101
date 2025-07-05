import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import GrowScript from "./components/grow-script"
import GoogleAnalytics from "./components/google-analytics-4"
import AdSenseScript from "./components/adsense-script"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Anime Facts 101 - Your Daily Dose of Anime Trivia",
  description: "Discover surprising anime facts, trivia, and hidden insights from your favorite shows and characters.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <AdSenseScript />
        <GrowScript />
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
