import { useState } from 'react';

//This is a custom hook created for the handling State of the input fields
const useInput = (validateValue) => {

    //State for the Value of Input
    const [enteredValue, setEnteredValue] = useState('');
    //State to check if the user has focused of element
    const [isTouched, setIsTouched] = useState(false);
    //Checking the validation of the value
    const isValid = validateValue(enteredValue)

    //checking if the ele has Error
    const hasError = isTouched && !isValid

    // This is a callback to handle changes in ele
    const onChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    //This is a callback when use removes focus from the ele
    const onBlurHandler = (e) => {
        setIsTouched(true)
    }

    return {
        value: enteredValue,
        hasError,
        onChangeHandler,
        onBlurHandler,
        isTouched
    }

}

export default useInput;
