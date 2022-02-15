import cartImage from '../../assets/images/carrito.png'

const CartWidget = () =>{
    return(
        <img className="cartWidget" src={cartImage} alt="cart"/>
    )
}

export default CartWidget;