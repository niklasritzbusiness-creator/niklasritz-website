import Image from "next/image"
import FadeIn from "../components/FadeIn"

const exampleProjects = [
  {
    title: "Restaurant Website",
    text: "Ein modernes Konzept für Restaurants, das Atmosphäre, Speisekarte und Reservierung klar in den Vordergrund stellt.",
  },
  {
    title: "Fitness Studio Landingpage",
    text: "Eine starke Landingpage mit klarem Fokus auf Probetraining, Vertrauen und schnelle Kontaktaufnahme.",
  },
  {
    title: "Handwerksbetrieb Website",
    text: "Eine seriöse Website, die Leistungen verständlich zeigt und Kunden direkt zur Anfrage führt.",
  },
]

export default function Projects() {
  return (
    <section
      id="projekte"
      className="relative overflow-hidden bg-neutral-950 px-6 py-32 md:py-40"
    >
      {/* Cinematic background depth */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-32 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <FadeIn>
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Projekte & Referenzen
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Websites, die nicht nur gut aussehen — sondern Wirkung zeigen.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
              Ein gutes Projekt beginnt nicht mit Design allein, sondern mit der
              Frage: Wie soll sich ein Kunde fühlen, wenn er dein Unternehmen
              online entdeckt?
            </p>
          </div>
        </FadeIn>

        {/* Featured case study */}
        <FadeIn>
          <article className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/40">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              {/* Text side */}
              <div className="relative z-10 flex flex-col justify-between p-8 md:p-10 lg:p-12">
                <div>
                  <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">
                    Kundenprojekt
                  </p>

                  <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                    Die Tauchwelt — Tauchschule in Eggenstein
                  </h3>

                  <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-400">
                    Für die Tauchschule entstand eine moderne, schnelle Website,
                    die Vertrauen schafft, klar strukturiert ist und neue Kunden
                    gezielt zur Kontaktaufnahme führt.
                  </p>

                  <div className="mt-10 grid gap-4 text-sm text-neutral-400 sm:grid-cols-3">
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4">
                      <p className="mb-2 text-neutral-500">Fokus</p>
                      <p className="text-white">Vertrauen</p>
                    </div>

                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4">
                      <p className="mb-2 text-neutral-500">Optimiert</p>
                      <p className="text-white">Mobil</p>
                    </div>

                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4">
                      <p className="mb-2 text-neutral-500">Ziel</p>
                      <p className="text-white">Anfragen</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="https://www.die-tauchwelt.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
                  >
                    Website ansehen
                  </a>
                </div>
              </div>

              {/* Visual side */}
              <div className="relative min-h-[360px] overflow-hidden border-t border-neutral-800 lg:min-h-[620px] lg:border-l lg:border-t-0">
                <Image
                  src="/projects/screenshot_die-tauchwelt.de.webp"
                  alt="Website Vorschau Die Tauchwelt"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top"
                />

                {/* cinematic overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 via-transparent to-transparent lg:from-neutral-950/70" />

                {/* floating label */}
                <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-md">
                  Live Projekt · Webdesign & Umsetzung
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Transition statement */}
        <FadeIn>
          <div className="mx-auto my-20 max-w-3xl text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Jede Branche braucht eine andere Geschichte.
            </h3>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-neutral-400">
              Deshalb wirkt gutes Webdesign nicht wie eine Vorlage. Es passt zu
              deinem Unternehmen, deiner Zielgruppe und dem Gefühl, das du
              vermitteln möchtest.
            </p>
          </div>
        </FadeIn>

        {/* Example projects */}
        <div className="grid gap-6 md:grid-cols-3">
          {exampleProjects.map((project, index) => (
            <FadeIn
              key={project.title}
              direction={
                index === 0 ? "left" : index === 1 ? "up" : "right"
              }
            >
              <div className="group min-h-[260px] rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]">
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    Beispiel 0{index + 1}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-neutral-600 transition group-hover:bg-white" />
                </div>

                <h4 className="text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h4>

                <p className="mt-5 leading-relaxed text-neutral-400">
                  {project.text}
                </p>

                <p className="mt-8 text-xs uppercase tracking-[0.2em] text-neutral-600">
                  Auf Anfrage verfügbar
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}