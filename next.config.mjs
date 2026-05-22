/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/v0-flotime-landing-page',
  assetPrefix: '/v0-flotime-landing-page', // <--- Cambiado sin la barra final
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
