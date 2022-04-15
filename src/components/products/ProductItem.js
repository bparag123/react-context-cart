import React, { useContext, useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import cartContext from "../../store/cart"
import Input from "../UI/Input";
import classes from "./Product.module.css"

const Productitem = (props) => {
  const ctxCart = useContext(cartContext);
  const selectedProductId = React.useRef(null)
  const quantityInput = React.useRef(null)

  useEffect(() => {
    quantityInput.current.value = "1"
  })

  const onAddToCartBtn = () => {
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
      <Button ref={selectedProductId} onClick={onAddToCartBtn}>Add To Cart</Button>
    </Card>
  );
};


export default Productitem;
