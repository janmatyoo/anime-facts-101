'use client'

import { useRouter } from "next/navigation"
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import reels from '../../../public/facebook-reels.json'
import ShareModal from '../../components/share-modal'
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

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('')

  const openModal = (url: string) => {
    setSelectedVideoUrl(url)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

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
              <div key={i} className="flex flex-col items-center">
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
                <div className="flex flex-col items-center gap-1 mt-3">
                  <button
                    onClick={() => openModal(reel.url)}
                    className="px-4 py-2 rounded-full bg-[#f43d01] hover:bg-[#d63601] text-white text-sm font-normal flex items-center gap-2 transition-transform hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M15 4.5v4a.75.75 0 0 0 1.28.53l4.72-4.72a.75.75 0 0 0 0-1.06L16.28.53A.75.75 0 0 0 15 .5v4a9.5 9.5 0 0 0-9.5 9.5c0 2.6 1.05 4.95 2.75 6.66a.75.75 0 1 0 1.06-1.06A7.992 7.992 0 0 1 6.5 14a8 8 0 0 1 8.5-7.98z" />
                    </svg>
                    Share
                  </button>
                </div>
                {/* <div className="flex flex-col items-center gap-1 mt-3">
                  <button
                    onClick={() => openModal(reel.url)}
                    className="w-10 h-10 rounded-full bg-[#f43d01] hover:bg-[#d63601] flex items-center justify-center transition-transform hover:scale-110"
                    aria-label="Share Reel"
                    title="Share Reel"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.03-.47-.09-.7l7.02-4.11A2.99 2.99 0 0 0 18 7.91a3 3 0 1 0-2.83-4.02L8.15 8.98a3.01 3.01 0 0 0 0 6.03l7.02 4.11A3 3 0 1 0 18 16.08z" />
                    </svg>
                  </button>
                  <span className="text-xs text-gray-600">Share</span>
                </div> */}


              </div>
            ))
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {page > 1 && (
            <button onClick={handlePrevious} className="btn-primary px-1 py-3 text-sm">
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

      {/* ✅ Share Modal */}
      <ShareModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={selectedVideoUrl}
      />
    </>
  )
}
