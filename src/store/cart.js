import React, { createContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';

//This is a context reference
const cartContext = createContext({
    items: [],
    cartTotal: 0
})

//This is a custom Provider Which manages the state of the Data
export const CartProvider = (props) => {

    //Reducer for the Cart
    const [cartData, dispatchCartAction] = useReducer(cartReducer, {
        items: [],
        cartTotal: 0,
    })

    //Method will be fired when adding the product to cart will be happen
    //This method will distributed to all the components whoever require the Cart Context
    const addToCart = (item) => {
        dispatchCartAction({
            type: "ADD_TO_CART",
            item: item
        })
    }
    //Method will be fired when adding the product to cart will be happen
    //This method will distributed to all the components whoever require the Cart Context
    const removeFromCart = (id) => {
        dispatchCartAction({
            type: "REMOVE_FROM_CART",
            id: id
        })
    }

    //Method will be fired when Order is Submitted
    const clearCart = () => {
        dispatchCartAction({
            type: "CLEAR_CART"
        })
    }
    //The actual context data which is distributed to all the cart context consumers
    const cartContextData = {
        ...cartData,
        addToCart,
        removeFromCart,
        clearCart
        //Here i need to add additional methods for changing the state of the cart
    }


    return <cartContext.Provider value={cartContextData}>
        {props.children}
    </cartContext.Provider>
}

export default cartContext