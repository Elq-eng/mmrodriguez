import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import { Inicio } from "./pages/Inicio";
import { Planes } from "./pages/Planes";
import Servicio from "./pages/Servicio";
import { Tienda } from "./pages/Tienda";
import './index.css'


function App() {

  return (
    <>
      <Navbar/>          
            <Routes>
              <Route path="/" element={ <Inicio/> } />
              <Route path="/Blog" element={ <Blog/> } />
              <Route path="/Planes" element={ <Planes/> } />
              <Route path="/Servicio" element={ <Servicio/> } />
              <Route path="/Tienda" element={ <Tienda/> } />
            </Routes>
      <Footer/>
    </>
  )
}

export default App
