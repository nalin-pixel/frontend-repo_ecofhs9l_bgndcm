import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Gallery(){
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({ title: "", image_url: "", description: "" });

  const load = async () => { const r = await fetch(`${API}/api/gallery`); setImages(await r.json()); };
  useEffect(()=>{ load(); },[]);

  const submit = async (e) => {
    e.preventDefault();
    const r = await fetch(`${API}/api/gallery`, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(form)});
    if(r.ok){ setForm({ title: "", image_url: "", description: "" }); load(); }
  };

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">Gallery</h1>
        <p className="text-white/80">Moments from our space.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {images.map((g)=> (
            <figure key={g.id} className="overflow-hidden rounded-xl border border-white/10">
              <img src={g.image_url} alt={g.title} className="w-full h-56 object-cover"/>
              <figcaption className="p-3 text-sm text-white/80">{g.title}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-medium">Add Image</h2>
          <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 mt-4">
            <input placeholder="Title" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
            <input required placeholder="Image URL" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.image_url} onChange={e=>setForm({...form, image_url:e.target.value})}/>
            <textarea placeholder="Description" className="md:col-span-2 rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.description} onChange={e=>setForm({...form, description:e.target.value})}/>
            <div className="md:col-span-2"><button className="rounded-md bg-amber-600 hover:bg-amber-500 px-4 py-2">Save</button></div>
          </form>
        </div>
      </section>
    </main>
  )
}
