import React, {Fragment, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './ProductsItem.css'
import CartContext from '../Store/cart-context'
import AuthContext from '../Store/auth-context';

const ProductItems = (props) => {
    const ctx = useContext(CartContext)
    const authCtx = useContext(AuthContext)
    // let userName = localStorage.getItem('email')
    // let t = "";
    // for (let i = 0; i < userName.length; i++) {
    //   if (userName[i] == '.' || userName[i] == '@') {
    //     continue;
    //   }
    //   else {
    //     t += userName[i];
    //   }
    // }
    // userName = t;
    // let cartProducts = []
    // useEffect(() => {
    //     fetch(`https://shubh-s-ecommerce-default-rtdb.firebaseio.com/ecommerce/cart/${userName}.json`)
    //     .then(res =>{return res.json()})
    //     .then(data =>  { let newArr = Object.entries(data)
    //     for(let i =0; i<newArr.length; i++) {
    //       cartProducts.push(newArr[i][1]) 
    //     }
        
    //     })
    // }, [])

    
   
    // const addToCartHandler = (event) => {
    //     event.preventDefault();

    //     fetch(`https://shubh-s-ecommerce-default-rtdb.firebaseio.com/ecommerce/cart/${userName}.json`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             ...props.item,
    //             returnSecureToken: true
    //         }),
    //         headers:{ 
    //             'Content-Type': 'application/json'
    //          }
    //     })
    //     .then( res => {
    //         if(res.ok) {

    //         } else {
    //           return res.json().then(data => {
    //             alert(data.error.message);
    //           });
    //         }
    //       })    
        
        
    // }

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