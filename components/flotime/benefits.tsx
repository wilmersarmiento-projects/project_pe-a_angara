"use client"

import { useEffect, useRef, useState } from "react"

const tabs = [
  { id: "empresas", label: "Empresas" },
  { id: "conductores", label: "Conductores" },
  { id: "centros", label: "Centros Logisticos" },
]

const benefits = {
  empresas: [
    { icon: "chart-down", title: "Reduccion de costos", description: "Menos horas improductivas se traducen directamente en ahorro operativo medible desde el primer mes." },
    { icon: "chart-bar", title: "Control operativo total", description: "Visualiza el estado de cada muelle, vehiculo y turno en tiempo real desde un solo panel." },
    { icon: "cog", title: "Automatizacion de procesos", description: "El sistema asigna, notifica y registra sin intervencion humana." },
    { icon: "chart-up", title: "Analitica avanzada", description: "Reportes historicos, KPIs personalizados y proyecciones para tomar mejores decisiones." },
  ],
  conductores: [
    { icon: "clock", title: "Menos espera", description: "Recibe tu turno antes de llegar y sabe exactamente cuando debes estar en el muelle." },
    { icon: "phone", title: "Informacion en tu celular", description: "Notificaciones push, SMS o WhatsApp con el estado de tu turno en tiempo real." },
    { icon: "compass", title: "Claridad total", description: "Sin confusiones. La fila es justa, digital y transparente." },
    { icon: "smile", title: "Menos estres", description: "Aprovecha el tiempo de espera fuera del centro. Tu decides donde estar." },
  ],
  centros: [
    { icon: "traffic", title: "Flujo vehicular ordenado", description: "Solo ingresan los vehiculos con turno activo asignado." },
    { icon: "factory", title: "Muelles siempre activos", description: "Minimiza el tiempo entre descargas con transiciones automaticas entre turnos." },
    { icon: "bell", title: "Alertas inteligentes", description: "El sistema detecta demoras y anomalias y notifica al operador al instante." },
    { icon: "link", title: "Integracion con tus sistemas", description: "API disponible para conectar con ERPs, WMS y otras plataformas logisticas." },
  ],
}

export function Benefits() {
  const [activeTab, setActiveTab] = useState("empresas")
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

  const currentBenefits = benefits[activeTab as keyof typeof benefits]

  return (
    <section
      ref={sectionRef}
      id="beneficios"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="reveal inline-flex items-center gap-2 mb-4">
          <span className="w-5 h-0.5 bg-carbon" />
          <span className="text-xs font-bold uppercase tracking-widest text-carbon">
            Beneficios
          </span>
        </div>
        <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-display)] text-foreground leading-tight mb-8">
          Disenado para todos
          <br />
          los actores del proceso.
        </h2>

        {/* Tabs */}
        <div className="reveal inline-flex bg-carbon/5 border border-carbon/10 rounded-xl p-1 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-carbon text-background"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentBenefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="reveal group p-7 bg-carbon/5 border border-carbon/10 rounded-2xl hover:border-carbon/25 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-carbon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-5">
                  {benefit.icon === "chart-down" && "📉"}
                  {benefit.icon === "chart-bar" && "📊"}
                  {benefit.icon === "cog" && "⚙️"}
                  {benefit.icon === "chart-up" && "📈"}
                  {benefit.icon === "clock" && "🕐"}
                  {benefit.icon === "phone" && "📱"}
                  {benefit.icon === "compass" && "🧭"}
                  {benefit.icon === "smile" && "😌"}
                  {benefit.icon === "traffic" && "🚦"}
                  {benefit.icon === "factory" && "🏭"}
                  {benefit.icon === "bell" && "🔔"}
                  {benefit.icon === "link" && "🔗"}
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
