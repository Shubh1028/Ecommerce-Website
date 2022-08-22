import React, {Fragment,useState} from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Products from './components/Products';
import CartOrder from './components/Cart/CartOrder';
import CartProvider from './Store/CartProvider';
import {Route, Switch} from 'react-router-dom';
import AboutUs from './Pages/AboutUs'
import ProductDetail from './Pages/ProductDetail';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer';
import Login from './Pages/Login';


function App() {
  const [cartItem, showCartItem] = useState(false)

  const showCartHandler = () => {
    showCartItem(true);
  }

  const hideCartHandler = () => {
    showCartItem(false);
  }
  return (
    <CartProvider>
      {cartItem && <CartOrder onHideCart={hideCartHandler}/>  }
      <Navbar onShowCart={showCartHandler}/>
      <Banner/>
      <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/contact'>
        <ContactUs/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      
      <Route path='/about'>
        <AboutUs/>
      </Route>
      <Route path='/store' exact>
      <Products/>
      </Route>
      <Route path='/store/:productID'>
        <ProductDetail/>
      </Route>
      </Switch>
      <Footer/>
    </CartProvider>
  );
}

export default App;
