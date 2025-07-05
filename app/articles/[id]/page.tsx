import { notFound } from 'next/navigation'
import articles from '../../../public/articles.json'
import AdBanner from '../../components/ad-banner'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import categoryColors from '../../lib/categoryColors'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const article = articles.find((a) => a.id === id)
  if (!article) return {}

  const description = article.details?.[0]?.details.slice(0, 160) || article.overview

  return {
    title: `${article.title} | Anime Facts 101`,
    description,
    openGraph: {
      title: `${article.title} | Anime Facts 101`,
      description,
      url: `https://animefacts101.com/articles/${article.id}`,
      siteName: 'Anime Facts 101',
      type: 'article',
      images: [
        {
          url: article.card_thumbnail,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Anime Facts 101`,
      description,
      images: [article.card_thumbnail],
    },
  }
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = articles.find((a) => a.id === id)
  if (!article) return notFound()

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .concat(
      articles.filter((a) => a.id !== article.id && a.category !== article.category)
        .sort(() => Math.random() - 0.5)
    )
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto">
            <div className={`text-xs font-medium inline-block px-2 py-1 rounded-full mb-2 ${
              categoryColors[article.category] || 'bg-gray-100 text-gray-800'
            }`}>
              {article.category}
            </div>

            <h1 className="text-3xl font-bold mb-2 text-[#133162]">{article.title}</h1>
            <div className="text-xs text-gray-400 mb-4">
              {article.date_created} · {article.read_duration} min read
            </div>
            <p className="text-gray-800 leading-relaxed text-lg mb-10">{article.overview}</p>

            <div className="space-y-8">
              {article.details.map((section, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-semibold mb-5 text-[#133162]">{section.header_title}</h2>

                  {section.image && (
                    <div className="relative w-full aspect-[2/1] mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.header_title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                      />
                    </div>
                  )}

                  <div className="text-gray-800 leading-relaxed text-lg mb-10">
                    {section.details.split('\n\n').map((para: string, i: number) => (
                      <p key={i} className="mb-4">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <div className="my-10">
          <AdBanner />
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 mb-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-[#133162] mb-6">See More Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <div
                    key={related.id}
                    className="border rounded-xl shadow hover:shadow-lg transition-all p-4 bg-white flex flex-col h-full"
                  >
                    <Link href={`/articles/${related.id}`} className="block">
                      <div className={`text-xs font-medium inline-block px-2 py-1 rounded-full mb-2 ${
                        categoryColors[related.category] || 'bg-gray-100 text-gray-800'
                      }`}>
                        {related.category}
                      </div>

                      <div className="relative w-full aspect-[2/1] mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={related.card_thumbnail}
                          alt={related.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                          priority
                        />
                      </div>

                      <h2 className="text-xl font-semibold mb-2">{related.title}</h2>
                    </Link>

                    <div className="text-xs text-gray-400 mt-auto">
                      {related.date_created} · {related.read_duration} min read
                    </div>

                    <div className="pt-4">
                      <Link href={`/articles/${related.id}`}>
                        <span className="btn-primary text-xs px-2 py-1 inline-block">Read More →</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
