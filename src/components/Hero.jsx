export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid place-items-center text-white">
      <img
        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
        alt="TETO coffee steam"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0b0b0b]"></div>
      <div className="relative max-w-3xl mx-auto text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">TETO Coffee</h1>
        <p className="mt-4 text-lg md:text-xl text-amber-100/90">Premium. Cozy. Community. Crafted with care in every cup.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="/menu" className="rounded-full bg-amber-600 hover:bg-amber-500 px-6 py-3">View Menu</a>
          <a href="/reserve" className="rounded-full bg-emerald-600 hover:bg-emerald-500 px-6 py-3">Book a Table</a>
          <a href="/auth" className="rounded-full bg-white/10 hover:bg-white/20 px-6 py-3">Join / Login</a>
        </div>
      </div>
    </section>
  );
}
