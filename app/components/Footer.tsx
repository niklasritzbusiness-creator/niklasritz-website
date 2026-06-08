export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-neutral-800 mt-24">
      <div className="max-w-6xl mx-auto text-center text-neutral-500 text-sm space-y-4">
        
        <p>© {new Date().getFullYear()} Niklas Ritz</p>

        <div className="flex justify-center gap-6">
          <a href="impressum" className="hover:text-white transition">Impressum</a>
          <a href="datenschutz" className="hover:text-white transition">Datenschutz</a>
        </div>

      </div>
    </footer>
  )
}