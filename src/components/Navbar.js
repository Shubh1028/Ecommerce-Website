import React, { Fragment } from "react";
import "./Navbar.css";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = (props) => {
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
            <div><BsFillCartCheckFill/><span>1</span></div>
        </div>
     
    </nav>
  </Fragment>;
};

export default Navbar;
