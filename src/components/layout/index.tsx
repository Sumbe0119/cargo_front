import React, { Children } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const MainLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className={``}>
      <MainHeader />
      <div className="custom-min-h-screen">
        <Outlet />
      </div>
      <div className="h-11"></div>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
