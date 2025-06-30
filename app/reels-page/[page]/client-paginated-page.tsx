'use client'

import { useRouter } from "next/navigation"
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import reels from '../../../public/facebook-reels.json'
import FactCard from '../../components/fact-card'
import AdBanner from '../../components/ad-banner'

const REELS_PER_PAGE = 10
const totalPages = Math.ceil(reels.length / REELS_PER_PAGE)

export default function ClientPaginatedPage() {
  const params = useParams()
  const page = Number(params?.page)

  const router = useRouter()

  const handlePrevious = () => {
    const prevPage = Math.max(1, page - 1)
    router.push(`/reels-page/${prevPage}`)
  }

  const handleNext = () => {
    const nextPage = Math.min(totalPages, page + 1)
    router.push(`/reels-page/${nextPage}`)
  }

  if (isNaN(page) || page < 1) {
    notFound()
  }

  if (page > totalPages) {
    notFound()
  }

  const startIndex = (page - 1) * REELS_PER_PAGE
  const currentReels = reels.slice(startIndex, startIndex + REELS_PER_PAGE)

  return (
    <>
      {/* ✅ Canonical Tag for SEO */}
      <Head>
        <link rel="canonical" href={`https://animefacts101.com/reels-page/${page}`} />
      </Head>

      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-4">Anime Facts</h1>
          <p className="text-xl text-gray-600">Page {page} of {totalPages}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {currentReels.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">No reels found on this page.</p>
          ) : (
            currentReels.map((reel, i) => (
              <div key={i} className="flex justify-center">
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
            ))
          )}
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
