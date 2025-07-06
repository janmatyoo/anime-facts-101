import ShopGrid from "../components/shop-grid"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-4">Shop Anime Picks</h1>
          <p className="text-xl text-gray-600">Curated anime goodies you can grab through Amazon!</p>
        </div>

        <ShopGrid showFilters randomize={true}/>

        <p className="text-sm text-gray-400 text-center mt-12 italic">
          As an Amazon Associate, I earn from qualifying purchases.
        </p>
      </div>
    </div>
  )
}
