/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  addToCartApi,
  getCartDataApi,
  getFoodList,
  removeCartApi,
} from "../services/AllApi";
// import { food_list } from "../assets/assets";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  // const [allFoods, setAllFoods] = useState(food_list);
  const [allFoods, setAllFoods] = useState([]);
  const [filteredAllFoods, setFilteredAllFoods] = useState([]);
  const [loaderFoodList, setLoaderFoodList] = useState(true);

  // Manage cart items
  const [cartItems, setCartItems] = useState({});

  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    fetchFoodList();
  }, []);

  useEffect(() => {
    if (token) loadCartData(token);
  }, [token]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prv) => ({ ...prv, [itemId]: 1 }));
    } else {
      setCartItems((prv) => ({ ...prv, [itemId]: prv[itemId] + 1 }));
    }

    // call add to cart api
    if (token) {
      const res = await addToCartApi(itemId, token);
    }
  };

  const removeToCart = async (itemId) => {
    setCartItems((prv) => ({ ...prv, [itemId]: prv[itemId] - 1 }));

    // call add to cart api
    if (token) {
      const res = await removeCartApi(itemId, token);
    }
  };

  const getTotalCartAmt = () => {
    let totalAmt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemData = allFoods.find((data) => data._id === item);
        totalAmt += itemData.price * cartItems[item];
      }
    }
    return totalAmt;
  };

  const loadCartData = async (token) => {
    const res = await getCartDataApi(token);
    setCartItems(res.data.cartData);
  };

  const fetchFoodList = async () => {
    setLoaderFoodList(true);
    const res = await getFoodList();
    setAllFoods(res?.data?.data ? res?.data?.data : []);
    setFilteredAllFoods(res?.data?.data ? res?.data?.data : [])
    setLoaderFoodList(false);
  };

  return (
    <DataContext.Provider
      value={{
        allFoods,
        setAllFoods,
        loaderFoodList,
        filteredAllFoods,
        setFilteredAllFoods,
        cartItems,
        setCartItems,
        addToCart,
        removeToCart,
        getTotalCartAmt,
        token,
        setToken,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
