export default function Process() {
  return (
    <section id="ablauf" className="py-32 px-6 max-w-5xl mx-auto text-center">
        <div className="h-px bg-neutral-800 mb-20"></div>
      
      <h2 className="text-3xl md:text-4xl font-semibold mb-16">
        So läuft die Zusammenarbeit ab
      </h2>

      <div className="grid md:grid-cols-2 gap-10 text-left">
        
        <div>
          <span className="text-neutral-500 text-sm">01</span>
          <h3 className="text-xl font-semibold mt-2 mb-2">
            Anfrage
          </h3>
          <p className="text-neutral-400 leading-relaxed">
            Du meldest dich bei mir mit deiner Idee oder deinem Projekt.
            Gemeinsam klären wir deine Ziele und Anforderungen.
          </p>
        </div>

        <div>
          <span className="text-neutral-500 text-sm">02</span>
          <h3 className="text-xl font-semibold mt-2 mb-2">
            Konzept
          </h3>
          <p className="text-neutral-400 leading-relaxed">
            Ich entwickle ein klares Design und eine Struktur für deine Website,
            abgestimmt auf deine Zielgruppe.
          </p>
        </div>

        <div>
          <span className="text-neutral-500 text-sm">03</span>
          <h3 className="text-xl font-semibold mt-2 mb-2">
            Umsetzung
          </h3>
          <p className="text-neutral-400 leading-relaxed">
            Deine Website wird modern und performant umgesetzt –
            inklusive Mobile-Optimierung und schnellen Ladezeiten.
          </p>
        </div>

        <div>
          <span className="text-neutral-500 text-sm">04</span>
          <h3 className="text-xl font-semibold mt-2 mb-2">
            Launch
          </h3>
          <p className="text-neutral-400 leading-relaxed">
            Deine Website geht online und ist bereit, neue Kunden zu gewinnen.
          </p>
        </div>

      </div>
    </section>
  )
}