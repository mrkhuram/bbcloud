import React, { useState } from "react";
import "./dashboard-container.css";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function DashboardContainer() {
  return (
    <div
      className={`w-screen`}
    >
      <Header />
      <div className='layout-mask'></div>
      <div className=''>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardContainer;
