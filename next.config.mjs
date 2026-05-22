/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Esto le dice a Next.js que cree archivos web normales (.html)
  basePath: '/v0-flotime-landing-page', // <--- Obligatorio: Debe ser el nombre exacto de tu repositorio de GitHub
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig;