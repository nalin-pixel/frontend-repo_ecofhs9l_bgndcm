import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Menu(){
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", price: "", category: "coffee", image_url: "" });

  const load = async () => {
    try {
      const res = await fetch(`${API}/api/menu`);
      const data = await res.json();
      setItems(data);
    } catch (e) { console.error(e); }
  };

  useEffect(() => { load(); }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/menu`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, price: parseFloat(form.price) }) });
      if(res.ok){ setForm({ title: "", description: "", price: "", category: "coffee", image_url: "" }); load(); }
    } catch (e) { console.error(e); }
  };

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">Menu</h1>
        <p className="text-white/80">Explore our crafted beverages and bakes.</p>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {items.map((i, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <img src={i.image_url || "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"} alt={i.title} className="w-full h-40 object-cover"/>
              <div className="p-4">
                <div className="flex items-center justify-between"><h3 className="font-medium">{i.title}</h3><span className="text-amber-400">${i.price?.toFixed?.(2) || i.price}</span></div>
                <p className="text-sm text-white/80">{i.description}</p>
                <span className="text-xs uppercase text-white/60">{i.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-medium">Add / Update Menu Item</h2>
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 mt-4">
            <input required className="rounded-md bg-white/5 border border-white/10 px-3 py-2" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
            <input required type="number" min="0" step="0.01" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" placeholder="Price" value={form.price} onChange={e=>setForm({...form, price:e.target.value})}/>
            <input className="md:col-span-2 rounded-md bg-white/5 border border-white/10 px-3 py-2" placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})}/>
            <select className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}>
              <option value="coffee">Coffee drinks</option>
              <option value="pastry">Pastries</option>
              <option value="special">Specials</option>
              <option value="seasonal">Seasonal</option>
            </select>
            <input className="rounded-md bg-white/5 border border-white/10 px-3 py-2" placeholder="Image URL (optional)" value={form.image_url} onChange={e=>setForm({...form, image_url:e.target.value})}/>
            <div className="md:col-span-2">
              <button className="rounded-md bg-amber-600 hover:bg-amber-500 px-4 py-2">Save Item</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
