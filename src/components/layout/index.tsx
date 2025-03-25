import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const MainLayout = () => {
  return (
    <div className="space-y-14">
      <MainHeader />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default MainLayout;
