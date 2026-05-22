"use client"

import { Phone } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573222445289"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-200 group"
      aria-label="Contactar por WhatsApp"
    >
      <Phone className="w-6 h-6 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-carbon text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Escríbenos
      </span>
    </a>
  )
}
