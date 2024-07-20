import { useState } from "react";
import { LOGO_LINK } from "../utils/links";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header= () =>{ 
    const [login, setLogin]= useState("login");

    const changeLogin= ()=>{
        if(login==="login"){
            setLogin("logout");
        }else{
            setLogin("login");
        }
        
    }

    const cartItems= useSelector((state)=>{
           return state.cart.items;
    })
    console.log("Hello");
    console.log(cartItems);

    return (<div className='flex justify-between  bg-gray-50 p-1'>
    <div>
       <img className="w-40" src={LOGO_LINK}/>
    </div>
    <div className = "flex items-center mx-8">
           <ul className="flex space-x-4">
           <li className="font-semibold text-lg">
              <Link to='/'>Home</Link> 
                </li>
            <li className="font-semibold text-lg">
            <Link to='/contact'>Contact us</Link>    
            </li>    
            <li className="font-semibold text-lg">
            <Link to='/about'>About Us
            </Link> 
            </li>
            
            <li className="font-semibold text-lg">
             <Link to="/cart">Cart-{cartItems.length}</Link>
            </li>
            <li className="font-semibold text-lg">
                <button onClick={changeLogin}>{login}</button>
            </li>
           </ul>
    </div>
    </div>
    );
}

export default Header;