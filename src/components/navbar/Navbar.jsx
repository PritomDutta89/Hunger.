/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [animation, setAnimation] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* <div className="flex justify-around items-center p-3">
        <div>
          <img src={assets.logo} alt="icon" className="w-[7rem]" />
        </div>
        <div>
          <ul className="flex gap-5 text-[#49557e] text-sm ">
            <li
              className={`cursor-pointer ${
                animation === "Home" ? "border-b-2 border-[#49557e] pb-1" : ""
              }`}
              onClick={() => setAnimation("Home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer ${
                animation === "Menu" ? "border-b-2 border-[#49557e] pb-1" : ""
              }`}
              onClick={() => setAnimation("Menu")}
            >
              Menu
            </li>
            <li
              className={`cursor-pointer ${
                animation === "Mobile" ? "border-b-2 border-[#49557e] pb-1" : ""
              }`}
              onClick={() => setAnimation("Mobile")}
            >
              Mobile App
            </li>
            <li
              className={`cursor-pointer ${
                animation === "Contact"
                  ? "border-b-2 border-[#49557e] pb-1"
                  : ""
              }`}
              onClick={() => setAnimation("Contact")}
            >
              Contact Us
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-7">
          <form className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-fit p-2 ps-10 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none focus:ring-orange-500 focus:border-orange-500 "
                placeholder="Search foods..."
                required
              />
            </div>
          </form>
          <div className="relative">
            <img
              src={assets.basket_icon}
              alt="icon"
              className="w-[1rem] h-[1rem] cursor-pointer"
            />
            <div className="absolute w-1 h-1 bg-orange-600 rounded-full top-[-0.00001rem] left-3"></div>
          </div>
          <button
            type="button"
            className="text-gray-800 border border-orange-500 hover:bg-[#fff4f2] transition duration-0.3 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-5 py-2 text-center"
          >
            Sign In
          </button>
        </div>
      </div> */}

      {/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <img src={assets.logo} alt="icon" className="w-[6.5rem]" />
          </div>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-6">
            <div className="relative">
              <img
                src={assets.basket_icon}
                alt="icon"
                className="w-[1rem] h-[1rem] cursor-pointer"
              />
              <div className="absolute w-1 h-1 bg-orange-600 rounded-full top-[-0.00001rem] left-3"></div>
            </div>

            <button
              type="button"
              className="text-gray-800 border border-orange-500 hover:bg-[#fff4f2] transition duration-0.3 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-5 py-2 text-center"
            >
              Sign In
            </button>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col text-[#49557e] text-sm font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                className={`cursor-pointer ${
                  animation === "Home" ? "border-b-2 border-[#49557e] pb-1" : ""
                }`}
                onClick={() => setAnimation("Home")}
              >
                Home
              </li>
              <li
                className={`cursor-pointer ${
                  animation === "Menu" ? "border-b-2 border-[#49557e] pb-1" : ""
                }`}
                onClick={() => setAnimation("Menu")}
              >
                Menu
              </li>
              <li
                className={`cursor-pointer ${
                  animation === "Mobile"
                    ? "border-b-2 border-[#49557e] pb-1"
                    : ""
                }`}
                onClick={() => setAnimation("Mobile")}
              >
                Mobile App
              </li>
              <li
                className={`cursor-pointer ${
                  animation === "Contact"
                    ? "border-b-2 border-[#49557e] pb-1"
                    : ""
                }`}
                onClick={() => setAnimation("Contact")}
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav className="border-gray-200 bg-gray-50 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <img
              src={assets.logo}
              alt="icon"
              className="w-[5rem] md:w-[7rem]"
            />
          </div>

          <form className="max-w-md mx-auto hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-xs text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none focus:ring-orange-500 focus:border-orange-500 "
                placeholder="Search foods..."
                required
              />
            </div>
          </form>

          <div className="flex items-center justify-center">
            <div className="relative mr-4">
              <img
                src={assets.basket_icon}
                alt="icon"
                className="w-[1rem] h-[1rem] cursor-pointer"
              />
              <div className="absolute w-1 h-1 bg-orange-600 rounded-full top-[-0.00001rem] left-3"></div>
            </div>

            <button
              type="button"
              className="mr-3 text-gray-800 border border-orange-500 hover:bg-[#fff4f2] transition duration-0.3 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-3 md:px-5 py-1 md:py-2  text-center"
            >
              Sign In
            </button>

            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className=" inline-flex items-center justify-center p-2 w-7 md:w-8 h-7 md:h-8 text-sm text-gray-800 border hover:bg-slate-100 rounded-lg dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded="false"
              onClick={() => setToggle(!toggle)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {toggle && (
            <div className=" w-full" id="navbar-hamburger">
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li
                  className={`block cursor-pointer py-2 px-3 text-gray-700 hover:bg-gray-100 ${
                    animation === "Home" ? "bg-orange-200" : ""
                  } rounded dark:bg-blue-600`}
                  onClick={() => setAnimation("Home")}
                >
                  Home
                </li>
                <li
                  className={`block cursor-pointer py-2 px-3 text-gray-700 rounded hover:bg-gray-100 ${
                    animation === "Menu" ? "bg-orange-200" : ""
                  } dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                  onClick={() => setAnimation("Menu")}
                >
                  Menu
                </li>
                <li
                  className={`block cursor-pointer py-2 px-3 text-gray-700 rounded ${
                    animation === "Mobile" ? "bg-orange-200" : ""
                  } hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white`}
                  onClick={() => setAnimation("Mobile")}
                >
                  Mobile App
                </li>
                <li
                  className={`block cursor-pointer py-2 px-3 text-gray-700 rounded ${
                    animation === "Contact" ? "bg-orange-200" : ""
                  } hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                  onClick={() => setAnimation("Contact")}
                >
                  Contact Us
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
