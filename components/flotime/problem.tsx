"use client"

import { useEffect, useRef } from "react"
import { Clock, AlertTriangle, FileText, DollarSign } from "lucide-react"

const stats = [
  { icon: Clock, value: "4.2 h", label: "Promedio de espera diaria por conductor" },
  { icon: DollarSign, value: "$380K", label: "Perdida anual estimada por centro logistico", highlight: true },
  { icon: FileText, value: "73%", label: "De empresas aun gestionan turnos de forma manual" },
  { icon: AlertTriangle, value: "+200", label: "Camiones en cola simultanea en grandes operaciones" },
]

const problems = [
  {
    icon: Clock,
    title: "Largas filas de espera",
    description: "Vehiculos estacionados durante horas sin informacion ni asignacion de turno clara.",
  },
  {
    icon: AlertTriangle,
    title: "Congestion y desorden",
    description: "Sin un sistema centralizado, los patios se saturan y las operaciones colapsan.",
  },
  {
    icon: FileText,
    title: "Procesos manuales",
    description: "Planillas, radio y llamadas para coordinar operaciones que deberian ser automaticas.",
  },
  {
    icon: DollarSign,
    title: "Sobrecostos operativos",
    description: "Cada minuto de espera innecesaria se convierte en dinero perdido para todos los actores.",
  },
]

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("visible")
              }, i * 80)
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
      id="problema"
      className="py-24 lg:py-32 bg-background-alt"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="reveal inline-flex items-center gap-2 mb-4">
          <span className="w-5 h-0.5 bg-carbon" />
          <span className="text-xs font-bold uppercase tracking-widest text-carbon">
            El problema
          </span>
        </div>
        <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-display)] text-foreground leading-tight mb-4">
          La logistica tradicional
          <br />
          cuesta tiempo y dinero.
        </h2>
        <p className="reveal text-foreground-muted text-lg max-w-xl mb-12 leading-relaxed">
          Los centros de distribucion pierden millones cada ano por ineficiencias que hoy tienen solucion tecnologica.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`reveal group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                stat.highlight
                  ? "bg-carbon/10 border-carbon/20"
                  : "bg-carbon/5 border-carbon/10 hover:border-carbon/25"
              }`}
            >
              <div className="text-3xl mb-3">
                <stat.icon className="w-8 h-8 text-carbon" />
              </div>
              <div className="text-4xl font-extrabold text-carbon font-[family-name:var(--font-display)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground-muted leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="reveal group p-6 bg-carbon/5 border border-carbon/10 rounded-2xl hover:border-carbon/25 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-carbon to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-12 h-12 bg-carbon/10 border border-carbon/20 rounded-lg flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-carbon" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
