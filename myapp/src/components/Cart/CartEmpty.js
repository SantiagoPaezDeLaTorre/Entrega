import React from "react";
import { Link } from 'react-router-dom';
import "./CartEmpty.css";

const CartEmpty = () => {

    return (
        <div className="emptyCart" >
            <h3>No hay items en el carrito actualmente</h3>
            <div className="emptyCartBtns">
                <Link to="/categoria/perros">
                    <button> shop Perros </button>
                </Link>
                <Link to="/categoria/gatos">
                    <button> shop Gatos </button>
                </Link>
            </div>


        </div>
    );
}

export default CartEmpty;