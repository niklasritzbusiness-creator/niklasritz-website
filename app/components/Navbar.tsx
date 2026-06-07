"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="font-semibold text-lg">
          Niklas Ritz
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm text-neutral-400">
          <a href="#leistungen">Leistungen</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#angebot">Angebot</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          <div className="flex flex-col gap-1">
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
            <span className="w-5 h-[2px] bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800 px-6 py-6 space-y-4 text-center animate-fadeIn">
          <a href="#leistungen" onClick={() => setOpen(false)}>Leistungen</a>
          <br />
          <a href="#ablauf" onClick={() => setOpen(false)}>Ablauf</a>
          <br />
          <a href="#angebot" onClick={() => setOpen(false)}>Angebot</a>
          <br />
          <a href="#kontakt" onClick={() => setOpen(false)}>Kontakt</a>
        </div>
      )}

    </header>
  )
}