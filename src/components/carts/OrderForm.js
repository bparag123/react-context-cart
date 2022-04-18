import React from 'react';
import useInput from '../../hooks/use-input';
import Button from '../UI/Button';
import classes from './OrderForm.module.css'

const Orderform = (props) => {

    //Using My Custom Hook for handling inputs

    const { value: nameValue,
        onChangeHandler: onNameChange,
        onBlurHandler: onNameBlur,
        hasError: nameHasError,
        isTouched: nameTouched
    } = useInput((val) => val.trim() !== "")

    const { value: emailValue,
        onChangeHandler: onEmailChange,
        onBlurHandler: onEmailBlur,
        hasError: emailHasError,
        isTouched: emailTouched
    } = useInput((val) => val.trim() !== "" && val.includes("@"))

    const { value: cityValue,
        onChangeHandler: onCityChange,
        onBlurHandler: onCityBlur,
        hasError: cityHasError,
        isTouched: cityTouched
    } = useInput((val) => val.trim() !== "" && val.trim(""))

    const { value: addressValue,
        onChangeHandler: onAddressChange,
        onBlurHandler: onAddressBlur,
        hasError: addressHasError,
        isTouched: addressTouched
    } = useInput((val) => val.trim() !== "")

    const { value: pincodeValue,
        onChangeHandler: onPincodeChange,
        onBlurHandler: onPincodeBlur,
        hasError: pincodeHasError,
        isTouched: pincodeTouched
    } = useInput((val) => val.trim() !== "" && val.length === 6)

    //Checking if Form is Valid Or Not
    const isFormValid = pincodeTouched && addressTouched && nameTouched && emailTouched && cityTouched && !emailHasError && !cityHasError && !nameHasError && !pincodeHasError && !addressHasError

    const onSubmit = (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        const dataToSubmit = {
            name: nameValue,
            city: cityValue,
            address: addressValue,
            pincode: pincodeValue,
            email: emailValue
        }
        //This is a function which will be fired when the Order is submitted.
        props.onOrderConfirm(dataToSubmit)
    }

    return (
        <form action="" className={classes.control} onSubmit={onSubmit}>
            {!isFormValid && <p className={classes.invalid}>Please Fill Form with Valid Data</p>}
            <div className={nameHasError ? classes.invalid : ''}>
                <label htmlFor="name" >Name</label>
                <input type="text" value={nameValue} onChange={onNameChange} onBlur={onNameBlur} name="name" id="name" />
                {nameHasError && <p>Please Enter a Valid Name</p>}
            </div>
            <div className={emailHasError ? classes.invalid : ''}>
                <label htmlFor="email" >Email</label>
                <input type="text" value={emailValue} onChange={onEmailChange} onBlur={onEmailBlur} name="email" id="email" />
                {emailHasError && <p>Please Enter a valid Email</p>}
            </div>
            <div className={cityHasError ? classes.invalid : ''}>
                <label htmlFor="city"  >City</label>
                <input type="text" value={cityValue} onChange={onCityChange} onBlur={onCityBlur} name="city" id="city" />
                {cityHasError && <p>Please Enter a valid City</p>}
            </div>
            <div className={addressHasError ? classes.invalid : ''}>
                <label htmlFor="address" >Address</label>
                <input type="text" value={addressValue} onChange={onAddressChange} onBlur={onAddressBlur} name="address" id="address" />
                {addressHasError && <p>Please Enter a valid Address</p>}
            </div>
            <div className={pincodeHasError ? classes.invalid : ''}>
                <label htmlFor="pincode" >Pincode</label>
                <input type="number" value={pincodeValue} onChange={onPincodeChange} onBlur={onPincodeBlur} name="pincode" id="pincode" />
                {pincodeHasError && <p>Please Enter a valid Pincode</p>}
            </div>
            <div>
                <Button>Order Now</Button>
            </div>
        </form>
    )

}

export default Orderform;
