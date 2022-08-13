import React, { Fragment, useContext } from "react";
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
        <div>Home</div>
        <div>Store</div>
        <div>About</div>
        </div>
        <div className="cart-cred" onClick={props.onShowCart}>
            <div><BsFillCartCheckFill/><span>{quantity}</span></div>
        </div>
     
    </nav>
  </Fragment>;
};

export default Navbar;
