import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductContextProvider } from './store/product';
import { CartProvider } from './store/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductContextProvider>
    <CartProvider>
      <App />

    </CartProvider>
  </ProductContextProvider>
);
