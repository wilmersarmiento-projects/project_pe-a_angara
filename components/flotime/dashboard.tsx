"use client"

import { useEffect, useRef } from "react"
import { LayoutGrid, Truck, List, BarChart3, Bell, AlertTriangle, CheckCircle } from "lucide-react"

const sidebarItems = [
  { icon: LayoutGrid, label: "Panel", active: true },
  { icon: Truck, label: "Vehiculos" },
  { icon: List, label: "Cola activa" },
  { icon: BarChart3, label: "Metricas" },
  { icon: Bell, label: "Alertas", badge: 3 },
]

const kpis = [
  { label: "Vehiculos en cola", value: "14", delta: "+ +2 ultima hora", up: true },
  { label: "Muelles activos", value: "5 / 8", delta: "62% ocupacion", highlight: true },
  { label: "Tiempo promedio", value: "11 min", delta: "- -3 min vs ayer", down: true },
  { label: "Descargas hoy", value: "87", delta: "+ +12% vs ayer", up: true },
]

const queueItems = [
  { rank: 1, plate: "PBX 341", company: "Logistica Sur S.A.", status: "EN MUELLE", active: true },
  { rank: 2, plate: "KMN 879", company: "Trans Nacional", status: "~4 min" },
  { rank: 3, plate: "LQR 552", company: "Distribuidora Norte", status: "~9 min" },
  { rank: 4, plate: "VTX 210", company: "Cargo Express", status: "~15 min" },
]

export function Dashboard() {
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
      id="dashboard"
      className="py-24 lg:py-32 bg-background-alt overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="reveal inline-flex items-center gap-2 mb-4">
          <span className="w-5 h-0.5 bg-carbon" />
          <span className="text-xs font-bold uppercase tracking-widest text-carbon">
            La plataforma
          </span>
        </div>
        <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-display)] text-foreground leading-tight mb-4">
          Todo tu centro logistico,
          <br />
          en una sola pantalla.
        </h2>
        <p className="reveal text-foreground-muted text-lg max-w-xl mb-14 leading-relaxed">
          El panel de FLOTIME centraliza el control de filas, muelles, vehiculos y alertas. Decisiones en tiempo real, sin adivinar.
        </p>

        {/* Dashboard Preview */}
        <div className="reveal glass-dark rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          {/* Top Gradient Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-background/50 to-transparent" />
          
          <div className="grid md:grid-cols-[200px_1fr]">
            {/* Sidebar */}
            <div className="bg-white/[0.02] border-r border-white/5 p-4 hidden md:block">
              <div className="space-y-1">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 ${
                      item.active
                        ? "bg-background/10 text-white border-l-2 border-background"
                        : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto w-5 h-5 bg-background text-carbon text-xs font-bold rounded-full flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 space-y-5">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-white font-bold font-[family-name:var(--font-display)] tracking-wide">
                  Panel operativo
                </span>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  En vivo - Actualizado hace 2 seg
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className={`p-4 rounded-xl border transition-all duration-200 hover:border-background/30 group ${
                      kpi.highlight
                        ? "border-background/30 bg-background/10"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-1">
                      {kpi.label}
                    </div>
                    <div className={`text-2xl font-extrabold font-[family-name:var(--font-display)] ${
                      kpi.highlight ? "text-background" : "text-white"
                    }`}>
                      {kpi.value}
                    </div>
                    <div className={`text-xs mt-1 ${
                      kpi.up ? "text-success" : kpi.down ? "text-blue-400" : "text-white/40"
                    }`}>
                      {kpi.delta}
                    </div>
                    {/* Bottom line on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-background/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                ))}
              </div>

              {/* Middle Section */}
              <div className="grid lg:grid-cols-[1.6fr_1fr] gap-4">
                {/* Chart */}
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
                    Flujo de vehiculos - hoy
                  </div>
                  <div className="flex items-end gap-2 h-28">
                    {[
                      { h: 40, label: "06h" },
                      { h: 65, label: "08h" },
                      { h: 95, label: "10h", peak: true },
                      { h: 80, label: "12h" },
                      { h: 55, label: "14h" },
                      { h: 70, label: "16h", active: true },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div
                          className={`w-full rounded-t transition-all duration-1000 ${
                            bar.active
                              ? "bg-gradient-to-t from-background to-background/50 shadow-[0_-6px_20px_rgba(212,160,23,0.25)]"
                              : bar.peak
                              ? "bg-gradient-to-t from-background/50 to-background/20"
                              : "bg-white/10 hover:bg-white/15"
                          }`}
                          style={{ height: `${bar.h}%` }}
                        />
                        <span className="text-[10px] text-white/30 mt-2">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Queue */}
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
                    Cola virtual - en vivo
                  </div>
                  <div className="space-y-0">
                    {queueItems.map((item) => (
                      <div
                        key={item.plate}
                        className={`flex items-center gap-3 py-3 border-b border-white/5 last:border-0 ${
                          item.active ? "bg-background/5 -mx-2 px-2 rounded-lg" : ""
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          item.active
                            ? "bg-background text-carbon shadow-[0_0_8px_rgba(212,160,23,0.4)]"
                            : "bg-white/10 text-white/50"
                        }`}>
                          {item.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-white truncate">{item.plate}</div>
                          <div className="text-[10px] text-white/40 truncate">{item.company}</div>
                        </div>
                        <div className={`text-[10px] font-bold px-2 py-1 rounded ${
                          item.active
                            ? "bg-success/20 text-success border border-success/30"
                            : "text-white/40"
                        }`}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Alerts */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-background/5 border border-background/20 rounded-lg text-sm text-white/60">
                  <AlertTriangle className="w-4 h-4 text-background flex-shrink-0" />
                  Muelle 3 - demora de +8 min detectada
                </div>
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-success/5 border border-success/20 rounded-lg text-sm text-white/60">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  Muelle 6 - descarga completada - PBX 341 liberado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
