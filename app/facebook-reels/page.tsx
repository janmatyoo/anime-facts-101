// app/facebook-reels/page.tsx

import FacebookReels from "../components/facebook-reels"

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
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FacebookReels />
      </div>
    </div>
  )
}
