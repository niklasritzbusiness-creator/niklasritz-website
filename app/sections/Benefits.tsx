import FadeIn from "../components/FadeIn"

const benefits = [
  {
    eyebrow: "01",
    title: "Der erste Eindruck entscheidet",
    text: "Bevor jemand anruft oder eine Anfrage stellt, sieht er deine Website. Sie entscheidet oft in wenigen Sekunden, ob Vertrauen entsteht — oder ob der Besucher weitersucht.",
  },
  {
    eyebrow: "02",
    title: "Professionell wirken, bevor du sprichst",
    text: "Eine moderne Website zeigt sofort, dass dein Unternehmen sorgfältig, hochwertig und zuverlässig arbeitet. Genau dieses Gefühl sollen potenzielle Kunden bekommen.",
  },
  {
    eyebrow: "03",
    title: "Aus Besuchern werden Anfragen",
    text: "Klare Inhalte, starke Struktur und deutliche Kontaktmöglichkeiten helfen dabei, dass Besucher nicht nur schauen — sondern tatsächlich Kontakt aufnehmen.",
  },
  {
    eyebrow: "04",
    title: "Perfekt auf dem Smartphone",
    text: "Viele Kunden besuchen deine Website zuerst mobil. Deshalb muss sie schnell laden, sauber aussehen und sofort verständlich sein — egal auf welchem Gerät.",
  },
]

export default function Benefits() {
  return (
    <section id="leistungen" className="relative overflow-hidden px-6 py-32 md:py-40">
      {/* Subtle background depth */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Story intro */}
        <FadeIn>
          <div className="mx-auto mb-24 max-w-4xl text-center">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Warum eine gute Website zählt
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Deine Website verkauft Vertrauen, noch bevor du mit Kunden sprichst.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
              Viele lokale Unternehmen verlieren online potenzielle Kunden, weil
              ihre Website veraltet wirkt, langsam lädt oder auf dem Smartphone
              nicht überzeugt. Genau hier beginnt der Unterschied.
            </p>
          </div>
        </FadeIn>

        {/* Emotional split statement */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 md:items-end">
          <FadeIn direction="left">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 md:p-10">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                Das Problem
              </p>

              <h3 className="mb-5 text-2xl font-semibold text-white md:text-3xl">
                Eine schwache Website kostet mehr Vertrauen, als viele denken.
              </h3>

              <p className="leading-relaxed text-neutral-400">
                Wenn Design, Struktur oder mobile Ansicht nicht überzeugen,
                entsteht schnell Unsicherheit. Und Unsicherheit führt selten zu
                einer Anfrage.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="rounded-3xl border border-neutral-700 bg-white p-8 text-neutral-950 md:p-10">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
                Die Lösung
              </p>

              <h3 className="mb-5 text-2xl font-semibold md:text-3xl">
                Eine moderne Website macht dein Unternehmen sofort greifbarer.
              </h3>

              <p className="leading-relaxed text-neutral-600">
                Sie zeigt klar, wer du bist, was du anbietest und warum Kunden
                sich bei dir gut aufgehoben fühlen.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Benefit cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <FadeIn
              key={benefit.title}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="group min-h-[260px] rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    {benefit.eyebrow}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-neutral-600 transition group-hover:bg-white" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-white">
                  {benefit.title}
                </h3>

                <p className="leading-relaxed text-neutral-400">
                  {benefit.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}