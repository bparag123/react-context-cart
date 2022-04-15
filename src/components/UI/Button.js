import React from 'react';
import classes from "./Button.module.css"

const Button = React.forwardRef((props, ref) => {

    return <button ref={ref} onClick={props.onClick} className={`${classes.button} ${props.className ? props.className : ''}`}>
        {props.children}
    </button>
})

export default Button;
