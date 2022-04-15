import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductContextProvider } from './store/product';
import { CartProvider } from './store/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Providing context over the all Childs of App Components
  <ProductContextProvider>
    <CartProvider>
      <App />

    </CartProvider>
  </ProductContextProvider>
);
