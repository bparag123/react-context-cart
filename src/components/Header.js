import React, { Fragment } from "react";
import classes from "./Header.module.css";
import Headercartbutton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Products</h1>
        <Headercartbutton onShowCart={props.onShowCart}/>
      </header>
    </Fragment>
  );
};

export default Header;
