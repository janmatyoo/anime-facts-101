"use client"

import { useEffect, useState } from "react"
import recommendations from "../../public/recommendations.json"

export default function AnimeRecommendation() {
  const [recommendation, setRecommendation] = useState(null)

  useEffect(() => {
    const random = Math.floor(Math.random() * recommendations.length)
    setRecommendation(recommendations[random])
  }, [])

  const handleRefresh = () => {
    const random = Math.floor(Math.random() * recommendations.length)
    setRecommendation(recommendations[random])
  }

  if (!recommendation) return null // or loading spinner

  return (
    <div>
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 w-full max-w-full">
        <div className="text-center lg:text-left mb-4">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-bold text-[#133162]">
                Anime to Watch Today
                </h2>
                <button onClick={handleRefresh} className="btn-secondary px-1 py-3 text-sm">
                    ↻ Shuffle
                </button>
            </div>
            <p className="flex flex-wrap text-xl font-bold text-[#f43d00]">
                {recommendation.title}
            </p>
            <p className="flex flex-wrap text-sm font-bold text-[#133162] mt-1">
                Episodes: {recommendation.episodes}
            </p>
            <p className="text-s text-gray-600 text-left mt-2">
                {recommendation.description}
            </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {recommendation.genres.map((genre, i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="text-sm font-bold text-[#f43d00]">{genre}</span>
              {i !== recommendation.genres.length - 1 && (
                <span className="w-1 h-1 bg-[#f43d00] rounded-full"></span>
              )}
            </div>
          ))}
        </div>

        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${recommendation.youtubeId}?autoplay=1&mute=1&controls=1&rel=0&showinfo=0&modestbranding=1&loop=1`}
            title={recommendation.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
