import FadeIn from "../components/FadeIn"

export default function Process() {
  return (
    <section id="ablauf" className="py-32 px-6 max-w-6xl mx-auto text-center">
      
      <div className="h-px bg-neutral-800 mb-20"></div>

      <h2 className="text-3xl md:text-4xl font-semibold mb-16">
        So läuft die Zusammenarbeit ab
      </h2>
      <div className="h-px bg-neutral-800 mb-12 max-w-3xl mx-auto"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Step 1 */}
        <FadeIn direction="left">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition text-left">
            <span className="text-white text-lg font-semibold">01</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">Anfrage</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Du meldest dich bei mir mit deiner Idee oder deinem Projekt.
            </p>
          </div>
        </FadeIn>

        {/* Step 2 */}
        <FadeIn direction="right">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition text-left">
            <span className="text-white text-lg font-semibold">02</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">Konzept</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Ich entwickle Design und Struktur für deine Website.
            </p>
          </div>
        </FadeIn>

        {/* Step 3 */}
        <FadeIn direction="left">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition text-left">
            <span className="text-white text-lg font-semibold">03</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">Umsetzung</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Moderne, schnelle Umsetzung inklusive Mobile-Optimierung.
            </p>
          </div>
        </FadeIn>

        {/* Step 4 */}
        <FadeIn direction="right">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition text-left">
            <span className="text-white text-lg font-semibold">04</span>
            <h3 className="text-xl font-semibold mt-2 mb-3">Launch</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Deine Website geht live und ist bereit für neue Kunden.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}