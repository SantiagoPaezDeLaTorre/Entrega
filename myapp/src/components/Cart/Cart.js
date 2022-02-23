import React, { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import CartEmpty from "./CartEmpty";
import "./Cart.css";

const CartContainer = () => {
    const { cart, setCart, removeItem, precioTotal, cantidadTotal} = useContext(CartContext);

    //useEffect para ver mi cart cada vez que es modificado
    useEffect(
        () => {
            console.log(cart);
        }
        , [cart])

    return (
        <div>
            <div className="cartContainer-items" className={cantidadTotal}>
                <h1>CART</h1>
                <div className="cartContainer">
                    {cart.map((item) =>
                        <div key={item.id} className="cartCard">
                            <div className="cartCardImg">
                                <img src={item.img}></img>
                            </div>
                            <div className="cartCardData">
                                <div className="cartCardName">
                                    <p className="aaa">{item.nombre}</p>
                                </div>
                                <div className="cartCardCantidad">
                                    <b>x {item.cantidad}</b>
                                </div>
                            </div>
                            <div className="cartCardPrice">
                                <p>${item.cantidad * item.precio}</p>
                            </div>
                            <div className="cartItemRemover">
                                <button onClick={() => removeItem(item.id)}> x</button>
                            </div>
                        </div>)}
                </div>
                <div className="emptyCartBtn" >
                    {(cantidadTotal!==0)? <button onClick={() => setCart([])}> Vaciar carrito</button> : <p></p>}
                    
                </div>
                <div className="precioTotal">{(cantidadTotal!==0)?<h3>PRECIO TOTAL: {precioTotal}</h3>: <p></p>}</div>
            </div>
            {cart.length == 0 ? <CartEmpty/> : <p></p>}
        </div>

    );
};

export default CartContainer;
