"use client"

import Image from "next/image"
import Link from "next/link"
import products from "../../public/products.json"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import {
  ShoppingCart,
  Shirt,
  Boxes,
  Tag,
  BookOpen,
  Sparkles,
  MonitorSmartphone,
  Sun,
} from "lucide-react"

interface Product {
  id: string
  name: string
  image_1: string
  image_2: string
  link: string
  category: string
  type: string
}

const typeIcons: Record<string, React.ReactNode> = {
  Collectible: <Boxes className="w-4 h-4 inline-block mr-1" />,
  Clothing: <Shirt className="w-4 h-4 inline-block mr-1" />,
  Accessories: <Tag className="w-4 h-4 inline-block mr-1" />,
  Manga: <BookOpen className="w-4 h-4 inline-block mr-1" />,
  Cosplay: <Sparkles className="w-4 h-4 inline-block mr-1" />,
  "Tech Gear": <MonitorSmartphone className="w-4 h-4 inline-block mr-1" />,
  Stationery: <Sun className="w-4 h-4 inline-block mr-1" />,
}

export default function ShopGrid({
  showFilters = true,
  limit,
  category,
  randomize = false,
}: {
  showFilters?: boolean
  limit?: number
  category?: string
  randomize?: boolean
}) {
  const [selectedType, setSelectedType] = useState<string>("All")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const types = ["All", ...Array.from(new Set(products.map((p) => p.type)))]
  const allCategories = Array.from(new Set(products.map((p) => p.category)))
  const categoryIsValid = !category || category === "General" || allCategories.includes(category)

  let baseFiltered = products

  // Apply category prop filter
  if (category && category !== "General" && allCategories.includes(category)) {
    baseFiltered = baseFiltered.filter((p) => p.category === category)
  }

  // Apply user filter (type/category)
  let filteredProducts = baseFiltered.filter(
    (p) =>
      (selectedType === "All" || p.type === selectedType) &&
      (selectedCategory === "All" || p.category === selectedCategory)
  )

  // Randomize final list if flag is true
  if (randomize) {
    filteredProducts = [...filteredProducts].sort(() => Math.random() - 0.5)
  }

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts

  return (
    <div>
      {showFilters && categoryIsValid && (
        <div className="sticky top-16 bg-white z-10 py-4 space-y-4">
          <div className="flex flex-wrap justify-center gap-3">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => {
                  setSelectedType(type)
                  setSelectedCategory("All")
                }}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition flex items-center gap-1 ${
                  selectedType === type
                    ? "bg-[#133162] text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {typeIcons[type] || null}
                {type}
              </button>
            ))}
          </div>

          {selectedType !== "All" && (
            <div className="flex flex-wrap justify-center gap-3">
              {["All", ...Array.from(new Set(baseFiltered.map((p) => p.category)))].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                    selectedCategory === cat
                      ? "bg-[#133162] text-white"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="text-center">
            <button
              onClick={() => {
                setSelectedType("All")
                setSelectedCategory("All")
              }}
              className="text-sm text-gray-600 underline hover:text-gray-900 transition"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {displayedProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
  })

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
      <div className="relative">
        <div ref={sliderRef} className="keen-slider h-64">
          {[product.image_1, product.image_2].map((src, i) => (
            <div key={i} className="keen-slider__slide flex justify-center items-center">
              <Image
                src={src}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-white p-1 rounded-full shadow hover:bg-gray-200 transition z-10"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-200 transition z-10"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
        <Link href={product.link} target="_blank">
          <button className="bg-[#FF9900] hover:bg-[#f08804] text-white font-semibold py-2 px-4 rounded-md w-full flex items-center justify-center gap-2 transition-colors duration-200">
            <ShoppingCart className="w-4 h-4" />
            Buy on Amazon
          </button>
        </Link>
      </div>
    </div>
  )
}
