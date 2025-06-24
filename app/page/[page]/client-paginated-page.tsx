'use client'

import { useRouter } from "next/navigation"
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import facts from '../../../public/facts.json'
import FactCard from '../../components/fact-card'
import AdBanner from '../../components/ad-banner'

export default function ClientPaginatedPage() {
  const params = useParams()
  const page = Number(params?.page)

  const router = useRouter()

  const handlePrevious = () => {
    const prevPage = Math.max(1, page - 1)
    router.push(`/page/${prevPage}`)
  }

  const handleNext = () => {
    const nextPage = Math.min(totalPages, page + 1)
    router.push(`/page/${nextPage}`)
  }

  if (isNaN(page) || page < 1) {
    notFound()
  }

  const FACTS_PER_PAGE = 6
  const totalPages = Math.ceil(facts.length / FACTS_PER_PAGE)
  if (page > totalPages) {
    notFound()
  }

  const startIndex = (page - 1) * FACTS_PER_PAGE
  const currentFacts = facts.slice(startIndex, startIndex + FACTS_PER_PAGE)

  return (
    <>
      {/* ✅ Canonical Tag for SEO */}
      <Head>
        <link rel="canonical" href={`https://animefacts101.com/page/${page}`} />
      </Head>

      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-4">Anime Facts</h1>
          <p className="text-xl text-gray-600">Page {page} of {totalPages}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentFacts.map((fact, index) => (
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

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
            {page > 1 && (
                <button onClick={handlePrevious} className="btn-primary  px-1 py-3 text-sm">
                  Previous
                </button>
            )}
            <span className="text-gray-700 font-medium flex items-center">
                Page {page} of {totalPages}
            </span>
            {page < totalPages && (
                <button onClick={handleNext} className="btn-primary px-1 py-3 text-sm">
                  Next
                </button>
            )}
        </div>
      </div>
    </>
  )
}
