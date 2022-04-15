import React from 'react';

//This is a input custom reusable component
//Its a forwardRef to use the reference of parent of this component
const Input = React.forwardRef((props, ref) => {
    return <input ref={ref} className={props.className} {...props.inputConfig} />
})

export default Input;
