'use client'

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import articles from '../../../public/articles.json'
import AdBanner from "../../components/ad-banner"
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const categoryColors: Record<string, string> = {
  'News': 'bg-blue-100 text-blue-800',
  'Trivia': 'bg-green-100 text-green-800',
  'Behind the Scenes': 'bg-yellow-100 text-yellow-800',
  'Lore': 'bg-purple-100 text-purple-800',
  'Lists & Rankings': 'bg-pink-100 text-pink-800',
  'Culture & History': 'bg-indigo-100 text-indigo-800',
  'Fan Theories': 'bg-red-100 text-red-800',
  'Character Analysis': 'bg-teal-100 text-teal-800',
  'Movies': 'bg-orange-100 text-orange-800',
  'All': 'bg-gray-100 text-gray-800',
}

export default function ArticleDetailPage() {
  const { id } = useParams()
  const [article, setArticle] = useState<any | null>(null)
  const [related, setRelated] = useState<any[]>([])

  useEffect(() => {
    if (typeof id !== 'string') return

    const found = articles.find((a) => a.id === id)
    if (!found) {
        notFound()
    } else {
        setArticle(found)

        // Scroll to top when new article is loaded
        window.scrollTo({ top: 0, behavior: 'smooth' })

        // See More articles
        const relatedArticles = articles
        .filter((a) => a.id !== found.id)
        .filter(
            (a) =>
            a.category === found.category
        )

        const remaining = articles
        .filter((a) => a.id !== found.id && !relatedArticles.includes(a))
        .sort(() => Math.random() - 0.5)

        const combined = [...relatedArticles, ...remaining].slice(0, 3)
        setRelated(combined)
    }
    }, [id])


  if (!article) return null

  return (
    <>
      <Head>
        <title>{article.title} | Anime Facts 101</title>
        <meta
          name="description"
          content={article.details?.[0]?.details.slice(0, 160)}
        />
        <link
          rel="canonical"
          href={`https://animefacts101.com/articles/${article.id}`}
        />
      </Head>

      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 text-black">
        <div className="max-w-3xl mx-auto">
            <div
            className={`text-xs font-medium inline-block px-2 py-1 rounded-full mb-2 ${
                categoryColors[article.category] || 'bg-gray-100 text-gray-800'
            }`}
            >
            {article.category}
            </div>
            <h1 className="text-3xl font-bold mb-2 text-[#133162]">{article.title}</h1>
            <div className="text-xs text-gray-400 mb-4">
                {article.date_created} · {article.read_duration} min read
            </div>
            <p className="text-gray-800 leading-relaxed text-lg mb-10">
                {article.overview}
            </p>
            {/* <Image
                src={article.card_thumbnail}
                alt={article.title}
                width={800}
                height={400}
                className="rounded-xl mb-6 w-full object-cover"
            /> */}

            <div className="space-y-8">
                {article.details.map((section: any, index: number) => (
                <div key={index}>
                    <h2 className="text-3xl font-semibold mb-5 text-[#133162]">
                    {section.header_title}
                    </h2>

                    {/* ✅ Show the image if available */}
                    {section.image && (
                        <Image
                            src={section.image}
                            alt={section.header_title}
                            width={800}
                            height={400}
                            className="rounded-lg mb-4 w-full object-cover"
                        />
                    )}

                    <p className="text-gray-800 leading-relaxed text-lg mb-10">
                        {section.details.split('\n\n').map((para, i) => (
                        <p key={i} className="mb-4">{para}</p>
                        ))}
                    </p>
                </div>
                ))}
            </div>
        </div>

        <div className="mt-5 mb-5">
            <AdBanner />
        </div>

        {/* See More Articles */}
        {related.length > 0 && (
          <div className="max-w-7xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-[#133162] mb-6 px-4">See More Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {related.map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  className="border rounded-xl shadow hover:shadow-lg transition-all p-4 bg-white flex flex-col h-full"
                >
                  <Link href={`/articles/${relatedArticle.id}`} className="block">
                    <div
                        className={`text-xs font-medium inline-block px-2 py-1 rounded-full mb-2 ${
                            categoryColors[relatedArticle.category] || 'bg-gray-100 text-gray-800'
                        }`}
                        >
                        {relatedArticle.category}
                        </div>
                    <Image
                      src={relatedArticle.card_thumbnail}
                      alt={relatedArticle.title}
                      width={600}
                      height={300}
                      className="rounded-lg mb-4 object-cover w-full h-48"
                    />
                    <h2 className="text-xl font-semibold mb-2">{relatedArticle.title}</h2>
                  </Link>

                  <div className="text-xs text-gray-400 mt-auto">
                    {relatedArticle.date_created} · {relatedArticle.read_duration} min read
                  </div>

                  <div className="pt-4">
                    <Link href={`/articles/${relatedArticle.id}`}>
                      <span className="btn-primary text-xs px-2 py-1 inline-block">Read More →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
