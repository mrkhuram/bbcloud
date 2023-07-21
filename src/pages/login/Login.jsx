import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-black pt-20 pb-32">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-white font-bold">
            Kid Rock login
          </h1>
          <div className="w-[80%] m-auto mt-12">
            <div className="mb-12">
              <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium grey-tag"
              >
                Email
              </label>
              <input
                placeholder="Email"
                type="text"
                id="email"
                className="app-input-field"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-xl font-medium grey-tag"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="app-input-field"
              />
            </div>
            <Link to={"/login"} className="text-white">
              Forget your password
            </Link>
            <div className="mt-4">
              <button
                type="submit"
                className="border-theme-1 border px-8 py-2 mb-8 uppercase hover:bg-theme-1 text-white text-xl md:text-2xl "
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-12 lg:mt-0">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-white font-bold">
            Kid Rock Registration
          </h1>
          <div className="w-[80%] lg:w-[50%] m-auto mt-12">
            <div className="mb-6">
              <label
                htmlFor="firstName"
                className="block mb-2 text-xl font-medium grey-tag"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                className="app-input-field"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="LastName"
                className="block mb-2 text-xl font-medium grey-tag"
              >
                Last Name
              </label>
              <input
                type="LastName"
                placeholder="LastName"
                id="LastName"
                className="app-input-field"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="regEmail"
                className="block mb-2 text-xl font-medium grey-tag"
              >
                Email
              </label>
              <input
                type="regEmail"
                placeholder="Email"
                id="regEmail"
                className="app-input-field"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="regPassword"
                className="block mb-2 text-xl font-medium grey-tag"
              >
                Password
              </label>
              <input
                type="regPassword"
                placeholder="Password"
                id="regPassword"
                className="app-input-field"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="border-theme-1 border px-8 py-2 mb-8 uppercase hover:bg-theme-1 text-white text-xl md:text-2xl "
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
