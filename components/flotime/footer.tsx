import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Phone, Mail } from "lucide-react"

const platformLinks = [
  { href: "#solucion", label: "Como funciona" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#planes", label: "Planes y precios" },
]

const resourceLinks = [
  { href: "#", label: "Centro de ayuda" },
  { href: "#", label: "Documentacion API" },
  { href: "#", label: "Estado del sistema" },
  { href: "#", label: "Blog" },
]

export function Footer() {
  return (
    <footer className="bg-background-dark border-t border-carbon/20 py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-carbon/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#hero" className="inline-block mb-5">
              <Image
                src="/images/flotime-logo.png"
                alt="FLOTIME - Logistica Inteligente"
                width={140}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-foreground-muted leading-relaxed mb-6 max-w-xs">
              Transformamos el caos logistico en eficiencia inteligente. Tecnologia para centros de distribucion modernos.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/contactoflotime"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-carbon/10 border border-carbon/20 rounded-lg flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-carbon/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-carbon/10 border border-carbon/20 rounded-lg flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-carbon/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/573222445289"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-carbon/10 border border-carbon/20 rounded-lg flex items-center justify-center text-foreground-muted hover:text-success hover:border-success/40 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-5">
              Plataforma
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-5">
              Recursos
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-5">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:contactoflotime@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                contactoflotime@gmail.com
              </a>
              <a
                href="https://wa.me/573222445289"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-success transition-colors"
              >
                <Phone className="w-4 h-4" />
                +57 322 2445289
              </a>
              <a
                href="https://instagram.com/contactoflotime"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @contactoflotime
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-foreground-muted">
          <p>&copy; {new Date().getFullYear()} FLOTIME. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Terminos de uso
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
