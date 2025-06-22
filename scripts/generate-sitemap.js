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
    </url>`
  ]

  for (let i = 1; i <= totalPages; i++) {
    urls.push(`
    <url>
      <loc>${BASE_URL}/page/${i}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`)
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap.trim())
  console.log(`✅ Sitemap generated with ${totalPages} pages`)
}

generateSitemap()
