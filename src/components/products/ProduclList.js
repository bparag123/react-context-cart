import React, { useContext } from "react";
import Productitem from "./ProductItem";
import classes from "./ProductList.module.css"

import productContext from "../../store/product";
const Productlist = () => {
  const ctx = useContext(productContext);
  return (
    <div className={classes['product-list']}>
      {ctx.data.map((ele, index) => {
        return <Productitem key={index} data={ele} />;
      })}
    </div>
  );
};

export default Productlist;
