import React from 'react';
import Card from '../UI/Card';
import classes from "./CartItem.module.css"

const Cartitem = (props) => {
    return <Card>
        <div className={classes['cart-item']}>
            <h3>{props.ele.productName}</h3>
            <p>$ {props.ele.price}</p>
            <p>$ {props.ele.price * props.ele.quantity}</p>
            <div className={classes['quantity']}>
                <button onClick={props.onMinusBtnClick}>-</button>
                <p className={classes['quantity-text']}>{props.ele.quantity}</p>
                <button onClick={props.onPlusBtnClick}>+</button>
            </div>
        </div>
    </Card>
}

export default Cartitem;
