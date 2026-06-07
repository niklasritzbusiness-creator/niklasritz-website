"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="font-semibold text-lg tracking-tight">
            Niklas Ritz
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm text-neutral-400">
            <a href="#leistungen" className="hover:text-white transition">
              Leistungen
            </a>
            <a href="#ablauf" className="hover:text-white transition">
              Ablauf
            </a>
            <a href="#angebot" className="hover:text-white transition">
              Angebot
            </a>
            <a href="#kontakt" className="hover:text-white transition">
              Kontakt
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col justify-center items-end gap-1.5"
            aria-label="Menü öffnen"
          >
            <span className="block h-[2px] w-6 bg-white rounded-full"></span>
            <span className="block h-[2px] w-5 bg-white rounded-full"></span>
            <span className="block h-[2px] w-4 bg-white rounded-full"></span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            {/* Slide-in Panel */}
            <motion.aside
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[380px] bg-neutral-950 border-l border-neutral-800 z-50 md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
                <div className="text-white font-medium tracking-tight">
                  Menü
                </div>

                <button
                  onClick={closeMenu}
                  className="text-neutral-400 hover:text-white transition text-2xl leading-none"
                  aria-label="Menü schließen"
                >
                  ×
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col items-end text-right px-6 py-10 gap-8">
                <a
                  href="#leistungen"
                  onClick={closeMenu}
                  className="text-2xl text-neutral-300 hover:text-white transition tracking-tight"
                >
                  Leistungen
                </a>

                <a
                  href="#ablauf"
                  onClick={closeMenu}
                  className="text-2xl text-neutral-300 hover:text-white transition tracking-tight"
                >
                  Ablauf
                </a>

                <a
                  href="#angebot"
                  onClick={closeMenu}
                  className="text-2xl text-neutral-300 hover:text-white transition tracking-tight"
                >
                  Angebot
                </a>

                <a
                  href="#kontakt"
                  onClick={closeMenu}
                  className="text-2xl text-neutral-300 hover:text-white transition tracking-tight"
                >
                  Kontakt
                </a>
              </nav>

              {/* Bottom Area */}
              <div className="mt-auto px-6 pb-8 text-right">
                <p className="text-sm text-neutral-500">
                  Moderne Webseiten für Unternehmen
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}