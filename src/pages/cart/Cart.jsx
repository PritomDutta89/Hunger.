/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { allFoods, removeToCart, cartItems, getTotalCartAmt } =
    useDataContext();
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Items
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(cartItems).length !== 0 ? (
              allFoods.map(
                (item, index) =>
                  cartItems[item._id] > 0 && (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          src={item.image}
                          alt="icon"
                          className="w-[4rem] rounded-md"
                        />
                      </th>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">${item.price}</td>
                      <td className="px-6 py-4">{cartItems[item._id]}</td>
                      <td className="px-6 py-4">
                        ${parseInt(cartItems[item._id]) * parseInt(item.price)}
                      </td>
                      <td
                        className="px-6 py-4 font-semibold cursor-pointer"
                        onClick={() => removeToCart(item._id)}
                      >
                        x
                      </td>
                    </tr>
                  )
              )
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center">
                  Empty cart
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* cart total */}
      <div className="mt-[4rem] grid md:grid-cols-2 gap-[4rem] lg:gap-[10rem]">
        <div>
          <form className="flex flex-col justify-center mx-auto ">
            <p className="text-start text-[#555] mb-3">
              If you have promo code, Enter it here
            </p>
            <div className="flex">
              <div className="w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Promo code"
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 px-[2rem] xl:px-[4rem] text-sm font-medium text-white bg-black border border-black hover:bg-black-800 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
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
            onClick={() =>
              getTotalCartAmt() > 0
                ? navigate("/order")
                : toast.warn("Please add some item", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  })
            }
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
