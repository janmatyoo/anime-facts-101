export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-8">About Anime Facts 101</h1>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Anime Facts 101 is your go-to source for surprising, bite-sized anime trivia. From iconic scenes to
                  hidden creator insights, our goal is to feed your curiosity and celebrate anime fandom through daily
                  discoveries.
                </p>

                <p>
                  Originally a viral Facebook page, we're now expanding to bring anime knowledge to even more fans
                  across the web. Whether you're a seasoned otaku or just getting started with anime, our carefully
                  curated facts will give you new perspectives on the shows and characters you love.
                </p>

                <p>
                  Every fact is researched and verified to ensure accuracy, because we believe that learning about anime
                  should be both fun and reliable. Join our community of anime enthusiasts and discover something new
                  every day!
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-[#133162] rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">AF</span>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-4">Spreading anime knowledge, one fact at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}