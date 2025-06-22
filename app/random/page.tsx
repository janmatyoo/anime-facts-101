"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import FactCard from "../components/fact-card"
import AdBanner from "../components/ad-banner"

interface AnimeFact {
  id: string
  anime: string
  title: string
  preview: string
  fullText: string
  image: string
}

function getRandomFact(facts: AnimeFact[]) {
  return facts[Math.floor(Math.random() * facts.length)]
}

export default function RandomPage() {
  const [facts, setFacts] = useState<AnimeFact[]>([])
  const [currentFact, setCurrentFact] = useState<AnimeFact | null>(null)
  const [relatedFacts, setRelatedFacts] = useState<AnimeFact[]>([])
  const searchParams = useSearchParams()
  const factId = searchParams.get("id")

  useEffect(() => {
    fetch("/facts.json")
      .then((res) => res.json())
      .then((data: AnimeFact[]) => {
        setFacts(data)

        let selectedFact: AnimeFact | null = null

        if (factId) {
          selectedFact = data.find(f => f.id === factId) || null
        }

        if (!selectedFact) {
          selectedFact = getRandomFact(data)
        }

        setCurrentFact(selectedFact)

        const others = data.filter(f => f.id !== selectedFact?.id)
        setRelatedFacts(others.slice(0, 3))
      })
  }, [factId])


  const handleNewFact = () => {
    if (!facts.length) return
    const random = getRandomFact(facts)
    setCurrentFact(random)

    const others = facts.filter(f => f.id !== random.id)
    setRelatedFacts(others.slice(0, 3))
  }

  if (!currentFact) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-4">Random Anime Fact</h1>
          <p className="text-xl text-gray-600">Click the button below to discover something new!</p>
        </div>

        {/* Ad Banner Above Fact */}
        <div className="mb-12">
          <AdBanner />
        </div>

        {/* Main Fact Card */}
        <div className="mb-12">
          {/* Button on top */}
          <div className="flex justify-center mb-4">
            <button onClick={handleNewFact} className="btn-primary w-full sm:w-auto">
              Show Another Fact
            </button>
          </div>

          {/* Fact Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
            <div className="flex justify-center">
              <div className="w-full h-full object-cover">
                <img
                  src={currentFact.image || "/placeholder.svg"}
                  alt={currentFact.anime}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="text-[#f43d01] text-sm font-medium mb-2">{currentFact.anime}</div>
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">{currentFact.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{currentFact.fullText}</p>
            </div>
          </div>
        </div>

        {/* Ad Banner Below Fact */}
        <div className="mb-12">
          <AdBanner />
        </div>

        {/* Related Facts */}
        <div>
          <h3 className="text-2xl font-bold text-[#133162] text-center mb-8">You Might Also Like</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedFacts.map((fact) => (
              <FactCard
                key={fact.id}
                id={fact.id}
                title={fact.title}
                anime={fact.anime}
                preview={fact.preview}
                image={fact.image}
                href={`/random?id=${fact.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
