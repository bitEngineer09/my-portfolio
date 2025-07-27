import React from "react";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AppLayout = () => {
  return (
    <div>
      <div className="mt-10">
        <NavBar />
      </div>
      <Outlet />
    </div>
      
  );
};

export default AppLayout;
