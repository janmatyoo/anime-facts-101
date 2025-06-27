'use client'
import { useEffect, useRef } from "react"

interface AdBannerProps {
  className?: string
  size?: "horizontal" | "rectangle"
}

export default function AdBanner({ className = "", size = "horizontal" }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null)

  const sizeMap = {
    horizontal: {
      width: 728,
      height: 90,
    },
    rectangle: {
      width: 300,
      height: 250,
    },
  }

  const { width, height } = sizeMap[size]

  useEffect(() => {
    const adSlot = adRef.current?.querySelector(".adsbygoogle")

    if (adSlot && !(adSlot as any)._adsbygoogle_initialized) {
      try {
        if (typeof window !== "undefined" && (window as any).adsbygoogle) {
          (window as any).adsbygoogle.push({})
        }
      } catch (e) {
        console.error("Adsense error", e)
      }
    }
  }, [])

  return (
    <div
      className={`mx-auto ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      ref={adRef}
    >
      <ins  
        className="adsbygoogle"
        style={{ display: "inline-block", width: `${width}px`, height: `${height}px` }}
        data-ad-client="ca-pub-1564728634598481"
        data-ad-slot="2942300015"
      />
    </div>
  )
}
