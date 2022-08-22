import React, { Fragment, useCallback, useContext } from "react";
import {NavLink,useHistory} from 'react-router-dom';
import "./Navbar.css";
import { BsFillCartCheckFill, BsBoxArrowRight } from "react-icons/bs";
import CartContext from "../Store/cart-context";
import AuthContext from "../Store/auth-context";

const Navbar = (props) => {
  const history = useHistory()
  const ctx = useContext(CartContext)
  const authCtx = useContext(AuthContext)
  let quantity = 0;
  ctx.items.map((item) => {
    quantity += item.quantity
  })

  const onLogoutHandler = () => {
    authCtx.logout()
    console.log('click')
  }

 
  return <Fragment>
    {/* <div className="container">
      
    </div> */}
     <nav className="container">
        <div className="container-section">
        <NavLink activeClassName="active" className='links' to='/home'><div>Home</div></NavLink>
        <NavLink activeClassName="active" className='links' to='/store'><div>Store</div></NavLink>
        <NavLink activeClassName="active" className='links' to='/about'><div>About</div></NavLink>
        <NavLink activeClassName="active" className='links' to='/login'><div>Login</div></NavLink>
        <NavLink activeClassName="active" className='links' to='/contact'><div>Contact Us</div></NavLink>
        </div>
      {authCtx.isLoggedIn && <div className="cart-cred" onClick={props.onShowCart}>
            <div><BsFillCartCheckFill/><span>{quantity}</span></div>
        </div> }
        {authCtx.isLoggedIn &&  <div className="cart-cred">
            <div onClick={onLogoutHandler}><BsBoxArrowRight/></div>
        </div> }
     
    </nav>
  </Fragment>;
};

export default Navbar;
