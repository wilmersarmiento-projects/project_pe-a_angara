import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: 'FLOTIME - Logistica Inteligente',
  description: 'Transformamos el caos logistico en eficiencia inteligente. Organiza filas de descarga, reduce tiempos muertos y optimiza operaciones logisticas en tiempo real.',
  keywords: ['logistica', 'software', 'SaaS', 'gestion de filas', 'optimizacion', 'transporte'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
