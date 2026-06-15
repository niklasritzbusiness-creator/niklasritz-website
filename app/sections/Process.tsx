const steps = [
  {
    number: "01",
    title: "Analyse",
    subtitle: "Verstehen, was wirklich gebraucht wird.",
    text: "Wir schauen uns gemeinsam an, wo dein Unternehmen aktuell steht, welche Zielgruppe du erreichen möchtest und welche Rolle deine Website dabei spielen soll.",
  },
  {
    number: "02",
    title: "Konzept",
    subtitle: "Aus Ideen wird eine klare Struktur.",
    text: "Ich entwickle eine Seitenstruktur, klare Inhalte und ein modernes Designkonzept, das Vertrauen schafft und Besucher gezielt zur Anfrage führt.",
  },
  {
    number: "03",
    title: "Umsetzung",
    subtitle: "Modern, schnell und sauber entwickelt.",
    text: "Deine Website wird responsiv, performant und hochwertig umgesetzt — mit Fokus auf mobile Nutzung, Ladezeit und einem starken ersten Eindruck.",
  },
  {
    number: "04",
    title: "Launch",
    subtitle: "Deine Website geht online.",
    text: "Nach finaler Abstimmung wird die Website veröffentlicht und ist bereit, dein Unternehmen professionell zu präsentieren und neue Kunden zu gewinnen.",
  },
]

export default function Process() {
  return (
    <section
      id="ablauf"
      className="relative overflow-hidden bg-neutral-950 px-6 pt-32 pb-16 md:pt-40 md:pb-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section intro */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Ablauf
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Schritt für Schritt zu einer Website, die wirkt.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Ein klarer Prozess sorgt dafür, dass aus einer ersten Idee eine
            professionelle Website entsteht — strukturiert, verständlich und
            ohne unnötige Komplexität.
          </p>
        </div>

        {/* Desktop + mobile sticky stack */}
        <div className="mx-auto max-w-4xl">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="sticky rounded-[2rem] border border-neutral-800 bg-neutral-900 p-7 shadow-2xl shadow-black/30 transition duration-300 hover:border-neutral-600 md:p-10"
              style={{
                top: `calc(96px + ${index * 72}px)`,
                zIndex: 10 + index,
                marginBottom: index === steps.length - 1 ? "0px" : "56px",
              }}
            >
              <div className="mb-12 flex items-start justify-between gap-8">
                <div>
                  <span className="text-sm text-neutral-500">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {step.title}
                  </h3>
                </div>

                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
              </div>

              <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
                <p className="text-xl font-medium leading-snug text-neutral-200 md:text-2xl">
                  {step.subtitle}
                </p>

                <p className="leading-relaxed text-neutral-400">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}