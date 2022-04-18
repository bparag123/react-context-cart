//This is a function which will handle the state for the adding products to cart
const addToCartHepler = (state, action) => {
    //Finding if the Product is in the cart or not
    const indexOfProduct = state.items.findIndex((ele) => {
        return ele.productName === action.item.productName
    })
    //Calculating the Total
    let newTotal = state.cartTotal + action.item.price * action.item.quantity
    //modifying the quantity for existing product
    if (indexOfProduct >= 0) {
        state.items[indexOfProduct].quantity += action.item.quantity
        return { items: state.items, cartTotal: newTotal }
    }
    //Adding the product ti the cart list
    else {
        state.items.push(action.item)
        return {
            items: state.items, cartTotal: newTotal
        }
    }
}

//This function will handle the state for removing product from cart
const removeFromCartHelper = (state, action) => {

    //Finding if the Product is in the cart or not
    const indexOfProduct = state.items.findIndex((ele) => {
        return ele.id === action.id
    })
    let existingProduct = state.items[indexOfProduct]
    let newTotal = state.cartTotal - existingProduct.price

    //Delete the product from the cart if it is last removal
    if (existingProduct.quantity === 1) {
        state.items.splice(indexOfProduct, 1)
    }
    //Decreamenting the quantity by 1 
    else {
        existingProduct.quantity--
    }
    return { items: state.items, cartTotal: newTotal }
}


//This is a reducer function which is a kind of listener for the dispatch events
//This is a function which will handle and edit the actual state for the application

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        const added = addToCartHepler(state, action)
        // console.log("added", added);
        return added
    }
    else if (action.type === "REMOVE_FROM_CART") {
        const removed = removeFromCartHelper(state, action)
        // console.log("removed", removed);
        return removed
    }
    else if (action.type === "CLEAR_CART") {
        return { items: [], cartTotal: 0 }
    }
}

export default cartReducer