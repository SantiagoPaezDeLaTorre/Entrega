import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "../src/views/Home/Home";
import Perros from "../src/views/Perros/Perros";
import Gatos from "../src/views/Gatos/Gatos";
import Servicios from "./views/Servicios/Servicios";
import Contacto from "./views/Contacto/Contacto";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

const App = () => {
  const [showDetail, setShowDetail] = useState("");

  return (
    <Router>
      <div className="contenedor">

        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/perros" element={<Perros showDetail={showDetail} setShowDetail={setShowDetail}/>} />
          <Route path="/gatos" element={<Gatos  showDetail={showDetail} setShowDetail={setShowDetail}/>} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
