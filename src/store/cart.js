import React, { createContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';

const cartContext = createContext({
    items: [],
    cartTotal: 0
})

export const CartProvider = (props) => {

    const [cartData, dispatchCartAction] = useReducer(cartReducer, {
        items: [],
        cartTotal: 0,
    })

    const addToCart = (item) => {
        dispatchCartAction({
            type: "ADD_TO_CART",
            item : item
        })
    }

    const removeFromCart = (id) => {
        dispatchCartAction({
            type:"REMOVE_FROM_CART",
            id:id
        })
    }

    const cartContextData = {
        ...cartData,
        addToCart,
        removeFromCart
        //Here i need to add additional methods for changing the state of the cart
    }
    
    
    return <cartContext.Provider value={cartContextData}>
        {props.children}
    </cartContext.Provider>
}

export default cartContext