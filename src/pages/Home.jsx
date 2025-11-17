import Hero from "../components/Hero";

export default function Home(){
  return (
    <main className="bg-[#0b0b0b] text-white">
      <Hero/>
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-medium">Sourced with care</h3>
          <p className="text-sm mt-2 text-white/80">We partner directly with farmers and roast in small batches for peak flavor.</p>
        </div>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-medium">Crafted for community</h3>
          <p className="text-sm mt-2 text-white/80">Your third space for meetups, music nights, and coffee workshops.</p>
        </div>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-medium">Sustainably delicious</h3>
          <p className="text-sm mt-2 text-white/80">From reusables to responsible sourcing, we brew a better future.</p>
        </div>
      </section>
    </main>
  )
}
