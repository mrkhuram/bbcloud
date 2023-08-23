import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ReturnHome = ({ link, title }) => {
  return (
    <div className="block w-auto mb-8">
      <Link
        className="flex w-auto gap-1 items-center justify-start text-theme-2 hover:text-theme-2/60"
        to={link}
      >
        <IoIosArrowBack fontSize={17} fontWeight={70} />
        <b className=" uppercase">{title}</b>
      </Link>
    </div>
  );
};

export default ReturnHome;
