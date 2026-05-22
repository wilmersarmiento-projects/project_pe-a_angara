"use client"

import { useEffect, useRef, useState } from "react"
import { Check, X } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basico",
    monthly: 149,
    yearly: 119,
    description: "Ideal para operaciones pequenas que quieren dar el primer paso hacia la digitalizacion.",
    features: [
      { text: "Hasta 50 vehiculos/dia", available: true },
      { text: "2 muelles configurables", available: true },
      { text: "Notificaciones WhatsApp y SMS", available: true },
      { text: "Panel de control basico", available: true },
      { text: "Soporte por correo", available: true },
      { text: "Analitica avanzada", available: false },
      { text: "Integracion API", available: false },
    ],
  },
  {
    name: "Profesional",
    monthly: 349,
    yearly: 279,
    description: "Para centros en crecimiento que necesitan control total y analitica en tiempo real.",
    featured: true,
    features: [
      { text: "Hasta 300 vehiculos/dia", available: true },
      { text: "Muelles ilimitados", available: true },
      { text: "Notificaciones multicanal", available: true },
      { text: "Dashboard avanzado con KPIs", available: true },
      { text: "Analitica e historial 90 dias", available: true },
      { text: "Soporte prioritario 12/7", available: true },
      { text: "API personalizada", available: false },
    ],
  },
  {
    name: "Enterprise",
    custom: true,
    description: "Solucion personalizada para grandes operaciones con multiples sedes y necesidades especificas.",
    features: [
      { text: "Vehiculos y muelles ilimitados", available: true },
      { text: "Multi-sede centralizado", available: true },
      { text: "Integracion API con ERP/WMS", available: true },
      { text: "Analitica personalizada", available: true },
      { text: "SLA garantizado", available: true },
      { text: "Soporte dedicado 24/7", available: true },
      { text: "Onboarding y capacitacion", available: true },
    ],
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
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

  return (
    <section
      ref={sectionRef}
      id="planes"
      className="py-24 lg:py-32 bg-background-alt"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="reveal inline-flex items-center gap-2 mb-4">
          <span className="w-5 h-0.5 bg-carbon" />
          <span className="text-xs font-bold uppercase tracking-widest text-carbon">
            Planes
          </span>
        </div>
        <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-display)] text-foreground leading-tight mb-4">
          Elige el plan que
          <br />
          se adapta a tu operacion.
        </h2>
        <p className="reveal text-foreground-muted text-lg max-w-xl mb-10 leading-relaxed">
          Sin contratos a largo plazo. Cancela cuando quieras. Todos los planes incluyen soporte en espanol.
        </p>

        {/* Toggle */}
        <div className="reveal flex items-center gap-4 mb-12">
          <span className={`text-sm font-semibold transition-colors ${!isYearly ? "text-foreground" : "text-foreground-muted"}`}>
            Mensual
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 rounded-full transition-colors duration-200 bg-black"
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full transition-all duration-200 ${
                isYearly ? "left-8 bg-background" : "left-1 bg-white"
              }`}
            />
          </button>
          <span className={`text-sm font-semibold transition-colors ${isYearly ? "text-foreground" : "text-foreground-muted"}`}>
            Anual
            <span className="ml-2 px-2 py-0.5 bg-success/20 text-success text-xs font-bold rounded-full border border-success/30">
              -20%
            </span>
          </span>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`reveal p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
                plan.featured
                  ? "bg-gradient-to-b from-carbon/10 to-carbon/5 border-carbon/30 shadow-[0_0_60px_rgba(10,10,10,0.1)]"
                  : "bg-carbon/5 border-carbon/10 hover:border-carbon/25"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-5 right-5 px-3 py-1 bg-carbon text-background text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Mas popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                  {plan.name}
                </span>
                {plan.custom ? (
                  <div className="mt-3">
                    <span className="text-4xl font-extrabold font-[family-name:var(--font-display)] text-foreground">
                      A medida
                    </span>
                  </div>
                ) : (
                  <div className="mt-3 flex items-start gap-1">
                    <span className="text-xl font-bold text-foreground-muted mt-1">$</span>
                    <span className={`text-5xl font-extrabold font-[family-name:var(--font-display)] transition-colors ${
                      plan.featured ? "text-carbon" : "text-foreground"
                    }`}>
                      {isYearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-foreground-muted text-sm mt-2">/mes</span>
                  </div>
                )}
                <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`flex items-start gap-3 text-sm ${
                      feature.available ? "text-foreground-muted" : "text-foreground-muted/40 line-through"
                    }`}
                  >
                    {feature.available ? (
                      <Check className="w-4 h-4 text-carbon flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-foreground-muted/40 flex-shrink-0 mt-0.5" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#demo"
                className={`block w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-200 ${
                  plan.featured
                    ? "bg-carbon text-background hover:bg-carbon-light"
                    : "bg-transparent border-2 border-carbon/30 text-foreground hover:border-carbon hover:bg-carbon/5"
                }`}
              >
                {plan.custom ? "Hablar con ventas" : "Solicitar Demo"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
