import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/tienda/Inicio"
import Catalogo from "./pages/tienda/Catalogo"
import Contacto from "./pages/nosotros/Contacto"


const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App