import React, { useState } from 'react';
import './App.css';
import Cart from './components/carts/Cart';
import Header from './components/Header';
import Productlist from './components/products/ProduclList';
import Input from './components/UI/Input';

function App() {
  const [isCartVisible, setCartVisiblity] = useState(false)

  const onHideCart = () => {
    setCartVisiblity(false)
  }

  const onShowCart = () => {
    setCartVisiblity(true)
  }

  return (
    <div className="App">
      {isCartVisible && <Cart onHideCart={onHideCart} />}
      <Header onShowCart={onShowCart} />
      <Productlist />
    </div>
  );
}

export default App;
