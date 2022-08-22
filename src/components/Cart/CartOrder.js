import React, {useContext, useEffect, useState} from 'react';
import Modal from '../UI/Modal';
import classes from './CartOrder.module.css';
import CartItem from './CartItem';
import CartContext from '../../Store/cart-context'

    

const CartOrder = (props) => {

  const ctx = useContext(CartContext)
  // const [productItems, setItems] = useState([]);
  // const cartProducts = []


  // let username = localStorage.getItem("email");
  // let t = "";
  // for (let i = 0; i < username.length; i++) {
  //   if (username[i] === '.' || username[i] === '@') {
  //     continue;
  //   }
  //   else {
  //     t += username[i];
  //   }
  // }
  // username = t;


  // useEffect(() => {
  //   fetch(`https://shubh-s-ecommerce-default-rtdb.firebaseio.com/ecommerce/cart/${username}.json`)
  //   .then(data => {
  //     return data.json();
  //     })
  //     .then(post => {
  //     let newArr = Object.entries(post)
  //     for(let i =0; i<newArr.length; i++) {
  //       cartProducts.push(newArr[i][1]) 
  //     }
  //     setItems([...cartProducts])
  //      }
  //     )
  // }, []);

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
        <span>$ {ctx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default CartOrder;