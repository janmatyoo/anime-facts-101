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
      style: { display: "block" },
      class: "w-full h-24",
      format: "horizontal",
    },
    rectangle: {
      style: { display: "block" },
      class: "w-full max-w-sm h-64",
      format: "rectangle",
    },
  }

  useEffect(() => {
    try {
      // Load the ad
      if (window && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({})
      }
    } catch (e) {
      console.error("Adsense error", e)
    }
  }, [])

  return (
    <div className={`${sizeMap[size].class} ${className}`}>
      <ins
        className="adsbygoogle"
        style={sizeMap[size].style}
        data-ad-client="ca-pub-XXXXXXXXXXXX"
        data-ad-slot="2942300015"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
