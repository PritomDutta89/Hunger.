/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import FoodItem from "../food-item/FoodItem";

// eslint-disable-next-line react/prop-types
const FoodDisplay = ({ category }) => {
  const { allFoods } = useDataContext();

  return (
    <>
      <div>
        <p className="mt-2 font-semibold text-[1.5rem] text-[#262626]">
          Top Dishes Near You
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 ">
          {allFoods.map(
            (item, index) =>
              (category === "All" || item.category === category) && (
                <FoodItem key={index} item={item} />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
