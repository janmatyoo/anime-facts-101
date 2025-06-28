"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import AdBanner from "../../components/ad-banner"

interface AnimeFact {
  id: string
  anime: string
  title: string
  preview: string
  fullText: string
  image: string
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function FactDetailClientPage() {
  const { id } = useParams()
  const [fact, setFact] = useState<AnimeFact | null>(null)
  const [relatedFacts, setRelatedFacts] = useState<AnimeFact[]>([])
  const isMobile = useIsMobile()
  const RELATED_FACTS = 6

  useEffect(() => {
    if (!id) return

    fetch("/facts.json")
      .then((res) => res.json())
      .then((data: AnimeFact[]) => {
        const matched = data.find((f) => f.id === id)
        setFact(matched || null)

        const others = data.filter((f) => f.id !== id)
        const shuffled = shuffleArray(others)
        setRelatedFacts(shuffled.slice(0, RELATED_FACTS))
      })
  }, [id])

  if (!fact) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="min-h-screen bg-white py-16 overflow-x-hidden">
      {/* Title and Top Ad */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-4">Anime Fact</h1>
          <p className="text-xl text-gray-600">Enjoy a detailed anime fact below.</p>
        </div>
        {/* <div className="mb-12">
          <AdBanner />
        </div> */}
      </div>

      {/* Main Fact Card */}
      <div className="w-full px-4">
        {isMobile ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto mb-16">
            <div className="w-full h-full">
              <img
                src={fact.image || "/placeholder.svg"}
                alt={fact.anime}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-[#f43d01] text-sm font-medium mb-2">{fact.anime}</div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">{fact.title}</h2>
              <div className="text-gray-700 text-lg leading-relaxed">
                {fact.fullText.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4">{para}</p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-[1400px] min-h-[700px] mx-auto mb-16 flex flex-col md:flex-row md:gap-x-6">
            <div className="w-full md:w-4/5 h-80 md:h-auto rounded-l-2xl overflow-hidden">
              <img
                src={fact.image || "/placeholder.svg"}
                alt={fact.anime}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-10 md:w-3/5">
              <div className="text-[#f43d01] text-3xl font-bold mb-6">{fact.anime}</div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">{fact.title}</h2>
              <div className="text-gray-700 text-lg leading-relaxed">
                {fact.fullText.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4">{para}</p>
                ))}
              </div>
              <button
                onClick={() => {
                  fetch("/facts.json")
                    .then((res) => res.json())
                    .then((data: AnimeFact[]) => {
                      const otherFacts = data.filter((f) => f.id !== id)
                      const random = otherFacts[Math.floor(Math.random() * otherFacts.length)]
                      window.location.href = `/fact/${random.id}`
                    })
                }}
                className="btn-primary px-1 py-3 text-s">
                Show Me Another Fact →
            </button>
            </div>
            
          </div>
        )}
      </div>

      {/* Bottom Ad and Related Facts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-12">
          <AdBanner />
        </div> */}

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#133162] text-center mb-8">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedFacts.map((fact) => (
              <div key={fact.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <div className="relative p-2">
                  <img
                    src={fact.image || "/placeholder.svg"}
                    alt={fact.anime}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#f43d01] text-sm font-medium mb-2">{fact.anime}</div>
                  <h3 className="font-bold text-[#1a1a1a] mb-3 text-lg">{fact.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{fact.preview}</p>
                  <a href={`/fact/${fact.id}`}>
                    <button className="btn-secondary text-sm">Read More</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// 🔥 Hook to detect mobile view
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return isMobile
}
