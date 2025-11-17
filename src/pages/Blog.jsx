import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Blog(){
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", image_url: "", tags: "" });

  const load = async () => { const r = await fetch(`${API}/api/blog`); setPosts(await r.json()); };
  useEffect(()=>{ load(); },[]);

  const submit = async (e) => {
    e.preventDefault();
    const payload = { ...form, tags: form.tags.split(",").map(t=>t.trim()).filter(Boolean) };
    const r = await fetch(`${API}/api/blog`, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload)});
    if(r.ok){ setForm({ title: "", content: "", image_url: "", tags: "" }); load(); }
  };

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold">News & Stories</h1>
        <p className="text-white/80">Updates from the TETO team.</p>

        <div className="grid gap-6 mt-8">
          {posts.map((p)=> (
            <article key={p.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              {p.image_url && <img src={p.image_url} alt={p.title} className="w-full h-56 object-cover"/>}
              <div className="p-5">
                <h3 className="text-xl font-medium">{p.title}</h3>
                <p className="text-sm text-white/80 mt-2 whitespace-pre-wrap">{p.content}</p>
                <div className="text-xs text-white/60 mt-2">{p.published_at && new Date(p.published_at).toLocaleString()}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-white/5 rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-medium">Write a Post</h2>
          <form onSubmit={submit} className="grid gap-4 mt-4">
            <input required placeholder="Title" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
            <input placeholder="Image URL" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.image_url} onChange={e=>setForm({...form, image_url:e.target.value})}/>
            <textarea required rows={6} placeholder="Content" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.content} onChange={e=>setForm({...form, content:e.target.value})}/>
            <input placeholder="Tags (comma separated)" className="rounded-md bg-white/5 border border-white/10 px-3 py-2" value={form.tags} onChange={e=>setForm({...form, tags:e.target.value})}/>
            <div><button className="rounded-md bg-amber-600 hover:bg-amber-500 px-4 py-2">Publish</button></div>
          </form>
        </div>
      </section>
    </main>
  )
}
