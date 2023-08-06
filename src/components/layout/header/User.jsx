import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/userSlice";

export const LoginUser = () => {
  return (
    <div className="icon-btns flex text-gray-400">
      <img
        src="https://cdn.shopify.com/s/files/1/0086/9315/3852/t/2/assets/2016_0802_2506_4215.png?v=134684327857078586071555953557"
        alt=""
        className="mr-1"
      />
      <Link to="/login" className="uppercase mr-1">
        Login
      </Link>
      <Link to="/register" className="uppercase">
        {" / "}Create account
      </Link>
    </div>
  );
};

export const LoggedinUser = ({ user }) => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <div className="icon-btns flex  items-center  md:items-start text-gray-400">
      <img
        src="https://cdn.shopify.com/s/files/1/0086/9315/3852/t/2/assets/2016_0802_2506_4215.png?v=134684327857078586071555953557"
        alt=""
        className="mr-1"
      />
      <div className="flex flex-col md:flex-row items-start md:items-center ">
        <h2 className="uppercase mr-0 md:mr-1">
          {user?.firstName} {user?.lastName}
        </h2>

        <p to="/" className="cursor-pointer" onClick={logoutUser}>
          Logout
        </p>
      </div>
    </div>
  );
};
