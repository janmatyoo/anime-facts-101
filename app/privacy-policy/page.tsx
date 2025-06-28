import AdBanner from "../components/ad-banner"

export const metadata = {
  title: "Privacy Policy - Anime Facts 101",
  description:
    "Learn how Anime Facts 101 handles your data, uses cookies, and works with third-party services like Google AdSense.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-8 text-center">Privacy Policy</h1>

          {/* Top Ad */}
          {/* <div className="mb-8">
            <AdBanner />
          </div> */}

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-lg text-gray-700 leading-relaxed space-y-8">
              <section>
                <p>
                  <strong>Anime Facts 101</strong> respects your privacy. This website uses cookies and third-party services such as
                  Google AdSense to deliver relevant ads, measure site performance, and improve user experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">What We Collect</h2>
                <p>By using this site, you agree to the collection of non-personal data, including:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>General location (non-specific)</li>
                  <li>Browsing behavior (via cookies)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">How We Use This Data</h2>
                <p>
                  We use this data to optimize content delivery, measure engagement, and provide more relevant ads.
                  This helps support the growth of Anime Facts 101 while keeping the content free for everyone.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">Personal Information</h2>
                <p>
                  We do <strong>not</strong> collect any personally identifiable information unless you explicitly
                  provide it to us, such as when contacting us via email.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">Third-Party Services</h2>
                <p>
                  This site displays ads through Google AdSense, which may use cookies to personalize your ad experience.
                  Additionally, we embed YouTube videos, which may collect user data under YouTube/Google's privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">External Policies</h2>
                <p>
                  To understand how Google handles your data and cookies, read{" "}
                  <a
                    href="https://policies.google.com/technologies/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f43d01] hover:text-[#d63401] underline"
                  >
                    Google’s Privacy & Terms
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">Contact Us</h2>
                <p>
                  📩 For any privacy-related concerns, email us at{" "}
                  <a
                    href="mailto:animefacts101.business@gmail.com"
                    className="underline hover:text-[#f43d01]"
                  >
                    animefacts101.business@gmail.com
                  </a>
                </p>
              </section>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="mb-1">
          <AdBanner />
        </div>
      </div>
    </main>
  )
}
