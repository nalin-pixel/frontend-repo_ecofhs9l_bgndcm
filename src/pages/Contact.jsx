const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact(){
  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    const r = await fetch(`${API}/api/contact`, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload)});
    if(r.ok){ alert("Thanks for reaching out. We'll get back to you soon."); e.currentTarget.reset(); }
  };

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl font-semibold">About TETO</h1>
          <p className="text-white/80 mt-3">We’re a neighborhood coffee house focused on warmth, craft and community. Our beans are ethically sourced and roasted weekly. Come for the coffee, stay for the people.</p>
          <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086093355557!2d-122.420679!3d37.779026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzQ0LjUiTiAxMjLCsDI1JzE0LjQiVw!5e0!3m2!1sen!2sus!4v1617040187881" width="100%" height="280" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className="mt-3 text-sm text-white/80">Open daily 7:00–20:00</div>
        </div>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-medium">Contact us</h2>
          <form onSubmit={submit} className="grid gap-4 mt-4">
            <input name="name" required placeholder="Your name" className="rounded-md bg-white/5 border border-white/10 px-3 py-2"/>
            <input name="email" required type="email" placeholder="Email" className="rounded-md bg-white/5 border border-white/10 px-3 py-2"/>
            <select name="topic" className="rounded-md bg-white/5 border border-white/10 px-3 py-2">
              <option value="general">General</option>
              <option value="event">Event inquiry</option>
              <option value="menu">Menu feedback</option>
            </select>
            <textarea name="message" rows={5} required placeholder="Message" className="rounded-md bg-white/5 border border-white/10 px-3 py-2"/>
            <div><button className="rounded-md bg-amber-600 hover:bg-amber-500 px-4 py-2">Send</button></div>
          </form>
        </div>
      </section>
    </main>
  )
}
