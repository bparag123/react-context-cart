import React from 'react';

const Input = React.forwardRef((props, ref) => {
    return <input ref={ref} className={props.className} {...props.inputConfig} />
})

export default Input;
