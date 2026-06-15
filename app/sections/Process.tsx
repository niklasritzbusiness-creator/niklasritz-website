"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Analyse",
    text: "Wir schauen uns gemeinsam an, was dein Unternehmen braucht, welche Zielgruppe du erreichen willst und welche Rolle deine Website dabei spielen soll.",
  },
  {
    number: "02",
    title: "Konzept",
    text: "Ich entwickle eine klare Struktur, sinnvolle Inhalte und ein modernes Designkonzept, das Vertrauen schafft und Besucher gezielt zur Anfrage führt.",
  },
  {
    number: "03",
    title: "Umsetzung",
    text: "Die Website wird schnell, responsiv und sauber umgesetzt — mit Fokus auf Performance, mobile Nutzung und einem hochwertigen ersten Eindruck.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Nach finaler Abstimmung geht deine Website online und ist bereit, dein Unternehmen professionell zu präsentieren und neue Kunden zu gewinnen.",
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-48%"])

  return (
    <section
      id="ablauf"
      ref={sectionRef}
      className="relative overflow-hidden bg-neutral-950 px-6 py-32 md:h-[230vh] md:py-0"
    >
      {/* Mobile version */}
      <div className="mx-auto max-w-6xl md:hidden">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Ablauf
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Von der Idee zur Website, die wirkt.
          </h2>

          <p className="mt-6 leading-relaxed text-neutral-400">
            Ein klarer Prozess sorgt dafür, dass aus einer ersten Idee eine
            professionelle Website entsteht — strukturiert, verständlich und
            ohne unnötige Komplexität.
          </p>
        </div>

        <div className="grid gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-7"
            >
              <span className="text-sm text-neutral-500">{step.number}</span>

              <h3 className="mt-4 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-relaxed text-neutral-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop sticky horizontal version */}
      <div className="sticky top-0 hidden h-screen items-center md:flex">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Ablauf
            </p>

            <h2 className="text-5xl font-semibold tracking-tight text-white lg:text-6xl">
              Ein klarer Prozess macht aus einer Idee eine Website, die wirkt.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-400">
              Von der ersten Analyse bis zum Launch entsteht deine Website
              Schritt für Schritt — strategisch, modern und auf echte Anfragen
              ausgerichtet.
            </p>
          </div>

          <div className="relative">
            {/* subtle track line */}
            <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-neutral-800 lg:block" />

            <motion.div style={{ x }} className="relative flex items-stretch">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={[
                    "relative min-w-[420px] rounded-[2rem] border border-neutral-800 bg-neutral-900 p-8 shadow-2xl shadow-black/30 transition duration-300 hover:border-neutral-600",
                    index !== 0 ? "-ml-14" : "",
                  ].join(" ")}
                  style={{
                    zIndex: steps.length + index,
                  }}
                >
                  <div className="mb-16 flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      {step.number}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-6 leading-relaxed text-neutral-400">
                    {step.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-between text-sm text-neutral-500">
            <span>Scrollen, um den Prozess zu entdecken</span>
            <span>01 — 04</span>
          </div>
        </div>
      </div>
    </section>
  )
}