export default function Footer(){
  return (
    <footer className="bg-[#0b0b0b] text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold">TETO</h3>
          <p className="mt-2 text-sm">A premium yet cozy coffee house in the heart of your neighborhood.</p>
        </div>
        <div>
          <h4 className="text-white font-medium">Visit</h4>
          <p className="text-sm mt-2">123 Brew Lane, Roastery District<br/>Open daily 7:00–20:00</p>
        </div>
        <div>
          <h4 className="text-white font-medium">Newsletter</h4>
          <form id="newsletter" className="mt-2 flex gap-2">
            <input name="email" required type="email" placeholder="you@example.com" className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-amber-500" />
            <button className="rounded-md bg-amber-600 hover:bg-amber-500 px-4 text-sm">Join</button>
          </form>
          <p className="text-xs mt-2">By subscribing, you agree to receive updates from TETO.</p>
        </div>
        <div>
          <h4 className="text-white font-medium">Social</h4>
          <div className="flex gap-3 mt-2 text-sm">
            <a href="#" className="hover:text-amber-300">Instagram</a>
            <a href="#" className="hover:text-amber-300">Facebook</a>
            <a href="#" className="hover:text-amber-300">X</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} TETO Coffee. All rights reserved.</div>
    </footer>
  )
}
