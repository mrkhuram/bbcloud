import React from "react";
import { Outlet } from "react-router-dom";
import "./auth.css";
import logo from "../../assets/images/logo.svg";
import { Image } from "primereact/image";

const Auth = () => {
  return (
    <div className="px-5 min-h-screen flex justify-content-center align-items-center">
      <div className="border-1 surface-border surface-card border-round py-7 px-4 md:px-7 z-1 auth-container">
        <div className="mb-2">
          <Image src={logo} alt="Ropstam" imageClassName="max-w-10rem" />
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
