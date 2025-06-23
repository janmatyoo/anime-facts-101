export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#133162] mb-8 text-center">Privacy Policy</h1>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                <strong>Anime Facts 101</strong> respects your privacy. This website uses cookies and third-party services —
                including Google AdSense — to show relevant ads and monitor performance.
              </p>

              <p>
                By using this website, you agree to the collection of non-personally identifiable data such as:
              </p>

              <ul>
                <li>Browser type</li>
                <li>General location (non-specific)</li>
                <li>Device information</li>
                <li>Browsing behavior (via cookies)</li>
              </ul>

              <p>
                This information helps us improve content, user experience, and deliver more relevant ads.
              </p>

              <p>
                We do <strong>not</strong> collect personal information unless explicitly provided by you (e.g. via email).
              </p>

              <p>
                Ads on this site may use cookies to personalize your experience based on your previous visits to this or other websites.
              </p>

              <p>
                For more details on how Google handles your data, please visit{" "}
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

              <p>
                📩 For questions or concerns, contact us at{" "}
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
    </div>
  )
}
