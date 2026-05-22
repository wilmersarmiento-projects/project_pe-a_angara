"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ArrowRight, Instagram, Mail, Phone } from "lucide-react"

const trustItems = [
  "Demo gratuita, sin tarjeta de credito",
  "Configuracion adaptada a tu operacion",
  "Respuesta en menos de 24 horas",
]

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible")
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    setTimeout(() => {
      setFormState("success")
    }, 1500)
  }

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info Side */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-0.5 bg-carbon" />
              <span className="text-xs font-bold uppercase tracking-widest text-carbon">
                Solicitar demo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-display)] text-foreground leading-tight mb-4">
              Agenda una demostracion
              <br />
              sin compromiso.
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              Nuestro equipo te muestra como FLOTIME puede transformar tu operacion logistica en menos de 30 minutos.
            </p>

            {/* Trust Items */}
            <div className="space-y-4 mb-10">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 text-foreground-muted">
                  <div className="w-5 h-5 bg-carbon/10 rounded flex items-center justify-center">
                    <Check className="w-3 h-3 text-carbon" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <a
                href="mailto:contactoflotime@gmail.com"
                className="flex items-center gap-3 text-foreground-muted hover:text-foreground transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm font-semibold">contactoflotime@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/contactoflotime"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground-muted hover:text-foreground transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-semibold">@contactoflotime</span>
              </a>
              <a
                href="https://wa.me/573222445289"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground-muted hover:text-success transition-colors group"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-semibold">+57 322 2445289</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="reveal glass-dark rounded-3xl p-8 lg:p-10 border border-white/10 relative overflow-hidden">
            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/50 to-transparent" />

            {formState === "success" ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white mb-3">
                  Solicitud recibida!
                </h3>
                <p className="text-white/60 mb-8 max-w-sm mx-auto">
                  Te contactaremos en menos de 24 horas para coordinar la demostracion.
                </p>
                <a
                  href="https://wa.me/573222445289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background text-carbon rounded-xl font-bold hover:bg-background-alt transition-colors"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-white mb-8">
                  Agenda tu demo
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Juan Perez"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-background focus:bg-background/5 focus:ring-2 focus:ring-background/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mi Empresa S.A."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-background focus:bg-background/5 focus:ring-2 focus:ring-background/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      Correo corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-background focus:bg-background/5 focus:ring-2 focus:ring-background/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      Telefono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+57 300 000 0000"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-background focus:bg-background/5 focus:ring-2 focus:ring-background/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                    Tipo de operacion
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-background focus:bg-background/5 focus:ring-2 focus:ring-background/20 outline-none transition-all appearance-none cursor-pointer">
                    <option value="">Selecciona tu tipo de operacion</option>
                    <option>Centro de distribucion</option>
                    <option>Bodega privada</option>
                    <option>Puerto / terminal</option>
                    <option>Planta de produccion</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                    Vehiculos promedio por dia
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-background focus:bg-background/5 focus:ring-2 focus:ring-background/20 outline-none transition-all appearance-none cursor-pointer">
                    <option value="">Selecciona un rango</option>
                    <option>Menos de 50</option>
                    <option>50 - 150</option>
                    <option>150 - 500</option>
                    <option>Mas de 500</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                    Algun detalle adicional?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuentanos sobre tu operacion..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:border-background focus:bg-background/5 focus:ring-2 focus:ring-background/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-4 bg-background text-carbon rounded-xl font-bold text-base hover:bg-background-alt transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formState === "submitting" ? (
                    "Enviando..."
                  ) : (
                    <>
                      Solicitar mi demo gratuita
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-white/40 mt-4">
                  Tambien puedes escribirnos a{" "}
                  <a href="mailto:contactoflotime@gmail.com" className="text-background underline">
                    contactoflotime@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
