import React, { Fragment, useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import CartOrder from "./components/Cart/CartOrder";
import CartProvider from "./Store/CartProvider";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ProductDetail from "./Pages/ProductDetail";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import AuthContext from "./Store/auth-context";

function App() {
  const [cartItem, showCartItem] = useState(false);
  const authCtx = useContext(AuthContext);

  const showCartHandler = () => {
    showCartItem(true);
  };

  const hideCartHandler = () => {
    showCartItem(false);
  };
  return (
    <CartProvider>
      {cartItem && <CartOrder onHideCart={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <Banner />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/store">
          {authCtx.isLoggedIn && <Products />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/store/:productID">
          <ProductDetail />
        </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;
