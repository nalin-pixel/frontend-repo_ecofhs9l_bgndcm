import { useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Auth(){
  const [mode, setMode] = useState("login");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email");
    const password = fd.get("password");
    if(mode === "register"){
      const name = fd.get("name");
      const r = await fetch(`${API}/api/auth/register?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, { method: "POST" });
      if(r.ok) setMsg("Registered! You can login now."); else setMsg("Registration failed");
    } else {
      const r = await fetch(`${API}/api/auth/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, { method: "POST" });
      const data = await r.json();
      if(r.ok){ localStorage.setItem("teto_user", JSON.stringify(data)); setMsg(`Welcome back, ${data.name}`); }
      else setMsg(data?.detail || "Login failed");
    }
  };

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen grid place-items-center px-4">
      <div className="w-full max-w-md bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setMode("login")} className={`px-3 py-1 rounded ${mode==='login'?'bg-amber-600':'bg-white/10'}`}>Login</button>
          <button onClick={()=>setMode("register")} className={`px-3 py-1 rounded ${mode==='register'?'bg-amber-600':'bg-white/10'}`}>Register</button>
        </div>
        <form onSubmit={onSubmit} className="grid gap-4">
          {mode==='register' && <input name="name" required placeholder="Full name" className="rounded-md bg-white/5 border border-white/10 px-3 py-2"/>}
          <input name="email" required type="email" placeholder="Email" className="rounded-md bg-white/5 border border-white/10 px-3 py-2"/>
          <input name="password" required type="password" placeholder="Password" className="rounded-md bg-white/5 border border-white/10 px-3 py-2"/>
          <button className="rounded-md bg-emerald-600 hover:bg-emerald-500 px-4 py-2">{mode==='login'? 'Login' : 'Create account'}</button>
        </form>
        {msg && <p className="mt-3 text-amber-300 text-sm">{msg}</p>}
      </div>
    </main>
  )
}
