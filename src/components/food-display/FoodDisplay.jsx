/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import FoodItem from "../food-item/FoodItem";
import { Oval } from "react-loader-spinner";

// eslint-disable-next-line react/prop-types
const FoodDisplay = ({ category }) => {
  const { allFoods, loaderFoodList, filteredAllFoods, setFilteredAllFoods } =
    useDataContext();

  return (
    <>
      <div>
        <p className="mt-2 font-semibold text-[1.5rem] text-[#262626]">
          Top Dishes Near You
        </p>

        {!loaderFoodList ? (
          filteredAllFoods.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 ">
              {filteredAllFoods.map(
                (item, index) =>
                  (category === "All" || item.category === category) && (
                    <FoodItem key={index} item={item} />
                  )
              )}
            </div>
          ) : (
            <p className="h-[20rem] flex justify-center items-center">
              No post found
            </p>
          )
        ) : (
          <div className="flex justify-center items-center min-h-[60vh]">
            <Oval
              visible={true}
              height="50"
              width="80"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FoodDisplay;
