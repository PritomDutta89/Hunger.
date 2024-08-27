/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useDataContext } from "../../context/DataContext";
import { BASE_URL } from "../../services/helper";

// eslint-disable-next-line react/prop-types
const FoodItem = ({ item }) => {
  const { cartItems, setCartItems, addToCart, removeToCart } = useDataContext();

  return (
    <div className="bg-white rounded-3xl shadow-xl dark:bg-gray-800 dark:border-gray-700 ">
      <div className="relative">
        {/* eslint-disable-next-line react/prop-types */}
        <img
          className="rounded-t-lg w-full h-[15rem] rounded-3xl"
          // eslint-disable-next-line react/prop-types
          src={`${BASE_URL}/images/${item.image}`}
          alt=""
        />
        {!cartItems[item._id] ? (
          <img
            src={assets.add_icon_white}
            alt="icon"
            onClick={() => addToCart(item._id)}
            className="absolute w-[2.3rem] cursor-pointer bottom-4 right-3 rounded-full"
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-4 bg-white p-2 rounded-3xl">
            <img
              src={assets.remove_icon_red}
              alt="icon"
              onClick={() => removeToCart(item._id)}
              className="w-[2rem] cursor-pointer"
            />
            <p className="font-medium text-gray-500">{cartItems[item._id]}</p>
            <img
              src={assets.add_icon_green}
              alt="icon"
              onClick={() => addToCart(item._id)}
              className="w-[2rem] cursor-pointer"
            />
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          {/* eslint-disable-next-line react/prop-types */}
          <p className="font-medium text-[1.3rem]">{item.name}</p>
          <img src={assets.rating_starts} alt="" className="w-[4rem]" />
        </div>

        <p className="mb-2 font-normal text-[#676767] text-[1rem] dark:text-gray-400">
          {/* eslint-disable-next-line react/prop-types */}
          {item.description}
        </p>
        {/* eslint-disable-next-line react/prop-types */}
        <p className="text-red-500 font-medium text-[1.3rem]">${item.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
