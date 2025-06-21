export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-8 text-center">Privacy Policy</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Anime Facts 101 respects your privacy. This website uses cookies and third-party services, including
                Google AdSense, to serve relevant advertisements and track performance.
              </p>

              <p>
                By using this website, you agree to the collection of anonymous data such as browser type, location
                (non-specific), and device information for analytics and ad-serving purposes.
              </p>

              <p>
                We do not collect personal information unless explicitly provided by the user (e.g. contact forms or
                email subscriptions).
              </p>

              <p>
                Ads shown on this site may use cookies to personalize your experience based on past visits to this or
                other sites.
              </p>

              <p>
                For more details about how Google handles your data, please review{" "}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f43d01] hover:text-[#d63401] underline"
                >
                  Google's Privacy & Terms
                </a>
                .
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}