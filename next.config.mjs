/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optional: only include if you're using serverActions
  experimental: {
    serverActions: {}, // ✅ correct format
  },
}

export default nextConfig
