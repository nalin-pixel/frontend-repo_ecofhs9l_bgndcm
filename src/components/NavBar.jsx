import { Link } from "react-router-dom";
import { Menu, Coffee, Calendar, ImageIcon, Newspaper, Phone, LogIn, ShoppingBag } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[rgba(18,18,18,0.6)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-widest text-xl">TETO</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/menu" className="hover:text-amber-300 flex items-center gap-2"><Coffee size={18}/> Menu</Link>
          <Link to="/reserve" className="hover:text-amber-300 flex items-center gap-2"><Calendar size={18}/> Book</Link>
          <Link to="/events" className="hover:text-amber-300 flex items-center gap-2"><Calendar size={18}/> Events</Link>
          <Link to="/gallery" className="hover:text-amber-300 flex items-center gap-2"><ImageIcon size={18}/> Gallery</Link>
          <Link to="/blog" className="hover:text-amber-300 flex items-center gap-2"><Newspaper size={18}/> Blog</Link>
          <Link to="/contact" className="hover:text-amber-300 flex items-center gap-2"><Phone size={18}/> Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/order" className="hidden sm:flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-sm"> <ShoppingBag size={16}/> Order</Link>
          <Link to="/auth" className="flex items-center gap-2 rounded-full bg-amber-600 hover:bg-amber-500 px-4 py-2 text-sm"> <LogIn size={16}/> Join / Login</Link>
          <button className="md:hidden p-2 rounded hover:bg-white/10" aria-label="menu"><Menu/></button>
        </div>
      </div>
    </header>
  );
}
