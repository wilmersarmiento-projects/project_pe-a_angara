/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/v0-flotime-landing-page',
  assetPrefix: '/v0-flotime-landing-page/', // <--- ¡Esta línea arregla los estilos!
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
