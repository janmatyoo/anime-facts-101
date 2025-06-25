import AdBanner from "../components/ad-banner"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-8 text-center">Terms of Service</h1>

          <div className="mb-2">
            <AdBanner />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                By accessing and using <strong>Anime Facts 101</strong> (https://animefacts101.com), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the website.
              </p>

              <h2 className="text-2xl font-semibold">1. Use of Content</h2>
              <p>
                All facts, summaries, and recommendations on this site are provided for informational and entertainment purposes only. We do not guarantee accuracy, completeness, or timeliness of the content.
              </p>

              <h2 className="text-2xl font-semibold">2. Third-Party Services</h2>
              <p>
                We embed YouTube videos and display ads from third-party services such as Google AdSense. These services may collect data in accordance with their own privacy policies. We do not control or take responsibility for external content or tracking technologies used by these providers.
              </p>

              <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
              <p>
                All original content, including descriptions and formatting, is the property of Anime Facts 101. Anime imagery, video, and names may be trademarks of their respective owners and are used under fair use for commentary, education, and fan-based purposes.
              </p>

              <h2 className="text-2xl font-semibold">4. Limitations of Liability</h2>
              <p>
                Anime Facts 101 is not liable for any loss or damage arising from the use of this site, including inaccuracies, broken links, or third-party content.
              </p>

              <h2 className="text-2xl font-semibold">5. Changes to the Terms</h2>
              <p>
                We reserve the right to update or modify these Terms of Service at any time without prior notice. Continued use of the website after changes indicates your acceptance of the revised terms.
              </p>

              <h2 className="text-2xl font-semibold">6. Contact</h2>
              <p>
                📩 For questions or concerns about these terms, contact us at{" "}
                <a
                  href="mailto:animefacts101.business@gmail.com"
                  className="underline hover:text-[#f43d01]"
                >
                  animefacts101.business@gmail.com
                </a>
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <AdBanner />
      </div>
</div>
  );
}
