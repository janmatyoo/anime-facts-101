import FactCard from "./components/fact-card"
import AdBanner from "./components/ad-banner"
// import { animeFacts, getRandomFact } from "./data/facts"
import facts from "../public/facts.json"

function getRandomFact(factsArray) {
  return factsArray[Math.floor(Math.random() * factsArray.length)]
}

export default function HomePage() {
  // const featuredFact = getRandomFact()
  // const gridFacts = animeFacts.slice(0, 8)
  const featuredFact = getRandomFact(facts)
  const gridFacts = facts.slice(0, 8)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#133162] mb-4">Anime Fact of the Day</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover surprising trivia and hidden insights from your favorite anime series
            </p>
          </div>

          <FactCard
            title={featuredFact.title}
            anime={featuredFact.anime}
            preview={featuredFact.fullText}
            image={featuredFact.image}
            size="large"
          />
        </div>
      </section>

      {/* Ad Banner */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <AdBanner />
        </div>
      </section>

      {/* Facts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#133162] text-center mb-12">More Anime Facts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridFacts.map((fact, index) => (
              <div key={fact.id}>
                <FactCard
                  title={fact.title}
                  anime={fact.anime}
                  preview={fact.preview}
                  image={fact.image}
                  href={`/fact/${fact.id}`}
                />

                {/* Insert ad after every 4 cards */}
                {(index + 1) % 4 === 0 && (
                  <div className="col-span-full my-8">
                    <AdBanner size="rectangle" className="mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}