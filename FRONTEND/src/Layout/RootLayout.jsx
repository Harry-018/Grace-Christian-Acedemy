import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="flex h-full w-full justify-center bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
