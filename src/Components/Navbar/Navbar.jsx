import React, { useContext, useState } from 'react'
import'./Navbar.css'
import logo from'../Assets/logo.png'
import cart_icon from'../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

   const [menu,setMenu]= useState("shop");
   const {getTotalCartItem}=useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo}alt=''/>
        <p>GlobalMart</p>
      </div>
     
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to=''>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("clothing")}}><Link style={{textDecoration:'none'}}to='/clothing'>Clothing</Link>{menu==="clothing"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("shoes")}}><Link style={{textDecoration:'none'}} to='/shoes'>Shoes</Link>{menu==="shoes"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("homeAccessories")}}><Link style={{textDecoration:'none'}} to='/homeAccessories'>Home Accessories</Link>{menu==="homeAccessories"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("cosmetics")}}><Link style={{textDecoration:'none'}} to='/cosmetics'>Cosmetics</Link>{menu==="cosmetics"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("gadgets")}}><Link style={{textDecoration:'none'}} to='/gadgets'>Gadgets</Link>{menu==="gadgets"?<hr/>:<></>}</li>
      </ul>
    <div className='nav-login-cart'>
      <button>Login</button>
      <Link to='/cart'><img src={cart_icon}/></Link>
     
      <div className='nav-cart-count'>{getTotalCartItem()}</div>
      </div> 
    
  </div>
  )
}

export default Navbar







