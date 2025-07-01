import AdBanner from "../components/ad-banner"

export const metadata = {
  title: "Privacy Policy - Anime Facts 101",
  description:
    "Learn how Anime Facts 101 handles your data, uses cookies, and works with third-party services like Google AdSense and affiliate platforms.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-8 text-center">Privacy Policy</h1>

          {/* <div className="mb-8">
            <AdBanner />
          </div> */}

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-lg text-gray-700 leading-relaxed space-y-8">
              <section>
                <p>
                  <strong>Anime Facts 101</strong> respects your privacy. This website uses cookies and third-party services such as
                  Google AdSense and Amazon Affiliates to deliver relevant ads, track performance, and improve user experience.
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
                  <li>Clicks on affiliate/product links</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">How We Use This Data</h2>
                <p>
                  We use this data to optimize content delivery, measure engagement, and provide more relevant ads or product suggestions.
                  This helps support the growth of Anime Facts 101 while keeping content free for visitors.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">Affiliate Links Disclosure</h2>
                <p>
                  Some pages, including those under our Shop section, may contain affiliate links (such as Amazon).
                  If you click these links and make a purchase, we may earn a small commission at no additional cost to you.
                  These earnings help maintain the site and support our content creation efforts.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">Personal Information</h2>
                <p>
                  We do <strong>not</strong> collect personally identifiable information unless you explicitly
                  provide it, such as through direct contact via email or future forms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">Third-Party Services</h2>
                <p>
                  This site uses third-party platforms including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    <strong>Google AdSense</strong>: to show personalized ads
                  </li>
                  <li>
                    <strong>Amazon Affiliates</strong>: to link to anime-related products
                  </li>
                  <li>
                    <strong>YouTube Embeds</strong>: for video content
                  </li>
                  <li>
                    <strong>Supabase</strong>: may be used for admin data and content management
                  </li>
                </ul>
                <p>
                  These services may collect their own data in accordance with their respective privacy policies.
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
                  . For affiliate services like Amazon, see{" "}
                  <a
                    href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f43d01] hover:text-[#d63401] underline"
                  >
                    Amazon’s Privacy Notice
                  </a>.
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
