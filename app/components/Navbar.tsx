export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="font-semibold text-lg">
          Niklas Ritz
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-neutral-400">
          <a href="#leistungen" className="hover:text-white transition">Leistungen</a>
          <a href="#ablauf" className="hover:text-white transition">Ablauf</a>
          <a href="#angebot" className="hover:text-white transition">Angebot</a>
          <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
        </nav>

      </div>
    </header>
  )
}