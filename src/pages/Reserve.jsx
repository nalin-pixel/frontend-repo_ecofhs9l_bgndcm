import { useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Reserve(){
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", guests: 2, special_requests: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    if(!form.date || !form.time) { setMsg("Please select date and time"); return; }
    try {
      const res = await fetch(`${API}/api/reservations`, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ ...form, guests: Number(form.guests) })});
      const data = await res.json();
      if(res.ok){ setMsg("Reservation confirmed. Check your email for details."); setForm({ name: "", email: "", date: "", time: "", guests: 2, special_requests: "" }); }
      else { setMsg(data?.detail || "Something went wrong"); }
    } catch(e){ setMsg("Network error"); }
  }

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold">Book a Table</h1>
        <p className="text-white/80">Choose a date, time and we’ll prepare your spot.</p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <input required placeholder="Full name" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
          <input required type="email" placeholder="Email" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
          <div className="grid grid-cols-2 gap-4">
            <input required type="date" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.date} onChange={e=>setForm({...form, date:e.target.value})}/>
            <input required type="time" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.time} onChange={e=>setForm({...form, time:e.target.value})}/>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input required type="number" min="1" max="12" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.guests} onChange={e=>setForm({...form, guests:e.target.value})}/>
            <input placeholder="Special requests (optional)" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.special_requests} onChange={e=>setForm({...form, special_requests:e.target.value})}/>
          </div>
          <button className="rounded-md bg-emerald-600 hover:bg-emerald-500 px-4 py-2">Confirm Reservation</button>
        </form>
        {msg && <p className="mt-4 text-amber-300">{msg}</p>}
      </section>
    </main>
  )
}
