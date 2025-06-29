import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anime Facts 101 - Your Daily Dose of Anime Trivia",
  description:
    "Discover surprising anime facts, trivia, and hidden insights from your favorite shows and characters.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
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
        {/* ✅ GA4 Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T259JLDPMH"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T259JLDPMH');
          `}
        </Script>

        {/* ✅ Grow.me Script */}
        <Script
          id="grow-me"
          src="https://faves.grow.me/main.js"
          defer
          strategy="afterInteractive"
          data-grow-faves-site-id="U2l0ZTo5ZDVlYzdmZi04NjJmLTRiNTMtODk0MC1mOWE2OWFiN2FmMTA="
        />

        {/* ✅ Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1564728634598481"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <title>Anime Facts 101</title>
        <meta
          name="description"
          content="Discover surprising anime facts, trivia, and hidden insights from your favorite shows and characters."
        />
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
