import React, { useState } from "react";
import {Link} from 'react-router-dom'

const ItemCounter = ({ stock, initial, onAddToCart }) => {
  
  const [counter, setCounter] = useState(1);
  
  const handlerCounterUp = () => {
    if (counter < stock) {
      setCounter(counter+1);
    }
    if (counter === stock) {
      alert("El stock es de " + (JSON.stringify(stock) + "."));
    }
  };
  
  const handlerCounterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="contador">
      <div className="contadorUp">

        <h4>Cantidad: {counter}</h4>
        <button className="contadorBtn" onClick={handlerCounterDown}> - </button>
        
        <button className="contadorBtn" onClick={handlerCounterUp}> + </button>
        
        <Link to="/cart" >
          <button className="contadorBtn comprarBtn" onClick={() => onAddToCart(counter)}> comprar </button>
        </Link>

      </div>
      
    </div>
  );
};

export default ItemCounter;
