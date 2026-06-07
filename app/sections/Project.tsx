import FadeIn from "../components/FadeIn"

export default function Projects() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      
      <div className="h-px bg-neutral-800 mb-20"></div>

      {/* ✅ Title */}
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Projekte & Referenzen
        </h2>
      </FadeIn>

      {/* ✅ REAL CLIENT */}
      <FadeIn>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12 hover:border-neutral-600 transition">
          <p className="text-neutral-500 text-sm mb-2">Kundenprojekt</p>

          <h3 className="text-2xl font-semibold mb-4">
            Website für [DEIN CLIENT NAME]
          </h3>

          <p className="text-neutral-400 mb-6 max-w-xl">
            Für dieses Unternehmen habe ich eine moderne, schnelle Website entwickelt, 
            die Vertrauen schafft und neue Kunden anspricht. 
            Fokus lag auf Design, Performance und mobiler Optimierung.
          </p>

          <button className="text-white text-sm underline hover:text-neutral-300 transition">
            Website ansehen
          </button>
        </div>
      </FadeIn>

      {/* ✅ EXAMPLE PROJECTS */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Project 1 */}
        <FadeIn direction="left">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold mb-2">
              Restaurant Website
            </h4>
            <p className="text-neutral-400 text-sm">
              Modernes Designkonzept für ein lokales Restaurant mit Fokus auf mobile Nutzung.
            </p>
          </div>
        </FadeIn>

        {/* Project 2 */}
        <FadeIn direction="up">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold mb-2">
              Fitness Studio Landingpage
            </h4>
            <p className="text-neutral-400 text-sm">
              Klare Struktur und starke Call-To-Actions zur Kundengewinnung.
            </p>
          </div>
        </FadeIn>

        {/* Project 3 */}
        <FadeIn direction="right">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold mb-2">
              Handwerksbetrieb Website
            </h4>
            <p className="text-neutral-400 text-sm">
              Vertrauen durch klares Design und einfache Kontaktmöglichkeiten.
            </p>
          </div>
        </FadeIn>

        <p className="text-neutral-500 text-xs mt-2">
        Beispielprojekt (auf Anfrage verfügbar)
        </p>

      </div>

    </section>
  )
}