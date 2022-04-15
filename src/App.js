import React, { useState } from 'react';
import './App.css';
import Cart from './components/carts/Cart';
import Header from './components/Header';
import Productlist from './components/products/ProduclList';

function App() {
  //Here i will Render the Modal for the Cart as a direct children to the App Component
  //So managing visibility here
  const [isCartVisible, setCartVisiblity] = useState(false)

  const onHideCart = () => {
    setCartVisiblity(false)
  }

  const onShowCart = () => {
    setCartVisiblity(true)
  }

  return (
    <div className="App">
      {/* This is a Cart Modal */}
      {isCartVisible && <Cart onHideCart={onHideCart} />}
      <Header onShowCart={onShowCart} />
      <Productlist />
    </div>
  );
}

export default App;
