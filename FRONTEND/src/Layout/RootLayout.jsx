import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="flex h-full w-full justify-center bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
