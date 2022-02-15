import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "../ItemDetail/ItemDetail.css"


const ItemDetail = ({ itemDetails, onAddToCart, counterRender, setCounterRender }) => {
console.log(counterRender);

  return (
    <div className="itemDetail">
      <div className="itemDetailLeft">
        <img src={itemDetails.img}></img>        
      </div>
      <div className="itemDetailRight">
        <h1>{itemDetails.nombre}</h1>
        <h2>$ {itemDetails.precio}</h2>
        { counterRender ? <ItemCounter stock={itemDetails.stock} initial={1} onAddToCart={onAddToCart} counterRender={counterRender} setCounterRender={setCounterRender} />  : <p> </p> }
      </div>
    </div>
  );
};

export default ItemDetail;
