import React, {Fragment,useState} from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Products from './components/Products';
import CartOrder from './components/Cart/CartOrder';
import CartProvider from './Store/CartProvider';
import {Route} from 'react-router-dom';
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer';

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
      <Route path='/home' component={Home}/>
      <Route path='/contact'>
        <ContactUs/>
      </Route>
      
      <Route path='/about'>
        <AboutUs/>
      </Route>
      <Route path='/store'>
      <Products/>
      </Route>
      <Footer/>
    </CartProvider>
  );
}

export default App;
