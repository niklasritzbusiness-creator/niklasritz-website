import FadeIn from "../components/FadeIn"

export default function Offer() {
  return (
    <section id="angebot" className="py-32 px-6 max-w-6xl mx-auto text-center">
      
      <div className="h-px bg-neutral-800 mb-20"></div>

      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          Pakete & Preise
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* ✅ Landing Page */}
        <FadeIn direction="left">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition">
            <p className="text-neutral-500 text-sm mb-2">Starter</p>
            <h3 className="text-xl font-semibold mb-4">Landing Page</h3>

            <p className="text-3xl font-semibold mb-6">499€</p>

            <ul className="text-neutral-400 text-sm space-y-2 mb-6 text-left">
              <li>• Individuelles Design</li>
              <li>• Mobile Optimierung</li>
              <li>• Schnelle Ladezeiten</li>
              <li>• Kontaktformular</li>
              <li>• Grundlegende SEO</li>
            </ul>

            <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-neutral-200 transition">
              Starten
            </button>
          </div>
        </FadeIn>

        {/* ✅ Business Website */}
        <FadeIn direction="left">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <p className="text-neutral-500 text-sm mb-2">Beliebt</p>
            <h3 className="text-xl font-semibold mb-4">Business Website</h3>

            <p className="text-3xl font-semibold mb-6">999€</p>

            <ul className="text-neutral-400 text-sm space-y-2 mb-6 text-left">
              <li>• Mehrere Unterseiten</li>
              <li>• Individuelles Design</li>
              <li>• Mobile Optimierung</li>
              <li>• SEO-Optimierung</li>
              <li>• Schnelle Ladezeiten</li>
            </ul>

            <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-neutral-200 transition">
              Jetzt starten
            </button>
          </div>
        </FadeIn>

        {/* ✅ Shop */}
        <FadeIn direction="right">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition">
            <p className="text-neutral-500 text-sm mb-2">Individuell</p>
            <h3 className="text-xl font-semibold mb-4">Online Shop</h3>

            <p className="text-3xl font-semibold mb-6">Auf Anfrage</p>

            <ul className="text-neutral-400 text-sm space-y-2 mb-6 text-left">
              <li>• E-Commerce Setup</li>
              <li>• Zahlungsintegration</li>
              <li>• Produktseiten</li>
              <li>• Google Merchant Center</li>
              <li>• Individuelle Features</li>
            </ul>

            <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-neutral-200 transition">
              Anfrage senden
            </button>
          </div>
        </FadeIn>

        {/* ✅ Maintenance */}
        <FadeIn direction="right">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition">
            <p className="text-neutral-500 text-sm mb-2">Support</p>
            <h3 className="text-xl font-semibold mb-4">Wartung</h3>

            <p className="text-3xl font-semibold mb-6">50€/Monat</p>

            <ul className="text-neutral-400 text-sm space-y-2 mb-6 text-left">
              <li>• Inhalte aktualisieren</li>
              <li>• Bilder austauschen</li>
              <li>• Kleine Änderungen</li>
              <li>• Technischer Support</li>
              <li>• Laufende Betreuung</li>
            </ul>

            <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-neutral-200 transition">
              Mehr erfahren
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}