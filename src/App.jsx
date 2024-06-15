// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placed-order/PlaceOrder";
import { DataProvider } from "./context/DataContext";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="p-0 box-border min-h-[100vh] text-inherit w-[90%] m-auto">
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        <Footer/>
      </DataProvider>
    </div>
  );
};

export default App;
