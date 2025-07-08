'use client'

import { useRouter, useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import articles from '../../../public/articles.json'
import AdBanner from "../../components/ad-banner"
import { useState } from 'react'
import categoryColors from '../../lib/categoryColors'

const PAGE_SIZE = 9

export default function ClientPaginatedArticlesPage() {
  const params = useParams()
  const page = Number(params?.page)
  const router = useRouter()

  const [selectedCategory, setSelectedCategory] = useState<'All' | string>('All')

  const totalPages = Math.ceil(articles.length / PAGE_SIZE)

  const handlePrevious = () => {
    const prevPage = Math.max(1, page - 1)
    router.push(`/articles-page/${prevPage}`)
  }

  const handleNext = () => {
    const nextPage = Math.min(totalPages, page + 1)
    router.push(`/articles-page/${nextPage}`)
  }

  if (isNaN(page) || page < 1 || page > totalPages) {
    notFound()
  }

  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))]

  const filteredArticles = [...articles]
  .sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime())
  .filter(article => selectedCategory === 'All' || article.category === selectedCategory)

  const startIndex = (page - 1) * PAGE_SIZE
  const currentArticles = filteredArticles.slice(startIndex, startIndex + PAGE_SIZE)

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://animefacts101.com/articles-page/${page}`} />
      </Head>

      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-4">Articles</h1>
          <p className="text-xl text-gray-600">Page {page} of {totalPages}</p>
        </div>

        {/* Category Filters */}
        <div className="sticky top-16 z-10 bg-white py-2 shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm rounded-full border ${
                  selectedCategory === cat
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map(article => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="border rounded-xl shadow hover:shadow-lg transition-all p-4 bg-white flex flex-col h-full"
            >
              <div>
                
                <div className="mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[article.category] || 'bg-gray-100 text-gray-800'}`}>
                    {article.category}
                  </span>
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

                <div className="mt-2 text-xs text-gray-400">
                  {article.date_created} · {article.read_duration} min read
                </div>
              </div>

              <div className="mt-auto pt-4">
                <span className="btn-primary text-xs px-2 py-1 inline-block">Read More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 mb-5">
            <AdBanner />
        </div>

        {/* Pagination */}
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 mt-12">
          {page > 1 && (
            <button onClick={handlePrevious} className="btn-primary px-3 py-2 text-sm">
              Previous
            </button>
          )}
          <span className="text-gray-700 font-medium flex items-center">
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <button onClick={handleNext} className="btn-primary px-3 py-2 text-sm">
              Next
            </button>
          )}
        </div>
      </div>
    </>
  )
}
