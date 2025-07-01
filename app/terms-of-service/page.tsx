import AdBanner from "../components/ad-banner"

export const metadata = {
  title: "Terms of Service - Anime Facts 101",
  description:
    "Read the official Terms of Service for Anime Facts 101. Learn how you may use our content, interact with third-party services, and what responsibilities apply.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white py-16 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-8 text-center">Terms of Service</h1>

          {/* <div className="mb-8">
            <AdBanner />
          </div> */}

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-lg text-gray-700 leading-relaxed space-y-8">
              <section>
                <p>
                  By accessing and using <strong>Anime Facts 101</strong> (https://animefacts101.com), you agree to be
                  bound by these Terms of Service. If you do not agree with any part of these terms, please do not use
                  the website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">1. Use of Content</h2>
                <p>
                  All facts, summaries, and recommendations on this site are provided for informational and
                  entertainment purposes only. We do not guarantee the accuracy, completeness, or timeliness of the content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">2. Third-Party Services</h2>
                <p>
                  We embed YouTube videos, display ads through Google AdSense, and include affiliate links (e.g., Amazon).
                  These services may collect data in accordance with their own privacy policies. We do not control or take
                  responsibility for external content or tracking technologies used by these providers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">3. Affiliate Disclaimer</h2>
                <p>
                  Some pages on this site, including our Shop section, contain affiliate links. When you click on these links
                  and make a purchase, we may earn a commission at no additional cost to you. We are not responsible for
                  the products, services, availability, delivery, or customer support provided by third-party merchants such as Amazon.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">4. Intellectual Property</h2>
                <p>
                  All original content, including text, structure, and formatting, is the property of Anime Facts 101.
                  Anime imagery, video, and names may be trademarks of their respective owners and are used under fair use
                  for commentary, education, and fan-based purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">5. Limitations of Liability</h2>
                <p>
                  Anime Facts 101 is not liable for any loss or damage resulting from the use of this site, including
                  inaccuracies, broken links, third-party content, or purchases made through external links.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">6. Changes to the Terms</h2>
                <p>
                  We reserve the right to update or modify these Terms of Service at any time without prior notice.
                  Continued use of the website after changes indicates your acceptance of the revised terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#133162] mb-2">7. Contact</h2>
                <p>
                  📩 For questions or concerns about these terms, contact us at{" "}
                  <a
                    href="mailto:animefacts101.business@gmail.com"
                    className="underline hover:text-[#f43d01]"
                  >
                    animefacts101.business@gmail.com
                  </a>
                </p>
              </section>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="mb-2">
          <AdBanner />
        </div>
      </div>
    </main>
  )
}
