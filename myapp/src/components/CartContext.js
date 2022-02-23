import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);
    let isEmpty = "carritoVacio";

    const addItemsToCart = (item, cantidad) => {
        let itemDetails = item[0];
        console.log("itemDetails", itemDetails);
        setCart((prevState) => {
            //Verifico que un item no esté antes de agregar el objeto entero
            let alreadyOnCart = prevState.findIndex(obj => obj.id == itemDetails.id);
            if (alreadyOnCart == -1) {
                prevState = [...prevState, { ...item, cantidad }]
            }
            else {
                prevState[alreadyOnCart].cantidad += cantidad
            }
            return prevState;
        });

    }

    useEffect(() => {
        //Calculo la cantidad de items, este valor irá al cartWidget
        let totalItems = cart.reduce((a, b) => a + b.cantidad, 0);
        setCantidadTotal(totalItems);
        //Calculo el importe total de compra
        let totalPrice = 0;
        for (let item of cart){
            let precioT = item.precio*item.cantidad;
            totalPrice += precioT;
        }
        setPrecioTotal(totalPrice);
    }, [cart])

    function removeItem(itemId) {
        setCart((prevState) => prevState.filter(item => item.id != itemId))
    }



    return (
        <CartContext.Provider value={{ cart, setCart, addItemsToCart, removeItem, cantidadTotal, precioTotal}}>
            {children}
        </CartContext.Provider>
    )
}