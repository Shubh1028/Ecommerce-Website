import React, {useState} from 'react';

import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, updateItem] = useState([])
    const addItemToCartHandler = (newItem) => {
        // updateItem([...items, newItem])  
        const existingItemId = items.findIndex(item => item.id === newItem.id)

        const existingCartItem = items[existingItemId];

        if(existingCartItem) {
            items.map(item => {
                if(item === existingCartItem) {
                    item.quantity += newItem.quantity
                }
            })
            updateItem([...items])
         
        } else {
        updateItem([...items, newItem])
        }
    }

    const removeItemToCartHandler = (id) => {
        let updatedItems = []
        items.map(item => {
            if(item.id === id && item.quantity >= 1) {
                item.quantity = item.quantity -1;
            }
            if(item.quantity > 0) {
                updatedItems.push(item)
            }
        })
        // console.log([...items])
        updateItem(updatedItems)
    }

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler

    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;