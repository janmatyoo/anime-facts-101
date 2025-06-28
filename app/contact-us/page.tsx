import AdBanner from "../components/ad-banner"

export const metadata = {
  title: "Contact Anime Facts 101 | Reach Out for Questions, Feedback, or Collaborations",
  description:
    "Get in touch with the Anime Facts 101 team. Contact us via email or social media for feedback, suggestions, or partnership opportunities.",
}

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white py-16 overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-[#133162] mb-8 text-center">
                    Contact Anime Facts 101
                </h1>

                {/* Top Ad */}
                {/* <AdBanner /> */}

                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                    <div className="text-lg text-gray-700 leading-relaxed space-y-8">
                    <section>
                        <p>
                        Thank you for visiting <strong>Anime Facts 101</strong>, your hub for anime trivia, character insights, and fan knowledge. We value your thoughts and invite you to connect with us anytime.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[#133162] mb-2">📧 Email Us</h2>
                        <p>
                        For general inquiries, content suggestions, advertising partnerships, or feedback, feel free to reach out by email:
                        </p>
                        <p>
                        <a
                            href="mailto:animefacts101.business@gmail.com"
                            className="underline hover:text-[#f43d01]"
                        >
                            animefacts101.business@gmail.com
                        </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[#133162] mb-2">📱 Connect on Social Media</h2>
                        <p className="mb-4">
                        You can also message us or follow our updates through these official social media accounts:
                        </p>
                        <div className="flex gap-6 flex-wrap items-center">
                            {/* Facebook */}
                            <a
                                href="https://facebook.com/animefacts101"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Anime Facts 101 on Facebook"
                                className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://youtube.com/@animefact101"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Anime Facts 101 on YouTube"
                                className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M23.498 6.186a2.996 2.996 0 0 0-2.112-2.115C19.598 3.5 12 3.5 12 3.5s-7.598 0-9.386.571a2.996 2.996 0 0 0-2.112 2.115A29.948 29.948 0 0 0 0 12c0 2.063.236 4.084.502 5.814a2.996 2.996 0 0 0 2.112 2.115C4.402 20.5 12 20.5 12 20.5s7.598 0 9.386-.571a2.996 2.996 0 0 0 2.112-2.115A29.95 29.95 0 0 0 24 12a29.95 29.95 0 0 0-.502-5.814zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" />
                                </svg>
                            </a>

                            {/* TikTok */}
                            <a
                                href="https://www.tiktok.com/@animefacts.101"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Anime Facts 101 on TikTok"
                                className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 256 256" className="w-5 h-5">
                                <path d="M224,72a72.1,72.1,0,0,1-48-18.1V160a64,64,0,1,1-64-64,8,8,0,0,1,0,16,48,48,0,1,0,48,48V24a8,8,0,0,1,13.7-5.7A56.1,56.1,0,0,0,224,56a8,8,0,0,1,0,16Z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/animefact101"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Anime Facts 101 on Instagram"
                                className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.5 2a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
                                </svg>
                            </a>
                            </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[#133162] mb-2">💬 Submit Feedback or Suggestions</h2>
                        <p>
                        Your feedback makes Anime Facts 101 better. If you have ideas for new features, pages, or anime facts you'd love to see, drop us a line. We welcome collaboration opportunities with creators, bloggers, and anime communities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[#133162] mb-2">🛡️ Transparency & Trust</h2>
                        <p>
                        We are committed to maintaining a safe and respectful environment for all users. You can also read our{" "}
                        <a href="/privacy-policy" className="underline text-[#f43d01] hover:text-[#d63401]">Privacy Policy</a>{" "}
                        and{" "}
                        <a href="/terms-of-service" className="underline text-[#f43d01] hover:text-[#d63401]">Terms of Service</a>{" "}
                        for more information on how we operate and protect your data.
                        </p>
                    </section>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                        Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="mt-4">
                <AdBanner />
            </div>
        </div>
      </div>
    </main>
  )
}
