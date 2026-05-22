import { Navbar } from "@/components/flotime/navbar"
import { Hero } from "@/components/flotime/hero"
import { Problem } from "@/components/flotime/problem"
import { Solution } from "@/components/flotime/solution"
import { Dashboard } from "@/components/flotime/dashboard"
import { Benefits } from "@/components/flotime/benefits"
import { Pricing } from "@/components/flotime/pricing"
import { Contact } from "@/components/flotime/contact"
import { Footer } from "@/components/flotime/footer"
import { WhatsAppFloat } from "@/components/flotime/whatsapp-float"

export default function FlotimePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Dashboard />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
