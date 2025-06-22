import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anime Facts 101 - Your Daily Dose of Anime Trivia",
  description: "Discover surprising anime facts, trivia, and hidden insights from your favorite shows and characters.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1564728634598481"
          crossOrigin="anonymous"
        ></script>
        <title>Anime Facts 101</title>
        <meta name="description" content="Discover surprising anime facts, trivia, and hidden insights from your favorite shows and characters." />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
