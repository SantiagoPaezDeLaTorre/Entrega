import React from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "../ItemDetail/ItemDetail.css"
import {Link} from 'react-router-dom';


const ItemDetail = ({ item, onAddToCart, counterRender, setCounterRender  }) => {
  let itemDetails = {};
  itemDetails = item[0];
  return (
    <div className="itemDetail">
      <div className="itemDetailLeft">
        <img src={itemDetails.img}></img>        
      </div>
      <div className="itemDetailRight">
        <h1>{itemDetails.nombre}</h1>
        <h2>$ {itemDetails.precio}</h2>
        { counterRender ? <ItemCounter item={item} stock={item[0].stock} onAddToCart={onAddToCart} counterRender={counterRender} setCounterRender={setCounterRender} /> 
          : <Link to="/cart" ><button > Finalizar compra </button></Link>}
      </div>
    </div>
  );
};

export default ItemDetail;
