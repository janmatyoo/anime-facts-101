// scripts/generate-sitemap.js
const fs = require('fs')
const path = require('path')
const facts = require('../public/facts.json')

const BASE_URL = 'https://animefacts101.com'
const FACTS_PER_PAGE = 6
const totalPages = Math.ceil(facts.length / FACTS_PER_PAGE)

function generateSitemap() {
  let urls = [
    `<url>
      <loc>${BASE_URL}/</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>`,
    `<url>
      <loc>${BASE_URL}/facebook-reels</loc>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
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
    </url>`
  ]

  // Add paginated pages
  for (let i = 1; i <= totalPages; i++) {
    urls.push(`
    <url>
      <loc>${BASE_URL}/page/${i}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`)
  }

  // Add individual fact pages
  for (const fact of facts) {
    urls.push(`
    <url>
      <loc>${BASE_URL}/fact/${fact.id}</loc>
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
