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
  description: "Discover surprising anime facts, trivia, and hidden insights from your favorite shows and characters.",
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
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* ✅ Grow.me Script */}
        <Script id="grow-me" strategy="afterInteractive">
          {`!(function(){
              window.growMe || ((window.growMe = function(e){ window.growMe._.push(e); }), (window.growMe._ = []));
              var e = document.createElement("script");
              e.type = "text/javascript";
              e.src = "https://faves.grow.me/main.js";
              e.defer = true;
              e.setAttribute("data-grow-faves-site-id", "U2l0ZTo5ZDVlYzdmZi04NjJmLTRiNTMtODk0MC1mOWE2OWFiN2FmMTA=");
              var t = document.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(e, t);
          })();`}
        </Script>

        {/* ✅ Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1564728634598481"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
