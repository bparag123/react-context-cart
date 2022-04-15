import React from 'react';
import classes from './Card.module.css'

//This is a Custom Card component which is to wrap other components
const Card = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default Card;
