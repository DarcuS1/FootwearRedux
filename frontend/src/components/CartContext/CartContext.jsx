// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartPricing, setCartPricing] = useState([]);

  const addToCartPricing = (product) => {
    setCartPricing((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cartPricing, addToCartPricing }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
