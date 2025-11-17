import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reserve from "./pages/Reserve";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Order from "./pages/Order";

function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0b0b0b] text-white font-[Inter]">
        <NavBar/>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/reserve" element={<Reserve/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/order" element={<Order/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
