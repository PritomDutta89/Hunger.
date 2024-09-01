/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { verifyOrderApi } from "../../services/AllApi";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(verifyPayment, 1000);
  }, [success, orderId]);

  const verifyPayment = async () => {
    const res = await verifyOrderApi(success, orderId);
    if (res?.data?.success) {
      navigate("/order");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center min-h-[60vh]">
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </div>
    </>
  );
};

export default Verify;
