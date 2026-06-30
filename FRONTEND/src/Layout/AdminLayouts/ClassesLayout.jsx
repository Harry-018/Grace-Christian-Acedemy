import React from "react";
import { Outlet } from "react-router-dom";

const ClassesLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ClassesLayout;
