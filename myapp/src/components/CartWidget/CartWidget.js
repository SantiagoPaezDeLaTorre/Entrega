import React, {useContext} from "react";
import { CartContext } from "../CartContext";

import cartImage from '../../assets/images/carrito.png'


const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext)
    return (
        <div>
            <img className="cartWidget" src={cartImage} alt="cart" />
            <h5> {cantidadTotal} </h5>
        </div>

    )
}

export default CartWidget;