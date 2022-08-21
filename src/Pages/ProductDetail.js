// import {Fragment} from 'react'
// import {useParams} from 'react-router-dom'

// const ProductDetail = () => {
//     const params = useParams()
//     return (
//         <Fragment>
//         <div>Product Detail</div>
//         <p>{params.productID}</p>
//         </Fragment>
//     )

// }
// export default ProductDetail


import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
// import ContactUs from "../../screens/ContactUs";
import "./ProductDetail.css";

const PRODUCTS_ARR = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetail = () => {
  const params = useParams();
  const product = PRODUCTS_ARR.find((product) => product.id === +params.productID);
  console.log(params.productID);
  return (
    <Fragment>
      <section className="products-page">
        <img src={product.imageUrl} alt={product.title} />
        <div className="product-detail">
          <h2>Product:</h2>
          <p>{product.title}</p>
          <h3><span>Price: </span>${product.price}</h3>
          <h5>This music CD features four songs: "Bumblebee," "Tricycle," "Pizza," and "Tickle." The song "Bumblebee" is about a small bumblebee who learns to fly and doesn't need anyone's help. The song "Tricycle" is about a little girl who rides her tricycle to the store and buys a treat. The song "Pizza" is about a hungry pizza who eats all the pizza in the world and then goes to sleep</h5>
        </div>
      </section>
    </Fragment>
  )
};

export default ProductDetail;