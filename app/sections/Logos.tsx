import FadeIn from "../components/FadeIn"

export default function Logos() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      
      <div className="h-px bg-neutral-800 mb-16"></div>

      <FadeIn>
        <p className="text-neutral-500 text-sm mb-10">
          Vertrauen von lokalen Unternehmen
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

        {["Logo 1", "Logo 2", "Logo 3", "Logo 4"].map((logo, index) => (
          <FadeIn key={index}>
            <div className="border border-neutral-800 bg-neutral-900 rounded-xl py-6 text-neutral-500 text-sm hover:border-neutral-600 transition">
              {logo}
            </div>
          </FadeIn>
        ))}

      </div>

    </section>
  )
}