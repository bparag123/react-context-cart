import React, { useContext } from 'react';
import cartContext from '../store/cart';
import classes from "./HeaderCartButton.module.css"

const Headercartbutton = (props) => {
    const ctx = useContext(cartContext)
    
    return (
        <div>
            <button onClick={props.onShowCart} className={classes.button}>
                <span>Cart Items</span>
                <span className={classes.badge}>{ctx.items.length}</span>
            </button>
        </div>
    );
}

export default Headercartbutton;
