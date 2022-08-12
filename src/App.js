import React, {Fragment,useState} from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Products from './components/Products';
import CartOrder from './components/Cart/CartOrder';
function App() {
  const [cartItem, showCartItem] = useState(false)

  const showCartHandler = () => {
    showCartItem(true);
  }

  const hideCartHandler = () => {
    showCartItem(false);
  }
  return (
    <Fragment>
      {cartItem && <CartOrder onHideCart={hideCartHandler}/>  }
      <Navbar onShowCart={showCartHandler}/>
      <Banner/>
      <Products/>
    </Fragment>
  );
}

export default App;
