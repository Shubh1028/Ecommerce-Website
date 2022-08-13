import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './CartOrder.module.css';
import CartItem from './CartItem';
import CartContext from '../../Store/cart-context'
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 1,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 1,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    

const CartOrder = (props) => {

  const ctx = useContext(CartContext)
  console.log(ctx.items)

  const removeHandler = (id) => {
    ctx.removeItem(id);
  }


  // console.log(ctx.items)

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => ( ctx.totalAmount += item.quantity * item.price,
       <CartItem  title={item.title} price={item.price} quantity={item.quantity} onRemove={removeHandler.bind(null,item.id)}/>
      ))}
    </ul>
  );

  return (
    <Modal>
      <div className={classes.itemsHeading}>
      <div>Item</div>
      <div>Price</div>
      <div> Qauntity</div>
      <div></div>
      </div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {ctx.totalAmount/2}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default CartOrder;