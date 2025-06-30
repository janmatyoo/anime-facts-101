"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"


interface FacebookReel {
  title: string
  url: string
}

export default function FacebookReels() {
  const [reels, setReels] = useState<FacebookReel[]>([])
  const pathname = usePathname()

  useEffect(() => {
    fetch("/facebook-reels.json")
      .then((res) => res.json())
      .then((data: FacebookReel[]) => {
        const shuffled = [...data].sort(() => 0.5 - Math.random()).slice(0, 6)
        setReels(shuffled)
      })
  }, [])

  if (reels.length === 0) return null

  return (
    <div className="bg-white shadow-md rounded-xl p-6 space-y-6 w-full">
      <div className="flex items-center justify-between">
        <h2
          className={`text-2xl md:text-3xl font-bold text-[#133162] ${
            pathname === "/facebook-reels" ? "text-center w-full" : ""
          }`}
        >
          Anime Scenes You Can’t Miss!
        </h2>
        {/* Only show "See More" if NOT already on /facebook-reels */}
        {/* {pathname !== "/facebook-reels" && (
          <Link href="/reels-page/1">
            <button className="btn-secondary text-sm">See More →</button>
          </Link>
        )} */}
        <Link href="/reels-page/1">
          <button className="btn-secondary text-sm">See More →</button>
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reels.map((reel, i) => (
          <div key={i} className="flex justify-center">
            {/* <p className="text-[#f43d00] font-semibold text-sm">{reel.title}</p> */}
            <div className="w-full max-w-[320px] aspect-[9/16]">
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                  reel.url
                )}&show_text=false&width=500`}
                width="100%"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}

