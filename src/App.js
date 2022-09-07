import React, { Fragment, useContext, useState, Suspense } from "react";
// import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import CartOrder from "./components/Cart/CartOrder";
import CartProvider from "./Store/CartProvider";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import AuthContext from "./Store/auth-context";
import LoadingSpinner from "./components/LoadingSpinner";

const ContactUs = React.lazy(() => import("./Pages/ContactUs"));
const Home = React.lazy(() => import("./Pages/Home"));
const Navbar = React.lazy(() => import("./components/Navbar"));

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
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        {cartItem && <CartOrder onHideCart={hideCartHandler} />}
        <Navbar onShowCart={showCartHandler} />
        <Banner />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
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
      </Suspense>
    </CartProvider>
  );
}

export default App;
