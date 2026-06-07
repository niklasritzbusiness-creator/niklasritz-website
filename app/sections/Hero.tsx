import FadeIn from "../components/FadeIn"

export default function Hero() {
  return (
    <section className="relative py-40 px-6 max-w-6xl mx-auto">
      
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT */}
        <div>
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
              Moderne Webseiten für Unternehmen
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="text-lg text-neutral-400 mb-8 max-w-xl">
              Ich helfe lokalen Unternehmen in Karlsruhe, professionell online aufzutreten und neue Kunden zu gewinnen.
            </p>
          </FadeIn>

          <FadeIn>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition shadow-lg shadow-white/5">
              Kostenloses Erstgespräch
            </button>
          </FadeIn>
        </div>

        {/* RIGHT: IMAGE + QUOTE */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6">

          <FadeIn direction="right">
            <img
              src="/images/niklas.jpg"
              alt="Niklas Ritz"
              className="w-[220px] h-[220px] object-cover rounded-2xl border border-neutral-800 shadow-lg hover:scale-105 transition duration-300"
            />
          </FadeIn>

          <FadeIn direction="right">
            <p className="text-neutral-300 text-lg leading-relaxed max-w-xs md:max-w-sm text-left italic">
              “Ich glaube, dass jedes Unternehmen eine moderne Website verdient, die Vertrauen schafft und Kunden überzeugt.”
            </p>
          </FadeIn>

        </div>

      </div>
    </section>
  )
}