import React, {Fragment} from 'react';
import ProductItems from './ProductsItem';

const productsArr = [
    {
    id: 1,    
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 1
    },
    {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 1
    },
    {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1
    },
    {
    id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 1
    }
    ]

const Products = (props) => {
   const productItems = productsArr.map((item) => 
       <ProductItems key={item.id} id={item.id} title={item.title} price={item.price} image={item.imageUrl} item={item}/>
     )
    return(
        <Fragment>
            <div className='product-card'>
            {productItems}
            </div>
        </Fragment>
    )

}

export default Products;