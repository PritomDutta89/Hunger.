/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { userOrdersApi } from "../../services/AllApi";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { token } = useDataContext();

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  const fetchOrders = async () => {
    const orderData = await userOrdersApi(token);
    console.log(orderData?.data);
    setData(orderData?.data ? orderData?.data : [])
  };

  return <div>MyOrders</div>;
};

export default MyOrders;
