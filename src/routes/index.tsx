import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/layout";
import About from "../pages/About";
import Calculate from "../pages/Calculate";
import Address from "../pages/Address";

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculate" element={<Calculate />} />
            <Route path="/address" element={<Address />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
