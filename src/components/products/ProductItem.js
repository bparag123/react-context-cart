import React, { useContext, useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import cartContext from "../../store/cart"
import Input from "../UI/Input";
import classes from "./Product.module.css"

const Productitem = (props) => {
  //Subscribing the Cart Context Data
  //Here it is required to add the Product to Cart
  const ctxCart = useContext(cartContext);

  //This is a reference for the quantity Update
  const quantityInput = React.useRef(null)

  //This effect will run once after component is rendered as i have not defined any dependancy
  useEffect(() => {
    quantityInput.current.value = "1"
  })

  const onAddToCartBtn = () => {
    //Dispatching the action to the Cart Context
    ctxCart.addToCart({ ...props.data, quantity: +quantityInput.current.value })
    quantityInput.current.value = ""
  }

  return (
    <Card>
      <p>{props.data.productName}</p>
      <p>{props.data.category}</p>
      <p>$ {props.data.price}</p>
      <div>
        <Input ref={quantityInput} inputConfig={{ type: "number" }} className={classes.quantityInput} />
      </div>
      <Button onClick={onAddToCartBtn}>Add To Cart</Button>
    </Card>
  );
};


export default Productitem;
