// app/facebook-reels/page.tsx

import FacebookReels from "../components/facebook-reels"
import AdBanner from "../components/ad-banner"

export const metadata = {
  title: "Epic Anime Reels | AnimeFacts101",
  description:
    "Watch the most epic anime reels featuring top fight scenes, emotional moments, and viral clips from your favorite series — all in one place!",
  openGraph: {
    title: "Epic Anime Reels | AnimeFacts101",
    description:
      "Enjoy hand-picked anime reels that highlight unforgettable moments. Tap to watch now!",
    url: "https://animefacts101.com/facebook-reels",
    images: [
      {
        url: "https://animefacts101.com/og-anime-reels-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Anime Reels Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epic Anime Reels | AnimeFacts101",
    description: "Viral anime scenes and emotional reels in one binge-worthy list.",
    images: ["https://animefacts101.com/og-anime-reels-preview.jpg"],
  },
}

export default function FacebookReelsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Title + Intro */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-4">
            Viral Anime Reels
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into a collection of short, action-packed anime reels featuring jaw-dropping fight scenes, emotional moments, and unforgettable highlights. Updated regularly!
          </p>
        </div>

        {/* Top Ad */}
        {/* <div className="mb-8">
          <AdBanner />
        </div> */}

        {/* Reel List */}
        <FacebookReels />

        {/* Bottom Ad */}
        {/* <div className="mt-12">
          <AdBanner />
        </div> */}
      </div>
    </div>
  )
}
