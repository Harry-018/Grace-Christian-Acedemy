import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../../Components/AdminNav.jsx";

const AdminLayout = () => {
  return (
    <div className="flex max-h-screen flex-col overflow-hidden font-[Poppins] lg:flex-row">
      <AdminNav />

      <main className="flex-1 overflow-y-auto bg-egg p-5 text-egg-dark">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
