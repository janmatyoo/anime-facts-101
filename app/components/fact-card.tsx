"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

interface FactCardProps {
  id: string
  title: string
  anime: string
  preview: string
  image: string
  href?: string
  size?: "small" | "large"
  noShadow?: boolean
}

export default function FactCard({ id, title, anime, preview, image, href = "#", size = "small", noShadow }: FactCardProps) {
  const router = useRouter()

  const handleRandomFact = () => {
    router.push("/random")
  }

  const cardClasses =
    size === "large"
      ? `bg-white rounded-xl ${noShadow ? "" : "shadow-lg"} overflow-hidden ${noShadow ? "" : "card-hover"} max-w-2xl mx-auto`
      : `bg-white rounded-lg ${noShadow ? "" : "shadow-md"} overflow-hidden ${noShadow ? "" : "card-hover"}`

  const imageClasses = "w-full h-full object-cover"

  return (
    <div className={cardClasses}>
      <div className="relative p-2">
        <Image
          src={image || "/placeholder.svg"}
          alt={anime}
          width={size === "large" ? 600 : 400}
          height={size === "large" ? 256 : 192}
          className={imageClasses}
        />
      </div>

      <div className={size === "large" ? "p-8" : "p-6"}>
        <div className="text-[#f43d01] text-sm font-medium mb-2">{anime}</div>
        <h3 className={`font-bold text-[#1a1a1a] mb-3 ${size === "large" ? "text-2xl" : "text-lg"}`}>{title}</h3>
        <p className={`text-gray-600 mb-4 ${size === "large" ? "text-lg" : "text-sm"}`}>{preview}</p>

        {size === "large" ? (
          <button onClick={handleRandomFact} className="btn-secondary">
            See Another Random Fact
          </button>
        ) : (
          <Link href={`/fact/${id}`}>
            <button className="btn-secondary text-sm">Read More</button>
          </Link>
        )}
      </div>
    </div>
  )
}