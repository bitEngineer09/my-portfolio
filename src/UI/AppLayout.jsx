import React from "react";
import DarkVeil from "/ReactBits/DarkVeil/DarkVeil"

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div>
      {/* <div style={{ width: "100%", height: "100vh", position: "absolute", zIndex: -1, top: 0}}>
        <DarkVeil />
      </div> */}
      <div className="mt-10">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
