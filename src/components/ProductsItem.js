import React, {Fragment, useContext} from 'react';
import {Link} from 'react-router-dom'
import './ProductsItem.css'
import CartContext from '../Store/cart-context'

const ProductItems = (props) => {
    const ctx = useContext(CartContext)
   
    const addToCartHandler = (event) => {
        event.preventDefault();

        ctx.addItem({...props.item})

        

    }
    return (
        <Fragment>
            <div className='product-item'>
            <div className='title'>{props.title}</div>
            <Link to={`/store/${props.id}`}><img alt={props.title} src={props.image}/></Link>
            <div className='price-btn'>
                <div>$ {props.price}</div>
                <button onClick={addToCartHandler}>Add To Cart</button>
            </div>
            </div>
        </Fragment>

    )

}

export default ProductItems