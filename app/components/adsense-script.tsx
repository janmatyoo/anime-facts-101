"use client"
import Script from "next/script"

const AdSenseScript = () => (
  <Script
    id="adsense-script"
    async
    strategy="afterInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1564728634598481"
    crossOrigin="anonymous"
  />
)

export default AdSenseScript
