import React, { Fragment, useContext } from "react";
import {NavLink} from 'react-router-dom';
import "./Navbar.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import CartContext from "../Store/cart-context";

const Navbar = (props) => {
  const ctx = useContext(CartContext)
  let quantity = 0;
  ctx.items.map((item) => {
    quantity += item.quantity
  })
  return <Fragment>
    {/* <div className="container">
      
    </div> */}
     <nav className="container">
        <div className="container-section">
        <NavLink activeClassName="active" className='links' to='/home'><div>Home</div></NavLink>
        <NavLink activeClassName="active" className='links' to='/store'><div>Store</div></NavLink>
        <NavLink activeClassName="active" className='links' to='/about'><div>About</div></NavLink>
        </div>
        <div className="cart-cred" onClick={props.onShowCart}>
            <div><BsFillCartCheckFill/><span>{quantity}</span></div>
        </div>
     
    </nav>
  </Fragment>;
};

export default Navbar;
