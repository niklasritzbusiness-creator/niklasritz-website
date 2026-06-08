import Image from "next/image"
import FadeIn from "../components/FadeIn"

export default function Projects() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <div className="h-px bg-neutral-800 mb-20"></div>

      {/* Title */}
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Projekte & Referenzen
        </h2>
      </FadeIn>

      {/* REAL CLIENT */}
      <FadeIn>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-12 hover:border-neutral-600 transition">

          {/* ✅ MOBILE */}
          <div className="flex justify-center mb-6 md:hidden">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-2">
              <Image
                src="/projects/screenshot_die-tauchwelt.de.webp"
                alt="Website Vorschau"
                width={300}
                height={200}
                className="rounded-lg object-cover"
                sizes="100vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* TEXT */}
            <div>
              <p className="text-neutral-500 text-sm mb-2">Kundenprojekt</p>

              <h3 className="text-2xl font-semibold mb-4">
                Website für Die Tauchwelt - Tauchschule in Eggenstein
              </h3>

              <p className="text-neutral-400 mb-6 max-w-xl">
                Für die Tauchschule habe ich eine moderne, schnelle Website entwickelt, welche
                Vertrauen schafft, klar strukturiert ist und neue Kunden anspricht.
                Fokus lag auf Design, Performance und mobiler Optimierung.
              </p>

              <a
                href="https://www.die-tauchwelt.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm underline hover:text-neutral-300 transition"
              >
                Website ansehen
              </a>
            </div>

            {/* ✅ DESKTOP */}
            <div className="hidden md:flex justify-center items-center">
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-2 max-w-[340px]">
                <Image
                  src="/projects/screenshot_die-tauchwelt.de.webp"
                  alt="Website Vorschau"
                  width={320}
                  height={200}
                  className="rounded-lg object-cover"
                  sizes="340px"
                />
              </div>
            </div>

          </div>

        </div>
      </FadeIn>

      {/* EXAMPLE PROJECTS */}
      <div className="grid md:grid-cols-3 gap-8">

        <FadeIn direction="left">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold mb-2">Restaurant Website</h4>
            <p className="text-neutral-400 text-sm">
              Modernes Designkonzept für ein lokales Restaurant mit Fokus auf mobile Nutzung.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold mb-2">Fitness Studio Landingpage</h4>
            <p className="text-neutral-400 text-sm">
              Klare Struktur und starke Call-To-Actions zur Kundengewinnung.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-600 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold mb-2">Handwerksbetrieb Website</h4>
            <p className="text-neutral-400 text-sm">
              Vertrauen durch klares Design und einfache Kontaktmöglichkeiten.
            </p>
          </div>
        </FadeIn>

      </div>

      <p className="text-neutral-500 text-xs mt-6 text-center">
        Beispielprojekte (auf Anfrage verfügbar)
      </p>

    </section>
  )
}
