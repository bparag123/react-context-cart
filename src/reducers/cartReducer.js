const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        const indexOfProduct = state.items.findIndex((ele) => {
            return ele.productName === action.item.productName
        })
        let newTotal = state.cartTotal + action.item.price * action.item.quantity
        if (indexOfProduct >= 0) {
            let existingProduct = state.items[indexOfProduct]
            const itemToAdd = {
                ...action.item, quantity: action.item.quantity + existingProduct.quantity
            }
            state.items[indexOfProduct] = itemToAdd
            return { items: state.items, cartTotal: newTotal }
        }
        else {
            state.items.push(action.item)
            return {
                items: state.items, cartTotal: newTotal
            }
        }
    }
    else if (action.type === "REMOVE_FROM_CART") {
        const indexOfProduct = state.items.findIndex((ele) => {
            return ele.id === action.id
        })
        let existingProduct = state.items[indexOfProduct]
        if (existingProduct.quantity === 1) {
            state.items.pop(indexOfProduct)
        }
        else {
            existingProduct.quantity--
        }
        let newTotal = state.cartTotal - existingProduct.price
        return { items: state.items, cartTotal: newTotal }
    }
}

export default cartReducer