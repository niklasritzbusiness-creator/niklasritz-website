import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-40 pb-24 flex items-center">
      
      {/* Desktop background image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/niklas-hero-desktop.webp"
          alt="Niklas Ritz Webdesign"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[70%_center] grayscale"
        />
      </div>

      {/* Mobile background image */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/images/niklas-hero-mobile.webp"
          alt="Niklas Ritz Webdesign"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[70%_center] grayscale"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-neutral-950/75 md:bg-neutral-950/65" />

      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/20" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-400">
            Webdesign aus Karlsruhe
          </p>

          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 5.8rem)",
              lineHeight: "1.05",
              fontWeight: 600,
            }}
            className="mb-7 tracking-tight text-white"
          >
            Websites, die Vertrauen schaffen und Kunden gewinnen.
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Ich entwickle moderne, schnelle Websites für lokale Unternehmen in
            Karlsruhe und Umgebung — klar gestaltet, mobil optimiert und darauf
            ausgelegt, aus Besuchern echte Anfragen zu machen.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#angebot"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Pakete ansehen
            </a>

            <a
              href="#projekte"
              className="rounded-full border border-neutral-700 px-6 py-3 text-center text-sm font-medium text-white transition hover:border-neutral-400"
            >
              Projekte ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}