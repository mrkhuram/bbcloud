import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/images/logo.png";
import { AiOutlineClose } from "react-icons/ai";

const SideNavBar = ({ hideSideBar }) => {
  const nav = [
    { title: "home", path: "/" },
    { title: "tour", path: "/tour" },
    { title: "news", path: "/news" },
    { title: "music", path: "/music" },
    { title: "photos", path: "/photos" },
    { title: "videos", path: "/videos" },
    { title: "about", path: "/news" },
    { title: "store", path: "/store" },
  ];

  return (
    <div className="absolute top-0 right-0 bg-black h-full z-30 w-[18rem] sidebar">
      <span className="top-4 left-4 absolute">
        <AiOutlineClose
          color="white"
          fontSize={20}
          className="cursor-pointer"
          onClick={hideSideBar}
        />
      </span>
      <div className="flex flex-col gap-3 pt-8 ">
        <img src={logo} alt="" className="w-[10rem] m-auto mb-8" />
        {nav.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            onClick={hideSideBar}
            className="ml-14 w-[9rem] text-3xl mt-4 text-white hover:text-white/75 capitalize"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
