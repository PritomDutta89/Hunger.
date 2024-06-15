/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [allFoods, setAllFoods] = useState(food_list);

  // Manage cart items
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prv) => ({ ...prv, [itemId]: 1 }));
    } else {
      setCartItems((prv) => ({ ...prv, [itemId]: prv[itemId] + 1 }));
    }
  };

  const removeToCart = (itemId) => {
    setCartItems((prv) => ({ ...prv, [itemId]: prv[itemId] - 1 }));
  };

  return (
    <DataContext.Provider
      value={{
        allFoods,
        setAllFoods,
        cartItems,
        setCartItems,
        addToCart,
        removeToCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
