import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Copyright from "../Components/Copyright";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1 justify-center bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </main>

      <Footer />
      <Copyright />
    </div>
  );
};

export default RootLayout;
