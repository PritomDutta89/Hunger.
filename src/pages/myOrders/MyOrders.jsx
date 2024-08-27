/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { userOrdersApi } from "../../services/AllApi";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { token } = useDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  const fetchOrders = async () => {
    const orderData = await userOrdersApi(token);
    console.log(orderData?.data);
    setData(orderData?.data ? orderData?.data : []);
  };

  return (
    <>
      <div className="mt-5">
        <p className="text-black font-semibold text-lg">My Orders</p>
        <div className="mt-7">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Logo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Items
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Track Order
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          src={assets.parcel_icon}
                          alt="icon"
                          className="w-[4rem] rounded-md"
                        />
                      </th>
                      <td className="px-6 py-4">
                        {item?.items?.map((value, index) => {
                          if (index === item?.items.length - 1) {
                            return value.name + " X " + value.quantity;
                          } else {
                            return value.name + " X " + value.quantity + ", ";
                          }
                        })}
                      </td>
                      <td className="px-6 py-4">
                        ${parseFloat(item.amount).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">{item.items.length}</td>
                      <td className="px-6 py-4">
                        <span className="text-orange-600">&#x25cf;</span>{" "}
                        <span>{item.status}</span>
                      </td>
                      <td className="px-6 py-4 font-semibold cursor-pointer">
                        <button
                          onClick={fetchOrders}
                          className="underline text-blue-600 font-semibold cursor-pointer"
                        >
                          Click
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-6 py-4 text-center">
                      No item
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
