// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placed-order/PlaceOrder";
import { DataProvider } from "./context/DataContext";
import Footer from "./components/footer/Footer";
import LoginPopUp from "./components/login-popup/LoginPopUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <DataProvider>
        {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
        <div className="p-0 box-border min-h-[100vh] text-inherit w-[90%] m-auto">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
          <Footer />

          <ToastContainer />
        </div>
      </DataProvider>
    </>
  );
};

export default App;
