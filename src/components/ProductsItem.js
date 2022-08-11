import React, {Fragment} from 'react';
import './ProductsItem.css'

const ProductItems = (props) => {
    return (
        <Fragment>
            <div className='product-item'>
            <div className='title'>{props.title}</div>
            <img src={props.image}/>
            <div className='price-btn'>
                <div>$ {props.price}</div>
                <button>Add To Cart</button>
            </div>
            </div>
        </Fragment>

    )

}

export default ProductItems