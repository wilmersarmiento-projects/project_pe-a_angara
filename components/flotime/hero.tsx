"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Play, ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
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
      id="hero"
      className="min-h-screen relative overflow-hidden bg-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(10, 10, 10, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10, 10, 10, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-carbon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-carbon/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 bg-carbon/10 border border-carbon/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
              <span className="text-xs font-semibold text-foreground tracking-wide">
                Sistema activo - Optimizacion en tiempo real
              </span>
            </div>

            {/* Title */}
            <h1 className="reveal text-4xl md:text-5xl lg:text-6xl font-extrabold font-[family-name:var(--font-display)] leading-[1.05] tracking-tight text-foreground mb-6">
              Transformamos el{" "}
              <span className="relative">
                <span className="text-carbon bg-gradient-to-r from-carbon to-carbon-light bg-clip-text">
                  caos logistico
                </span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-carbon/10 -z-10 rounded" />
              </span>{" "}
              en eficiencia inteligente.
            </h1>

            {/* Subtitle */}
            <p className="reveal text-lg text-foreground-muted leading-relaxed max-w-xl mb-8">
              Organiza filas de descarga, reduce tiempos muertos y optimiza
              operaciones logisticas en tiempo real desde una sola plataforma.
            </p>

            {/* Actions */}
            <div className="reveal flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-carbon text-background rounded-xl font-bold text-base hover:bg-carbon-light transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <Play className="w-4 h-4" />
                Solicitar Demo
              </Link>
              <Link
                href="#solucion"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent border-2 border-carbon/30 text-foreground rounded-xl font-semibold text-base hover:border-carbon hover:bg-carbon/5 transition-all duration-200"
              >
                Ver como funciona
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Metrics */}
            <div className="reveal flex flex-wrap gap-4">
              {[
                { value: "-68%", label: "Tiempo de espera" },
                { value: "+40%", label: "Eficiencia" },
                { value: "24/7", label: "Monitoreo" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col gap-1 px-5 py-4 bg-carbon/5 border border-carbon/10 rounded-xl hover:border-carbon/25 hover:bg-carbon/10 transition-all duration-200 group"
                >
                  <span className="text-2xl font-extrabold text-carbon font-[family-name:var(--font-display)]">
                    {metric.value}
                  </span>
                  <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="reveal lg:pl-8">
            <div className="glass-dark rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Window Bar */}
              <div className="flex items-center gap-2 px-5 py-3 bg-carbon-lighter/50 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-background" />
                  <span className="w-3 h-3 rounded-full bg-success" />
                </div>
                <span className="ml-3 text-xs text-white/40 font-medium tracking-wider">
                  FLOTIME - Panel Operativo
                </span>
              </div>

              {/* Dashboard Body */}
              <div className="p-5 space-y-4">
                {/* KPIs */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "12", label: "Vehiculos" },
                    { value: "3", label: "Muelles activos", highlight: true },
                    { value: "8 min", label: "Tiempo prom." },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className={`p-4 rounded-lg border ${
                        kpi.highlight
                          ? "border-background/30 bg-background/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <div className={`text-2xl font-bold font-[family-name:var(--font-display)] ${
                        kpi.highlight ? "text-background" : "text-white"
                      }`}>
                        {kpi.value}
                      </div>
                      <div className="text-[10px] text-white/50 uppercase tracking-wider">
                        {kpi.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="flex items-end gap-2 h-16 mb-3">
                    {[55, 80, 40, 95, 70, 60, 85].map((height, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t transition-all duration-1000 ${
                          i === 3
                            ? "bg-gradient-to-t from-background to-background/60"
                            : "bg-white/15 hover:bg-white/25"
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-white/40">
                    Flujo vehicular - ultimas 7 horas
                  </span>
                </div>

                {/* Queue */}
                <div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-3">
                    Cola virtual activa
                  </div>
                  {[
                    { badge: "EN MUELLE", plate: "ABC-123", time: "0 min", active: true },
                    { badge: "TURNO #2", plate: "XYZ-456", time: "~6 min" },
                    { badge: "TURNO #3", plate: "QRS-789", time: "~14 min" },
                  ].map((item) => (
                    <div
                      key={item.plate}
                      className={`flex items-center gap-3 py-3 border-b border-white/5 last:border-0 ${
                        item.active ? "bg-background/5 -mx-2 px-2 rounded" : ""
                      }`}
                    >
                      <span
                        className={`text-[9px] font-bold px-2 py-1 rounded ${
                          item.active
                            ? "bg-success/20 text-success border border-success/30"
                            : "bg-white/10 text-white/50 border border-white/10"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <span className="text-xs text-white/80">Placa {item.plate}</span>
                      <span className="ml-auto text-[10px] text-white/40">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted">
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
