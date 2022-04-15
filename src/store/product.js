import React, { createContext } from "react";

//This is a context for the product Data
const productContext = createContext([
  { id: "p1", productName: "Shoes", category: "Footware", price: 100 },
  { id: "p2", productName: "Tennis Ball", category: "Footware", price: 200 },
  { id: "p3", productName: "Laptop", category: "Footware", price: 300 },
]);

export const ProductContextProvider = (props) => {
  return (
    <productContext.Provider
      value={{
        data: [
          { id: "p1", productName: "Shoes", category: "Footware", price: 100 },
          { id: "p2", productName: "Tennis Ball", category: "Footware", price: 200 },
          { id: "p3", productName: "Laptop", category: "Footware", price: 300 },
        ],
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default productContext;
