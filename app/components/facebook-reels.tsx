"use client"

import { useEffect, useState } from "react"

interface FacebookReel {
  title: string
  url: string
}

export default function FacebookReels() {
  const [reels, setReels] = useState<FacebookReel[]>([])

  useEffect(() => {
    fetch("/facebook-reels.json")
      .then((res) => res.json())
      .then(setReels)
  }, [])

  if (reels.length === 0) return null

  return (
    <div className="bg-white shadow-md rounded-xl p-6 space-y-6 w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-[#133162]">
        Epic Anime Scenes You Can’t Miss!
      </h2>

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

