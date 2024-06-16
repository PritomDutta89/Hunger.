/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <div id="explore-contact" className="text-[#d9d9d9] rounded-lg bg-[#323232] flex flex-col items-center p-[3rem] md:px-[6rem] mt-[3rem]">
        <div className="w-[100%] grid md:grid-cols-3 gap-[3rem] md:gap-[8rem]">
          <div className="flex flex-col items-start gap-5">
            {/* <img src={assets.logo} alt="" className="w-[8rem]" /> */}
            <h1 className="font-extrabold text-[1.9rem] text-red-500">Hunger.</h1>
            <p className="w-[10rem]">
              Discover delicious meals with Hunger. 
            </p>
            <div className="flex gap-3">
              <img src={assets.facebook_icon} alt="" className="cursor-pointer transform transition-transform hover:scale-105"/>
              <img src={assets.twitter_icon} alt="" className="cursor-pointer transform transition-transform hover:scale-105"/>
              <img src={assets.linkedin_icon} alt="" className="cursor-pointer transform transition-transform hover:scale-105"/>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-white text-[1.7rem] font-semibold">Company</p>
            <ul>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">Home</li>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">About Us</li>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">Delivery</li>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">Privacy policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-5">
            <p className="text-white text-[1.7rem] font-semibold">
              GET IN TOUCH
            </p>
            <ul>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">+1-222-555-9878</li>
              <li className="mb-1 cursor-pointer transform transition-transform hover:scale-105">contact@hunger.com</li>
            </ul>
          </div>
        </div>
        <hr className="h-[1px] w-[100%] my-7 bg-gray-500 border-0 dark:bg-gray-700" />
        <p className="">Copyright 2024 @ Hunger.com - All Right Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
