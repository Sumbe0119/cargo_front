import React, { Children } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const MainLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className={`${pathname.startsWith('/profile') ? 'xs:space-y-0': 'xs:space-y-6'}  lg:space-y-24`}>
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
