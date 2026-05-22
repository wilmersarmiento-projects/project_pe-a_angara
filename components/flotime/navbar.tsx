"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#problema", label: "Problema" },
  { href: "#solucion", label: "Solucion" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#planes", label: "Planes" },
  { href: "#demo", label: "Contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass py-3 shadow-lg border-b border-border"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link href="#hero" className="flex items-center">
            <Image
              src="/images/flotime-logo.png"
              alt="FLOTIME - Logistica Inteligente"
              width={140}
              height={45}
              className="h-9 w-auto md:h-10"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-carbon text-background rounded-lg font-semibold text-sm hover:bg-carbon-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Solicitar Demo
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 glass-dark transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-background transition-colors font-[family-name:var(--font-display)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#demo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 px-8 py-4 bg-background text-carbon rounded-lg font-bold text-lg hover:bg-background-alt transition-colors"
          >
            Solicitar Demo
          </Link>
        </nav>
      </div>
    </>
  )
}
