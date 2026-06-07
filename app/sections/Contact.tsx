export default function Contact() {
  return (
    <section id="kontakt" className="py-32 px-6 max-w-4xl mx-auto text-center">
      
      <div className="h-px bg-neutral-800 mb-20"></div>

      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Bereit für deine neue Website?
      </h2>

      <p className="text-neutral-400 mb-12 max-w-xl mx-auto">
        Lass uns unverbindlich über dein Projekt sprechen. 
        Schreib mir einfach direkt oder ruf mich an.
      </p>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6">
        
        <div>
          <p className="text-neutral-500 text-sm mb-1">E-Mail</p>
          <a 
            href="mailto:info@niklasritz.de"
            className="text-white text-lg hover:underline"
          >
            info@niklasritz.de
          </a>
        </div>

        <div>
          <p className="text-neutral-500 text-sm mb-1">Telefon</p>
          <a 
            href="tel:+4915118545125"
            className="text-white text-lg hover:underline"
          >
            +49 1511 8545125
          </a>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition shadow-lg shadow-white/5 mt-6">
            Jetzt Kontakt aufnehmen
        </button>

      </div>

    </section>
  )
}