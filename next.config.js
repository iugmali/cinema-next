/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: 'https://image.tmdb.org/t/p/w500'
  }
}

module.exports = nextConfig
