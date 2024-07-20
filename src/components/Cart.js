import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";


const Cart= ()=>{
    const dispatch= useDispatch()
    const handleClearCart= ()=>{
        dispatch(clearCart())
    }
    const cartItems= useSelector((state)=> state.cart.items
    )
    return (
        <div className="w-6/12 m-auto  text-center"> 
            <h1 className="font-bold text-2xl text-center m-3">Cart</h1>
            <button className="bg-black text-white rounded-md px-2 py-1" onClick={handleClearCart}>Clear Cart</button>
            <ItemList items= {cartItems}/>
        </div>
        
    )
}

export default Cart;