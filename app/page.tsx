import dynamic from "next/dynamic"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"

// ✅ Lazy-loaded sections (improves performance)
const Projects = dynamic(() => import("./sections/Project"), {
  loading: () => <div className="h-32" />,
})
const Benefits = dynamic(() => import("./sections/Benefits"))
const Process = dynamic(() => import("./sections/Process"))
const Offer = dynamic(() => import("./sections/Offer"))
const Contact = dynamic(() => import("./sections/Contact"))

export default function Home() {
  return (
    <main id="top" className="bg-neutral-950 text-white min-h-screen">
      <Navbar />

      {/* ✅ Above-the-fold (loads immediately) */}
      <Hero />

      <div className="h-px bg-neutral-800 max-w-5xl mx-auto" />
      <Benefits />

      <div className="h-px bg-neutral-800 max-w-5xl mx-auto" />
      <Process />
      
      <div className="h-px bg-neutral-800 max-w-5xl mx-auto" />
      <Offer />
      
      {/* ✅ Lazy sections (load after) */}
      <div className="h-px bg-neutral-800 max-w-5xl mx-auto" />
      <Projects />

      <div className="h-px bg-neutral-800 max-w-5xl mx-auto" />
      <Contact />

      <div className="h-px bg-neutral-800 max-w-5xl mx-auto" />
      <Footer />
    </main>
  )
}