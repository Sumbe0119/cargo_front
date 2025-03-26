import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const MainLayout = () => {
  return (
    <div className="xs:space-y-6 lg:space-y-12">
      <MainHeader />
      <Outlet />
      <div className="h-11"></div>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
