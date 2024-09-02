// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
// import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <>
      <div className="img w-full h-[25rem] md:h-[30rem] rounded-xl my-[1rem] mx-auto bg-contain bg-no-repeat">
        <div className="flex flex-col justify-center h-full ml-[1rem] md:ml-[5rem] animate-fadeIn">
          <h1 className="text-white font-bold text-[1.5rem] md:text-[2rem] lg:text-[3rem]">
            Order your <br /> favorite food here
          </h1>
          <p className="mt-3 text-white w-[90%] md:w-[70%] text-[0.8rem] md:text-[1rem]">
            Discover a world of flavors with our extensive selection of
            delectable dishes. From hearty mains to tantalizing desserts, our
            diverse menu offers something to satisfy every craving and delight
            every palate. Dive into a culinary adventure today!
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="py-1.5 md:py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#747474] focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  transform transition-transform hover:scale-105"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
