import React, {Fragment} from 'react';
import ProductItems from './ProductsItem';

const productsArr = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]

const Products = (props) => {
   const productItems = productsArr.map((item) => 
       <ProductItems title={item.title} price={item.price} image={item.imageUrl}/>
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