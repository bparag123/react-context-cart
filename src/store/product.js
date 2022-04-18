import React, { createContext, useState, useEffect } from "react";

//This is a context for the product Data
const productContext = createContext([]);

export const ProductContextProvider = (props) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  //This Effect will run once after the component is Rendered
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://react-cart-8597e-default-rtdb.firebaseio.com/data.json"
      const res = await fetch(url)
      const fetchedData = await res.json()
      const transformedData = []
      for (let key in fetchedData) {
        transformedData.push(fetchedData[key])
      }
      setData(transformedData)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <productContext.Provider
      value={{
        data: data
      }}>
      {isLoading ? <p>Loading...</p> : props.children}
    </productContext.Provider>
  );
};

export default productContext;
