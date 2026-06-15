import Image from "next/image"

export const metadata = {
  title: "Maison Noir Demo | Niklas Ritz Webdesign",
  description: "Cinematic restaurant website concept by Niklas Ritz Webdesign",
}

export default function MaisonNoirDemo() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080706] text-white">
      {/* Navigation */}
      <header className="absolute left-0 top-0 z-20 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <div className="text-sm uppercase tracking-[0.35em] text-white/80">
            Maison Noir
          </div>

          <nav className="hidden gap-8 text-sm text-white/60 md:flex">
            <a href="#menu" className="transition hover:text-white">
              Menü
            </a>
            <a href="#experience" className="transition hover:text-white">
              Erlebnis
            </a>
            <a href="#reservation" className="transition hover:text-white">
              Reservieren
            </a>
          </nav>
        </div>
      </header>

      {/* Hero with full background image */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-32">
        {/* Background image */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="maison-hero-image absolute inset-0">
            <Image
              src="/demo/maison-noir-table.webp"
              alt="Fein gedeckter Tisch mit einer hochwertigen Speise"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Left readability gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080706] via-[#080706]/78 to-transparent" />

          {/* Bottom cinematic fade */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#080706] via-[#080706]/70 to-transparent" />

          {/* Warm premium glow */}
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a46a]/15 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          {/* Left content */}
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#c9a46a]">
              Fine Dining · Karlsruhe
            </p>

            <h1
              style={{
                fontSize: "clamp(4rem, 9vw, 8.5rem)",
                lineHeight: "0.92",
                fontWeight: 600,
              }}
              className="max-w-4xl tracking-[-0.06em]"
            >
              Taste the night.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Ein Restaurantkonzept für Menschen, die Atmosphäre, Design und
              Geschmack nicht trennen. Dunkel, elegant und bewusst reduziert.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#reservation"
                className="rounded-full bg-[#c9a46a] px-7 py-3 text-sm font-medium text-black transition hover:bg-[#d8b77d]"
              >
                Tisch reservieren
              </a>

              <a
                href="#menu"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Menü entdecken
              </a>
            </div>
          </div>

          {/* Right floating atmosphere card */}
          <div className="hidden md:flex md:justify-end">
            <div className="max-w-sm rounded-[2rem] border border-white/10 bg-black/35 p-6 shadow-2xl shadow-black/40 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Signature Experience
              </p>

              <p className="mt-6 text-2xl font-medium leading-snug text-white">
                “Ein Abend, der nicht laut sein muss, um in Erinnerung zu
                bleiben.”
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/50">
                <span>Maison Noir</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lower preview strip for screenshot depth */}
      <section
        id="menu"
        className="relative z-10 mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3"
      >
        {[
          {
            title: "Atmosphäre",
            text: "Dunkle Töne, warme Akzente und ein reduziertes Design.",
          },
          {
            title: "Menü",
            text: "Klare Struktur für Gerichte, Empfehlungen und Specials.",
          },
          {
            title: "Reservierung",
            text: "Direkte Handlung statt langer Wege durch die Website.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              {item.title}
            </h2>
            <p className="mt-4 leading-relaxed text-white/50">{item.text}</p>
          </div>
        ))}
      </section>

      <section
        id="reservation"
        className="mx-auto max-w-7xl px-6 pb-28"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-md md:p-12">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#c9a46a]">
            Reservierung
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Ein Tisch. Ein Abend. Eine Erinnerung.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/50">
            Dieses Konzept zeigt, wie eine Restaurant-Website Atmosphäre,
            Vertrauen und Handlung elegant verbinden kann.
          </p>
        </div>
      </section>
    </main>
  )
}