import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './CartOrder.module.css';
import CartItem from './CartItem';

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    

const CartOrder = (props) => {

//   const ctx = useContext(CartContext)

//   const removeHandler = (id) => {
//     ctx.removeItem(id);
//   }


  // console.log(ctx.items)
  // const amount = ctx.totalAmount
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartElements.map((item) => ( 
       <CartItem  title={item.title} price={item.price} quantity={item.quantity}/>
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
        <span>Rs 0</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default CartOrder;