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

            <a
              href={`mailto:kontakt@niklasritz.de?subject=Anfrage%20Starter%20Landingpage&body=Hallo%20Niklas,%0A%0Aich%20interessiere%20mich%20für%20das%20Starter%20Landingpage-Paket.%0A%0A---%0A%0AInfos%20zu%20meinem%20Projekt:%0ABranche:%20%0AZiel:%20%0AGibt%20es%20bereits%20eine%20Website?%20%0A%0A---%0A%0AViele%20Grüße`}
            >
              <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-neutral-200 transition">
                Starten
              </button>
            </a>
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

            <a
              href={`mailto:kontakt@niklasritz.de?subject=Anfrage%20Business%20Website&body=Hallo%20Niklas,%0A%0Aich%20interessiere%20mich%20für%20die%20Business%20Website%20(inkl.%20Unterseiten).%0A%0A---%0A%0AInfos%20zu%20meinem%20Projekt:%0ABranche:%20%0AZiel:%20%0AGibt%20es%20bereits%20eine%20Website?%20%0A%0AWie%20viele%20Unterseiten%20werden%20benötigt?%20%0A%0A---%0A%0AViele%20Grüße`}
            >
              <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-neutral-200 transition">
                Jetzt starten
              </button>
            </a>
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

            <a
              href={`mailto:kontakt@niklasritz.de?subject=Anfrage%20Online%20Shop&body=Hallo%20Niklas,%0A%0Aich%20interessiere%20mich%20für%20einen%20Online%20Shop.%0A%0A---%0A%0AInfos%20zu%20meinem%20Projekt:%0AWas%20wird%20verkauft?%20%0AAnzahl%20der%20Produkte:%20%0ABenötigte%20Funktionen:%20%0AZiel:%20%0A%0A---%0A%0AViele%20Grüße`}
            >
              <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-neutral-200 transition">
                Anfrage senden
              </button>
            </a>
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

            <a
              href={`mailto:kontakt@niklasritz.de?subject=Anfrage%20Wartung&body=Hallo%20Niklas,%0A%0Aich%20interessiere%20mich%20für%20die%20laufende%20Wartung%20meiner%20Website.%0A%0A---%0A%0AInfos:%0AWie%20heißt%20Ihre%20aktuelle%20Website?%20%0AWelche%20Änderungen%20werden%20regelmäßig%20benötigt?%20%0A%0A---%0A%0AViele%20Grüße`}
            >
              <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-neutral-200 transition">
                Mehr erfahren
              </button>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}