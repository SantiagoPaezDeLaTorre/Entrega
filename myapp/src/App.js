import React, {useState} from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "../src/views/Home/Home";
import Servicios from "./views/Servicios/Servicios";
import Contacto from "./views/Contacto/Contacto";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { CartProvider } from "./components/CartContext";

const App = () => {

  return (
    
    <Router>
      <CartProvider>
        <div className="contenedor"> 
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/categoria/:micategoria" element={<ItemListContainer />} />
            <Route path="/categoria/:micategoria/:id" element={<ItemDetailContainer />} />
            <Route path="/servicios" element={<Servicios/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
