import React from "react";
import { Outlet } from "react-router-dom";

const TranspoLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default TranspoLayout;
