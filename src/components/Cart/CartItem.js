import classes from './CartItem.module.css';
import { AiOutlineClose } from "react-icons/ai";

const CartItem = (props) => {
  const price = `Rs${props.price.toFixed(2)}`;

  return (
    <li>
      <div className={classes.cartItem}>
        <div>{props.title}</div>
        <div>{props.price}</div>
        <div>{props.quantity}</div>
        <div><AiOutlineClose/></div>
        {/* <h2>{props.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button> */}
      </div>
    </li>
  );
};

export default CartItem;
