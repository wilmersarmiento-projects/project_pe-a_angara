/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/project_pe-a_angara',
  assetPrefix: '/project_pe-a_angara/', // <--- Asegúrate de que tenga la barra final /
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
