import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import Copyright from "../../Components/Copyright";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col font-[Poppins]">
      <Navbar />

      <main className="flex flex-1 justify-center bg-egg text-egg-dark">
        <Outlet />
      </main>

      <Footer />
      <Copyright />
    </div>
  );
};

export default RootLayout;
