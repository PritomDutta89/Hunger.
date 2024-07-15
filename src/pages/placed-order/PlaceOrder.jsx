// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { placeOrderApi } from "../../services/AllApi";

const PlaceOrder = () => {
  // eslint-disable-next-line no-unused-vars
  const { getTotalCartAmt, token, allFoods, cartItems } = useDataContext();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  useEffect(() => {
    console.log("cartItems: ", cartItems);
    console.log("allFoods: ", allFoods);
  }, [cartItems, allFoods]);

  const onChangeHandler = (event) => {
    setData((prv) => ({ ...prv, [event.target.name]: event.target.value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    allFoods.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    console.log("orderItems: ", orderItems);
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmt()+5,
    }

    console.log("orderData: ", orderData)
    // call api
    const res = await placeOrderApi(orderData, token);

    console.log("res: ", res)
  };

  return (
    <>
      <form onSubmit={placeOrder}>
        <div className="grid md:grid-cols-2 gap-[3rem] lg:gap-[5rem] xl:gap-[10rem] mt-[3rem]">
          <div>
            <p className="font-bold text-black text-[1.5rem] mb-4">
              Delivery Information
            </p>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="firstName"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={onChangeHandler}
                  value={data.firstName}
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last name"
                  onChange={onChangeHandler}
                  value={data.lastName}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email address"
                onChange={onChangeHandler}
                value={data.email}
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="street"
                name="street"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Street"
                onChange={onChangeHandler}
                value={data.street}
                required
              />
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="City"
                  onChange={onChangeHandler}
                  value={data.city}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="State"
                  name="state"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="State"
                  onChange={onChangeHandler}
                  value={data.state}
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  id="Zip Code"
                  name="zipcode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Zip Code"
                  onChange={onChangeHandler}
                  value={data.zipcode}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="Country"
                  name="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Country"
                  onChange={onChangeHandler}
                  value={data.country}
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="number"
                id="phone"
                name="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={onChangeHandler}
                value={data.phone}
                required
              />
            </div>
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
              type="submit"
              className="text-white mt-6 bg-red-500 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
