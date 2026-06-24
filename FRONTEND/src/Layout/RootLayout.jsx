import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Copyright from "../Components/Copyright";

const RootLayout = () => {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />

      <div className="flex h-full justify-center bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default RootLayout;
