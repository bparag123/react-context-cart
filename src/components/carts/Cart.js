import React, { useContext, useState } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import cartContext from "../../store/cart"
import Cartitem from './CartItem';
import classes from './Cart.module.css'
import Orderform from './OrderForm';

const Cart = (props) => {

    //Subscribing the Context Data of the Cart
    const ctx = useContext(cartContext)

    //For Setting the message to the use about submit status
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmited, setIsSubmited] = useState(false)

    const onPlusBtnClick = (item) => {
        ctx.addToCart({ ...item, quantity: 1 })
    }
    const onMinusBtnClick = (id) => {
        ctx.removeFromCart(id)
    }

    //This function will run when user clicks Order Now button
    const onOrderConfirm = async (data) => {
        setIsSubmitting(true)

        try {
            await fetch("https://react-cart-8597e-default-rtdb.firebaseio.com/orders", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...data, items: ctx.items, total: ctx.cartTotal })
            })
            //If request successfull then clear the cart & set the submitted = true and submitting = false
            ctx.clearCart()
            setIsSubmitting(false)
            setIsSubmited(true)
        } catch (error) {
            //If request fails set isSubmitting & isSubmitted = false to re render the form
            setIsSubmitting(false)
            setIsSubmited(false)
        }
    }

    return <Modal onClose={props.onHideCart}>
        <div>
            <Button onClick={props.onHideCart} className={classes['close-cart']}>Close Cart</Button>
        </div>
        <div className={classes["cart-list"]}>
            {ctx.items.map((ele) => {
                //Binding the arguments with the function for adding or removing the cart item
                return ele.quantity > 0 && <Cartitem ele={ele} onPlusBtnClick={onPlusBtnClick.bind(null, ele)} onMinusBtnClick={onMinusBtnClick.bind(null, ele.id)} />
            })}
        </div>
        <div className={classes['cart-total']}>
            Your Cart Total is $ {ctx.cartTotal}
        </div>

        {isSubmitting && <p>Submitting Your Order</p>}
        {isSubmited && <p>Submitted Your Order </p>}
        {!isSubmitting && !isSubmited && ctx.cartTotal !== 0 && <Orderform onOrderConfirm={onOrderConfirm} />}
    </Modal>
}

export default Cart;
