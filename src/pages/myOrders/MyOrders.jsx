/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { userOrdersApi } from "../../services/AllApi";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { token } = useDataContext();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  const fetchOrders = async () => {
    setLoader(true);
    const orderData = await userOrdersApi(token);
    console.log(orderData?.data);
    setData(orderData?.data ? orderData?.data : []);
    setLoader(false);
  };

  return (
    <>
      <div className="mt-5">
        <p className="text-black font-semibold text-lg">My Orders</p>
        <div className="mt-7">
          {loader ? (
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
          ) : (
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                        className="bg-white border-b "
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
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
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
