import React from "react";


import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div>
    
      <div className="xl:mt-8 2xl:mt-10">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
