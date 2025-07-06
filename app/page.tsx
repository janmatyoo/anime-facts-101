export const dynamic = "force-dynamic"

import Link from "next/link"
import facts from "../public/facts.json"
import articles from "../public/articles.json"
import FactCard from "./components/fact-card"
import AdBanner from "./components/ad-banner"
import AnimeRecommendation from "./components/anime-recommendation"
import ShopGrid from "./components/shop-grid"
import Image from "next/image"
import categoryColors from './lib/categoryColors'


function getRandomFact() {
  return facts[Math.floor(Math.random() * facts.length)]
}

export default function HomePage() {
  const featuredFact = getRandomFact()
  const shuffledFacts = [...facts].sort(() => 0.5 - Math.random())
  const gridFacts = shuffledFacts.slice(0, 6)

  const sortedArticles = [...articles].sort((a, b) =>
    new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
  )
  const latestArticles = sortedArticles.slice(0, 3)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="min-h-screen bg-white">
        {/* ✅ Latest Articles Section */}
        <section className="pt-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#133162] mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <div
                  key={article.id}
                  className="border rounded-xl shadow hover:shadow-lg transition-all p-4 bg-white flex flex-col h-full"
                >
                  <Link href={`/articles/${article.id}`} className="block">
                    <div className={`text-xs font-medium inline-block px-2 py-1 rounded-full mb-2 ${
                      categoryColors[article.category] || 'bg-gray-100 text-gray-800'
                    }`}>
                      {article.category}
                    </div>

                    <div className="relative w-full h-auto aspect-[2/1] mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={article.card_thumbnail}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                      />
                    </div>

                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  </Link>

                  <div className="text-xs text-gray-400 mt-auto">
                    {article.date_created} · {article.read_duration} min read
                  </div>

                  <div className="pt-4">
                    <Link href={`/articles/${article.id}`}>
                      <span className="btn-primary text-xs px-2 py-1 inline-block">Read More →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Featured Fact + Right Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
            {/* Featured Fact */}
            <div>
              <div className="bg-white shadow-md rounded-xl p-6 space-y-4 w-full max-w-full">
                <div className="text-center lg:text-left mb-8 lg:mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#133162] mb-4">
                    Featured Fact of the Day
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                    Discover surprising trivia and hidden insights from your favorite anime series
                  </p>
                </div>

                <FactCard
                  id={featuredFact.id}
                  title={featuredFact.title}
                  anime={featuredFact.anime}
                  preview={featuredFact.fullText}
                  image={featuredFact.image}
                  size="large"
                  noShadow 
                />
              </div>
              <div className="col-span-full my-8">
                <AdBanner size="rectangle" className="mx-auto" />
              </div>
            </div>
          
            <div className="space-y-12">
              <AnimeRecommendation />

              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#133162]">
                    Trending Anime Merch
                  </h2>
                  <Link href={`/shop`}>
                    <button className="btn-secondary px-1 py-3 text-sm">
                      See More
                    </button>
                  </Link>
                </div>
                <ShopGrid showFilters={false} limit={3} randomize={true}/>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <AdBanner />
          </div>
        </section>

        {/* More Facts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#133162] text-center mb-12">More Anime Facts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridFacts.map((fact, index) => (
                <div key={fact.id}>
                  <FactCard
                    id={fact.id}
                    title={fact.title}
                    anime={fact.anime}
                    preview={fact.preview}
                    image={fact.image}
                    href={`/fact/${fact.id}`}
                  />
                  {(index + 1) % 4 === 0 && (
                    <div className="col-span-full my-8">
                      <AdBanner size="rectangle" className="mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="max-w-7xl mx-auto mt-10">
              <AdBanner />
            </div>

            <div className="text-center mt-10">
              <Link
                href="/page/1"
                className="inline-block px-6 py-3 text-[#133162] border border-[#133162] rounded-xl text-lg font-medium hover:bg-[#133162] hover:text-white transition"
              >
                View All Anime Facts →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
