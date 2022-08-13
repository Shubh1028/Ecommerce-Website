import React, {Fragment,useState} from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Products from './components/Products';
import CartOrder from './components/Cart/CartOrder';
import CartProvider from './Store/CartProvider';
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
      <Products/>
    </CartProvider>
  );
}

export default App;
