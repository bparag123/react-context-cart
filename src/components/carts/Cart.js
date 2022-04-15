import React, { useContext } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import cartContext from "../../store/cart"
import Cartitem from './CartItem';
import classes from './Cart.module.css'

const Cart = (props) => {

    const ctx = useContext(cartContext)

    const onPlusBtnClick = (item) => {
        ctx.addToCart({ ...item, quantity: 1 })
    }
    const onMinusBtnClick = (id) => {
        ctx.removeFromCart(id)
    }

    return <Modal onClose={props.onHideCart}>
        <div>
            <Button onClick={props.onHideCart} className={classes['close-cart']}>Close Cart</Button>
        </div>
        {ctx.items.map((ele) => {
            return ele.quantity > 0 && <Cartitem ele={ele} onPlusBtnClick={onPlusBtnClick.bind(null, ele)} onMinusBtnClick={onMinusBtnClick.bind(null, ele.id)} />
        })}
        <div className={classes['cart-total']}>
            Your Cart Total is $ {ctx.cartTotal}
        </div>
    </Modal>
}

export default Cart;
