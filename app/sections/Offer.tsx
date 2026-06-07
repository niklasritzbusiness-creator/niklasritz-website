export default function Offer() {
  return (
    <section id="angebot" className="py-32 px-6 max-w-4xl mx-auto text-center">
      
      <div className="h-px bg-neutral-800 mb-20"></div>

      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Starter Website für kleine Unternehmen
      </h2>

      <p className="text-neutral-400 mb-12 max-w-xl mx-auto">
        Perfekt für Unternehmen, die online sichtbar werden und neue Kunden gewinnen möchten.
      </p>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-10 hover:border-neutral-600 transition">
        
        <p className="text-sm text-neutral-500 mb-4">
          ab
        </p>

        <h3 className="text-5xl font-semibold mb-6">
          499€
        </h3>

        <ul className="text-neutral-400 space-y-3 mb-8 text-left max-w-sm mx-auto">
          <li>• Individuelles modernes Design</li>
          <li>• Optimiert für Smartphones</li>
          <li>• Schnelle Ladezeiten</li>
          <li>• Kontaktformular</li>
          <li>• Grundlegende SEO</li>
        </ul>

        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition shadow-lg shadow-white/5">
          Jetzt anfragen
        </button>

      </div>
    </section>
  )
}