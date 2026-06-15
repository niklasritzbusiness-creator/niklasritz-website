import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-32 md:pt-48 md:pb-40 max-w-6xl mx-auto">
      {/* Cinematic background glow - CSS only, no JS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>

      <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">
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

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            Ich entwickle moderne, schnelle Websites für lokale Unternehmen in
            Karlsruhe und Umgebung — klar gestaltet, mobil optimiert und darauf
            ausgelegt, aus Besuchern echte Anfragen zu machen.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#angebot"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Pakete ansehen
            </a>

            <a
              href="mailto:kontakt@niklasritz.de?subject=Anfrage%20Webdesign&body=Hallo%20Niklas,%0A%0Aich%20interessiere%20mich%20für%20eine%20moderne%20Website.%0A%0AProjekt/Unternehmen:%20%0AZiel:%20%0AAktuelle%20Website:%20%0A%0AViele%20Grüße"
              className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-7 py-3 text-sm font-medium text-white transition hover:border-neutral-500 hover:bg-white/5"
            >
              Kostenlos anfragen
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-[420px] md:mx-0 md:justify-self-end">
          {/* Image frame */}
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/40">
            <Image
              src="/images/niklas-bw.webp"
              alt="Niklas Ritz"
              width={800}
              height={1000}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 90vw, 420px"
              className="h-auto w-full grayscale object-cover"
            />

            {/* subtle overlay for cinematic depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5" />
          </div>

          {/* Quote card */}
          <div className="relative -mt-10 ml-auto max-w-[330px] rounded-2xl border border-neutral-800 bg-neutral-950/85 p-5 shadow-xl backdrop-blur-md">
            <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
              „Eine gute Website sieht nicht nur modern aus — sie gibt Kunden
              das Gefühl, bei dir richtig zu sein.“
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              Niklas Ritz · Webdesign
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}