import FadeIn from "../components/FadeIn"

export default function Hero() {
  return (
    <section className="relative text-center py-32 px-6">

        <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full"></div>
        </div>

      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight">
          Moderne Webseiten für lokale Unternehmen
        </h1>
      </FadeIn>

      <FadeIn>
        <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-8">
          Ich erstelle schnelle, elegante Websites für kleine Unternehmen in Karlsruhe und Umgebung.
        </p>
      </FadeIn>

      <FadeIn>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition shadow-lg shadow-white/5">
          Kostenloses Erstgespräch
        </button>
      </FadeIn>
      <div className="mt-12 flex justify-center">
  <img
      src="/images/your-photo.jpg"
      alt="Niklas Ritz"
      className="w-36 h-36 rounded-full object-cover border border-neutral-700 shadow-lg"
    />
  </div>

    </section>
  )
}