import React, { createContext } from "react";

const productContext = createContext([
  { id: "p1", productName: "Shoes", category: "Footware", price: 499 },
  { id: "p2", productName: "Tennis Ball", category: "Footware", price: 99 },
  { id: "p3", productName: "Laptop", category: "Footware", price: 999 },
]);

export const ProductContextProvider = (props) => {
  return (
    <productContext.Provider
      value={{
        data: [
          { id: "p1", productName: "Shoes", category: "Footware", price: 499 },
          { id: "p2", productName: "Tennis Ball", category: "Footware", price: 99 },
          { id: "p3", productName: "Laptop", category: "Footware", price: 999 },
        ],
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default productContext;
