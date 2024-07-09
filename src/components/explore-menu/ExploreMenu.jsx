/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { menu_list } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div id="explore-menu" className="flex flex-col gap-3">
        <h1 className="mt-2 font-semibold text-[1.5rem] text-[#262626]">
          Explore our menu
        </h1>
        <p className="max-w-[90%] md:max-w-[60%] text-[#808080]">
          Explore our diverse menu with a variety of mouthwatering dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className="no-scrollbar flex justify-between items-center gap-5 text-center my-3 overflow-x-auto">
          {menu_list.map((item, index) => (
            <div
              key={index}
              className="w-fit flex-shrink-0 transform transition-transform hover:scale-105 mt-2"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              {" "}
              {/* Set a fixed width for each item */}
              <img
                src={item.menu_image}
                alt="icon"
                className={`w-[5rem] md:w-[6rem] h-auto rounded-full cursor-pointer ${
                  category === item.menu_name
                    ? "border-[4px] border-red-500 p-1"
                    : ""
                }`}
              />
              <p className="text-[#747474] text-[0.75rem] md:text-[1rem] mt-2 text-center cursor-pointer hover:text-gray-400">
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>
        <hr className="h-[2px] my-4 bg-[#e2e2e2] border-0 dark:bg-gray-700" />
      </div>
    </>
  );
};

export default ExploreMenu;
