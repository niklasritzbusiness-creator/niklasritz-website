import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative py-40 px-6 max-w-6xl mx-auto">
      {/* Background glow kept subtle */}
      <div className="absolute inset-0 -z-10 flex justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT */}
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            Moderne Webseiten für Unternehmen
          </h1>

          <p className="text-lg text-neutral-400 mb-8 max-w-xl">
            Ich helfe lokalen Unternehmen in Karlsruhe, professionell online
            aufzutreten und neue Kunden zu gewinnen.
          </p>

          <a
            href="#angebot"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition shadow-lg shadow-white/5"
          >
            Kostenloses Erstgespräch
          </a>
        </div>

        {/* RIGHT: IMAGE + QUOTE */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="w-full max-w-[320px]">
            <Image
              src="/images/niklas.jpg"
              alt="Niklas Ritz"
              width={320}
              height={320}
              priority
              fetchPriority="high"
              className="rounded-2xl border border-neutral-800 object-cover w-full h-auto"
            />
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed max-w-xs md:max-w-sm text-left italic">
            „Ich glaube, dass jedes Unternehmen eine moderne Website verdient,
            die Vertrauen schafft und Kunden überzeugt.“
          </p>
        </div>
      </div>
    </section>
  )
}