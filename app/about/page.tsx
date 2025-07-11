export const metadata = {
  title: "About Anime Facts 101",
  description:
    "Learn what Anime Facts 101 is all about. Discover our mission to share accurate and fun anime trivia every day.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-16 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-8">About Anime Facts 101</h1>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-lg text-gray-700 leading-relaxed space-y-10">

                <div>
                  <h2 className="text-2xl font-semibold text-[#133162] mb-4">Our Mission</h2>
                  <p>
                    Anime Facts 101 is your go-to source for surprising, bite-sized anime trivia. From iconic scenes to
                    hidden creator insights, our goal is to feed your curiosity and celebrate anime fandom through daily
                    discoveries.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-[#133162] mb-4">From Facebook to the Web</h2>
                  <p>
                    Originally a viral Facebook page, we're now expanding to bring anime knowledge to even more fans
                    across the web. Whether you're a seasoned otaku or just getting started with anime, our carefully
                    curated facts will give you new perspectives on the shows and characters you love.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-[#133162] mb-4">Why Accuracy Matters</h2>
                  <p>
                    Every fact is researched and verified to ensure accuracy, because we believe that learning about anime
                    should be both fun and reliable. Join our community of anime enthusiasts and discover something new
                    every day!
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-[#133162] mb-4">Contact Us</h2>
                  <p className="text-gray-600">
                    Got questions, suggestions, or partnership ideas? Reach out to us anytime!
                  </p>
                  <p className="text-gray-600">
                    📩 Email:{" "}
                    <a
                      href="mailto:animefacts101.business@gmail.com"
                      className="underline hover:text-[#f43d01]"
                    >
                      animefacts101.business@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 space-y-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center">
                    <img
                      src="/logo-circle.png"
                      alt="Anime Facts 101 official logo in circle design"
                      loading="lazy"
                      className="w-[100px] sm:w-[150px] md:w-[200px] h-auto"
                    />
                  </div>
                </div>
                <p className="text-center text-gray-600">Spreading anime knowledge, one fact at a time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
