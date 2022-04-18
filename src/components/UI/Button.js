import React from 'react';
import classes from "./Button.module.css"

//This is a Custom Component which is used to create reusable Buttons
//Here Forward Reference is used for referencing the component out side the Component
const Button = React.forwardRef((props, ref) => {
    
    return <button ref={ref} onClick={props.onClick} className={`${classes.button} ${props.className ? props.className : ''}`}>
        {props.children}
    </button>
})

export default Button;
