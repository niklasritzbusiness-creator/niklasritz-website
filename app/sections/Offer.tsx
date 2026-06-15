import FadeIn from "../components/FadeIn"

const packages = [
  {
    label: "Starter",
    title: "Landing Page",
    price: "499€",
    description:
      "Für Unternehmen, die schnell professionell sichtbar werden möchten — klar, modern und auf den Punkt.",
    features: [
      "Eine hochwertige Landing Page",
      "Individuelles modernes Design",
      "Optimiert für Smartphones",
      "Schnelle Ladezeiten",
      "Kontaktmöglichkeit integriert",
      "Grundlegende SEO-Struktur",
    ],
    subject: "Anfrage Starter Landingpage",
    body: `Hallo Niklas,

ich interessiere mich für das Starter Landingpage-Paket.

---

Infos zu meinem Projekt:
Branche:
Ziel:
Gibt es bereits eine Website?

---

Viele Grüße`,
    button: "Starter anfragen",
    highlight: false,
  },
  {
    label: "Beliebt",
    title: "Business Website",
    price: "999€",
    description:
      "Für Unternehmen, die mehr Vertrauen aufbauen, Leistungen besser erklären und gezielt Anfragen gewinnen möchten.",
    features: [
      "Mehrere Unterseiten",
      "Strategische Seitenstruktur",
      "Individuelles modernes Design",
      "Mobile Optimierung",
      "SEO-optimierte Grundlagen",
      "Klare Call-to-Actions",
    ],
    subject: "Anfrage Business Website",
    body: `Hallo Niklas,

ich interessiere mich für die Business Website.

---

Infos zu meinem Projekt:
Branche:
Ziel:
Gibt es bereits eine Website?
Wie viele Unterseiten werden benötigt?

---

Viele Grüße`,
    button: "Business Website anfragen",
    highlight: true,
  },
  {
    label: "Individuell",
    title: "Online Shop",
    price: "Auf Nachfrage",
    description:
      "Für Unternehmen, die Produkte online präsentieren und verkaufen möchten — inklusive sauberer Shop-Struktur.",
    features: [
      "E-Commerce Setup",
      "Produktseiten",
      "Zahlungsintegration",
      "Google Merchant Center",
      "Struktur für Produktdaten",
      "Individuelle Funktionen",
    ],
    subject: "Anfrage Online Shop",
    body: `Hallo Niklas,

ich interessiere mich für einen Online Shop.

---

Infos zu meinem Projekt:
Was wird verkauft?
Anzahl der Produkte:
Benötigte Funktionen:
Ziel:

---

Viele Grüße`,
    button: "Shop anfragen",
    highlight: false,
  },
  {
    label: "Support",
    title: "Wartung",
    price: "50€/Monat",
    description:
      "Für Unternehmen, die ihre Website aktuell halten möchten, ohne sich selbst um kleine Änderungen kümmern zu müssen.",
    features: [
      "Inhalte aktualisieren",
      "Bilder austauschen",
      "Kleine Textänderungen",
      "Technische Betreuung",
      "Regelmäßige Pflege",
      "Persönlicher Ansprechpartner",
    ],
    subject: "Anfrage Wartung",
    body: `Hallo Niklas,

ich interessiere mich für die laufende Wartung meiner Website.

---

Infos:
Gibt es bereits eine Website?
Welche Änderungen werden regelmäßig benötigt?

---

Viele Grüße`,
    button: "Wartung anfragen",
    highlight: false,
  },
]

function createMailto(subject: string, body: string) {
  return `mailto:kontakt@niklasritz.de?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`
}

export default function Offer() {
  return (
    <section id="angebot" className="relative overflow-hidden px-6 py-32 md:py-40">
      {/* subtle background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute right-1/4 top-32 h-[420px] w-[420px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section intro */}
        <FadeIn>
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Pakete & Preise
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Wähle den nächsten Schritt für deinen digitalen Auftritt.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
              Ob kompakte Landing Page, vollständige Unternehmenswebsite oder
              Online Shop — jedes Paket ist darauf ausgelegt, dein Unternehmen
              professioneller sichtbar zu machen und mehr Vertrauen bei Kunden
              aufzubauen.
            </p>
          </div>
        </FadeIn>

        {/* Packages */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((item, index) => (
            <FadeIn
              key={item.title}
              direction={index < 2 ? "left" : "right"}
            >
              <div
                className={[
                  "group relative flex min-h-full flex-col rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1",
                  item.highlight
                    ? "border-white bg-white text-neutral-950 shadow-[0_0_45px_rgba(255,255,255,0.12)]"
                    : "border-neutral-800 bg-neutral-900 text-white hover:border-neutral-600 hover:shadow-[0_0_35px_rgba(255,255,255,0.05)]",
                ].join(" ")}
              >
                {item.highlight && (
                  <div className="absolute right-5 top-5 rounded-full bg-neutral-950 px-3 py-1 text-xs text-white">
                    Empfehlung
                  </div>
                )}

                <p
                  className={[
                    "mb-4 text-sm uppercase tracking-[0.2em]",
                    item.highlight ? "text-neutral-500" : "text-neutral-500",
                  ].join(" ")}
                >
                  {item.label}
                </p>

                <h3 className="mb-4 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p
                  className={[
                    "mb-8 text-sm leading-relaxed",
                    item.highlight ? "text-neutral-600" : "text-neutral-400",
                  ].join(" ")}
                >
                  {item.description}
                </p>

                <div className="mb-8">
                  <p className="text-4xl font-semibold tracking-tight">
                    {item.price}
                  </p>
                </div>

                <ul className="mb-10 space-y-3 text-left text-sm">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className={[
                        "flex gap-3",
                        item.highlight ? "text-neutral-700" : "text-neutral-400",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full",
                          item.highlight ? "bg-neutral-950" : "bg-white",
                        ].join(" ")}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={createMailto(item.subject, item.body)}
                    className={[
                      "block w-full rounded-xl px-5 py-3 text-center text-sm font-medium transition",
                      item.highlight
                        ? "bg-neutral-950 text-white hover:bg-neutral-800"
                        : "bg-white text-neutral-950 hover:bg-neutral-200",
                    ].join(" ")}
                  >
                    {item.button}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Trust note */}
        <FadeIn>
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8 text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Nicht sicher, welches Paket passt?
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-neutral-400">
              Kein Problem — ich schaue mir dein Unternehmen, deine aktuelle
              Website und dein Ziel an und empfehle dir ehrlich, welcher Umfang
              sinnvoll ist.
            </p>

            <a
              href={createMailto(
                "Allgemeine Anfrage Webdesign",
                `Hallo Niklas,

ich bin mir noch nicht sicher, welches Paket am besten zu meinem Projekt passt.

---

Infos zu meinem Unternehmen:
Branche:
Aktuelle Website:
Ziel:

---

Viele Grüße`
              )}
              className="mt-7 inline-block rounded-xl border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-800"
            >
              Unverbindlich beraten lassen
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}