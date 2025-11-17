import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Events(){
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", date: "", time: "", image_url: "", capacity: 50, price: 0 });

  const load = async () => {
    try { const r = await fetch(`${API}/api/events`); setEvents(await r.json()); } catch(e){ console.error(e); }
  };
  useEffect(()=>{ load(); },[]);

  const create = async (e) => {
    e.preventDefault();
    try { const r = await fetch(`${API}/api/events`, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ ...form, capacity: Number(form.capacity), price: Number(form.price) })}); if(r.ok){ setForm({ title: "", description: "", date: "", time: "", image_url: "", capacity: 50, price: 0 }); load(); } } catch(e){ console.error(e); }
  };

  const register = async (id) => {
    const name = prompt("Your name?");
    const email = prompt("Your email?");
    if(!name || !email) return;
    await fetch(`${API}/api/events/${id}/register`, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ event_id: id, name, email, tier: "guest" })});
    alert("Registered! We'll email you details.");
  };

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">Events</h1>
        <p className="text-white/80">Workshops, tastings and music nights.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {events.map((e)=> (
            <div key={e.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <img src={e.image_url || "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop"} alt={e.title} className="w-full h-40 object-cover"/>
              <div className="p-4">
                <h3 className="font-medium">{e.title}</h3>
                <p className="text-sm text-white/80">{e.description}</p>
                <p className="text-xs text-white/60">{e.date} {e.time}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-amber-300">{e.price > 0 ? `$${e.price}`: 'Free'}</span>
                  <button onClick={()=>register(e.id)} className="rounded-md bg-emerald-600 hover:bg-emerald-500 px-3 py-1 text-sm">Register</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-medium">Create Event</h2>
          <form onSubmit={create} className="grid md:grid-cols-2 gap-4 mt-4">
            <input required placeholder="Title" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
            <input type="number" min="0" step="0.01" placeholder="Price" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.price} onChange={e=>setForm({...form, price:e.target.value})}/>
            <input required type="date" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.date} onChange={e=>setForm({...form, date:e.target.value})}/>
            <input required type="time" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.time} onChange={e=>setForm({...form, time:e.target.value})}/>
            <input placeholder="Image URL" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.image_url} onChange={e=>setForm({...form, image_url:e.target.value})}/>
            <input type="number" min="1" placeholder="Capacity" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.capacity} onChange={e=>setForm({...form, capacity:e.target.value})}/>
            <textarea placeholder="Description" className="md:col-span-2 rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.description} onChange={e=>setForm({...form, description:e.target.value})}/>
            <div className="md:col-span-2"><button className="rounded-md bg-amber-600 hover:bg-amber-500 px-4 py-2">Save Event</button></div>
          </form>
        </div>
      </section>
    </main>
  )
}
