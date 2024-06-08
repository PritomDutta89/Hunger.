// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [animation, setAnimation] = useState("Home");
  return (
    <>
      <div className="flex justify-around items-center p-3">
        <div>
          <img src={assets.logo} alt="icon" className="w-[7rem]" />
        </div>
        <div>
          <ul className="flex gap-5 text-[#49557e] text-sm ">
            <li
              className={`cursor-pointer ${
                animation === "Home" ? "border-b-2 border-[#49557e] pb-1" : ""
              }`}
              onClick={()=>setAnimation("Home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer ${
                animation === "Menu" ? "border-b-2 border-[#49557e] pb-1" : ""
              }`}
              onClick={()=>setAnimation("Menu")}
            >
              Menu
            </li>
            <li
              className={`cursor-pointer ${
                animation === "Mobile" ? "border-b-2 border-[#49557e] pb-1" : ""
              }`}
              onClick={()=>setAnimation("Mobile")}
            >
              Mobile App
            </li>
            <li
              className={`cursor-pointer ${
                animation === "Contact"
                  ? "border-b-2 border-[#49557e] pb-1"
                  : ""
              }`}
              onClick={()=>setAnimation("Contact")}
            >
              Contact Us
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-7">
          <img
            src={assets.search_icon}
            alt="icon"
            className="w-[1rem] h-[1rem]"
          />
          <img
            src={assets.basket_icon}
            alt="icon"
            className="w-[1rem] h-[1rem]"
          />
          <button
            type="button"
            className="text-gray-800 border border-orange-500 hover:bg-[#fff4f2] transition duration-0.3 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-5 py-2 text-center"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
