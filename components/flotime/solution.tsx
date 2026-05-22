"use client"

import { useEffect, useRef } from "react"
import { Monitor, Layers, List, Bell, CheckSquare, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Registro del vehiculo",
    description: "El conductor registra su placa desde la app o portal web antes de llegar al centro.",
    icon: Monitor,
  },
  {
    number: "02",
    title: "Asignacion automatica",
    description: "El sistema analiza la carga de trabajo y asigna el turno optimo en segundos.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Fila virtual",
    description: "Los vehiculos se ubican en una cola digital, sin necesidad de esperar fisicamente.",
    icon: List,
  },
  {
    number: "04",
    title: "Notificaciones en tiempo real",
    description: "El conductor recibe alertas de su turno, muelle asignado y tiempo estimado.",
    icon: Bell,
  },
  {
    number: "05",
    title: "Ingreso organizado",
    description: "Solo los vehiculos con turno activo acceden al patio, eliminando la congestion.",
    icon: CheckSquare,
  },
  {
    number: "06",
    title: "Descarga eficiente",
    description: "Con el muelle preparado y el tiempo optimizado, la descarga se ejecuta sin fricciones.",
    icon: CheckCircle,
  },
]

export function Solution() {
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
      id="solucion"
      className="py-24 lg:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="reveal inline-flex items-center gap-2 mb-4">
          <span className="w-5 h-0.5 bg-carbon" />
          <span className="text-xs font-bold uppercase tracking-widest text-carbon">
            La solucion
          </span>
        </div>
        <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-display)] text-foreground leading-tight mb-4">
          Un flujo inteligente,
          <br />
          paso a paso.
        </h2>
        <p className="reveal text-foreground-muted text-lg max-w-xl mb-14 leading-relaxed">
          FLOTIME reemplaza el desorden por un proceso estructurado, automatizado y transparente para todos los involucrados.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="reveal group p-7 bg-carbon/5 border border-carbon/10 rounded-2xl hover:border-carbon/25 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carbon/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Step Number */}
              <div className="text-6xl font-extrabold text-carbon/10 font-[family-name:var(--font-display)] leading-none mb-4 group-hover:text-carbon/20 transition-colors duration-300">
                {step.number}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {step.description}
              </p>
              
              {/* Icon */}
              <div className="absolute bottom-5 right-5 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <step.icon className="w-9 h-9 text-carbon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
