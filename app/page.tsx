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
    <main className="bg-neutral-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      
      <Benefits />
      
      <Process />
      
      <Offer />
      
      <Contact />
      
      <Footer />
    </main>
  )
}