// scripts/generate-sitemap.js
const fs = require('fs')
const path = require('path')
const facts = require('../public/facts.json')
const reels = require('../public/facebook-reels.json')
const articles = require('../public/articles.json')

const BASE_URL = 'https://animefacts101.com'
const FACTS_PER_PAGE = 9
const REELS_PER_PAGE = 10
const ARTICLES_PER_PAGE = 9

const totalFactPages = Math.ceil(facts.length / FACTS_PER_PAGE)
const totalReelPages = Math.ceil(reels.length / REELS_PER_PAGE)
const totalArticlePages = Math.ceil(articles.length / ARTICLES_PER_PAGE)

function generateSitemap() {
  let urls = [
    `<url>
      <loc>${BASE_URL}/</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>`,
    `<url>
      <loc>${BASE_URL}/shop</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`,
    `<url>
      <loc>${BASE_URL}/about</loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>`,
    `<url>
      <loc>${BASE_URL}/privacy-policy</loc>
      <changefreq>yearly</changefreq>
      <priority>0.3</priority>
    </url>`,
    `<url>
      <loc>${BASE_URL}/terms-of-service</loc>
      <changefreq>yearly</changefreq>
      <priority>0.3</priority>
    </url>`,
    `<url>
      <loc>${BASE_URL}/contact-us</loc>
      <changefreq>yearly</changefreq>
      <priority>0.3</priority>
    </url>`
  ]

  // Paginated fact pages
  for (let i = 1; i <= totalFactPages; i++) {
    urls.push(`
    <url>
      <loc>${BASE_URL}/page/${i}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`)
  }

  // Paginated reel pages
  for (let i = 1; i <= totalReelPages; i++) {
    urls.push(`
    <url>
      <loc>${BASE_URL}/reels-page/${i}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
    </url>`)
  }

  // Paginated article pages
  for (let i = 1; i <= totalArticlePages; i++) {
    urls.push(`
    <url>
      <loc>${BASE_URL}/articles-page/${i}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`)
  }

  // Individual fact pages
  for (const fact of facts) {
    urls.push(`
    <url>
      <loc>${BASE_URL}/fact/${fact.id}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`)
  }

  // Individual article pages
  for (const article of articles) {
    urls.push(`
    <url>
      <loc>${BASE_URL}/articles/${article.id}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`)
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap.trim())
  console.log(`✅ Sitemap generated with ${urls.length} URLs`)
}

generateSitemap()
