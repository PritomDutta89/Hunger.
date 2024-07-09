// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDataContext } from "../../context/DataContext";

const PlaceOrder = () => {
  const { getTotalCartAmt } = useDataContext();

  return (
    <>
      <div className="grid md:grid-cols-2 gap-[3rem] lg:gap-[5rem] xl:gap-[10rem] mt-[3rem]">
        <div>
          <p className="font-bold text-black text-[1.5rem] mb-4">
            Delivery Information
          </p>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                {/* <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label> */}
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                {/* <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label> */}
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              {/* <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label> */}
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email address"
                required
              />
            </div>
            <div className="mb-6">
              {/* <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Street
              </label> */}
              <input
                type="text"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Street"
                required
              />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                {/* <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label> */}
                <input
                  type="text"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="City"
                  required
                />
              </div>
              <div>
                {/* <label
                  htmlFor="State"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  State
                </label> */}
                <input
                  type="text"
                  id="State"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="State"
                  required
                />
              </div>
              <div>
                {/* <label
                  htmlFor="Zip Code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Zip Code
                </label> */}
                <input
                  type="text"
                  id="Zip Code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div>
                {/* <label
                  htmlFor="Country"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label> */}
                <input
                  type="text"
                  id="Country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Country"
                  required
                />
              </div>
            </div>
            <div>
              {/* <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label> */}
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </form>
        </div>

        {/* cart total */}
        <div className="">
          <p className="font-bold text-black text-[1.5rem]">Cart Totals</p>
          <div className="mt-3">
            <div className="flex justify-between mb-2 text-[#555] text-[0.9rem]">
              <p>Subtotal</p>
              <p>${getTotalCartAmt()}</p>
            </div>
            <hr />
            <div className="flex justify-between my-2 text-[#555] text-[0.9rem]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmt() > 0 ? 5 : 0}</p>
            </div>
            <hr />
            <div className="flex justify-between my-2 font-semibold text-[0.9rem]">
              <p>Total</p>
              <p>${getTotalCartAmt() + (getTotalCartAmt() > 0 ? 5 : 0)}</p>
            </div>
          </div>
          <button
            type="button"
            className="text-white mt-6 bg-red-500 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
