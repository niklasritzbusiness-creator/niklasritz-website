import Hero from "./sections/Hero"
import Benefits from "./sections/Benefits"
import Process from "./sections/Process"
import Offer from "./sections/Offer"
import Contact from "./sections/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FadeIn from "./components/FadeIn"

export default function Home() {
  return (
    <main id="top" className="font-semibold text-lg tracking-tight cursor-pointer hover:text-neutral-300 transition">
      <Navbar />
      <Hero />
      <div className="h-px bg-neutral-800 max-w-5xl mx-auto"></div>
      <Benefits />
      <div className="h-px bg-neutral-800 max-w-5xl mx-auto"></div>
      <Process />
      <div className="h-px bg-neutral-800 max-w-5xl mx-auto"></div>
      <Offer />
      <div className="h-px bg-neutral-800 max-w-5xl mx-auto"></div>
      <Contact />
      <div className="h-px bg-neutral-800 max-w-5xl mx-auto"></div>
      <Footer />
    </main>
  )
}