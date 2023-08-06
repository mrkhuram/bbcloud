import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import images from "../../../assets/images/images";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import {
  TiSocialYoutubeCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import joinClasses from "../../../helpers/joinClasses";
import { CiMenuBurger } from "react-icons/ci";
import SideNavBar from "./SideNavBar";
import { useSelector } from "react-redux";
import { LoginUser, LoggedinUser } from "./User";

const Header = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [showNavigation, setShowNavigation] = useState(false);
  const showSideNavigation = () => setShowNavigation(true);

  return (
    <header className={headerTop}>
      <div className=" w-auto flex  px-6 py-2 md:py-1 lg:px-0">
        <Link
          className="layout-topbar-logo  flex items-center justify-center mr-auto"
          to="/"
        >
          <img src={images.logo} alt="" className="w-[150px] md:w-[208px]" />
        </Link>
        <div className="flex self-center mr-4 lg:hidden">
          {user ? <LoggedinUser user={user} /> : <LoginUser />}
        </div>
        <div className=" lg:hidden flex items-center justify-center">
          <CiMenuBurger
            fontSize={30}
            color="white"
            className="cursor-pointer"
            onClick={showSideNavigation}
          />
        </div>
      </div>

      <div className="w-12/12 lg:w-9/12 flex flex-col items-center pt-3">
        <div className="flex justify-start lg:justify-end items-center w-full ml-8 lg:ml-0">
          <div className="hidden lg:block">
            {user ? <LoggedinUser user={user} /> : <LoginUser />}
          </div>

          <div className="subscribe hidden lg:block">
            <input
              type="text"
              className="border-none bg-theme-1/50 w-48 rounded p-1  mr-2 ml-2 outline-none text-white"
              placeholder="enter email for updates"
            />
            <button className="bg-gray-300 py-0.5 px-2 rounded-sm uppercase">
              Go
            </button>
          </div>
          <div className="socialIcons w-40 justify-between ml-5 hidden lg:flex ">
            <RiFacebookCircleLine
              fontSize={26}
              fill="#9CA3AF"
              className="-mt-0.5"
            />
            <BsInstagram fontSize={21} fill="#9CA3AF" className="mt-0.5" />
            <TiSocialYoutubeCircular
              fontSize={26}
              fill="#9CA3AF"
              className="-mt-0.5"
            />
            <TiSocialTwitterCircular
              fontSize={28}
              fill="#9CA3AF"
              className="-mt-0.5"
            />
          </div>
        </div>
        <nav className=" flex-row justify-end w-full flex-wrap gap-2 mr-8 hidden lg:flex">
          {[
            { title: "home", path: "/" },
            { title: "tour", path: "/tour" },
            { title: "news", path: "/news" },
            { title: "music", path: "/music" },
            { title: "photos", path: "/photos" },
            { title: "videos", path: "/videos" },
            { title: "about", path: "/about" },
            { title: "store", path: "/store" },
          ].map((item, ind) => {
            return (
              <li
                key={ind}
                className={joinClasses(
                  "uppercase text-xl font-bold text-gray-200 pt-2 break-words ",
                  ind > 0 ? "pl-2" : "",
                  " lg:text-3xl"
                )}
              >
                <Link to={item.path} title={item.title}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </nav>
      </div>

      {showNavigation && (
        <SideNavBar hideSideBar={() => setShowNavigation(false)} />
      )}
    </header>
  );
};
export default Header;

const headerTop = [
  "header-top flex bg-black flex-col lg:flex-row justify-center",
].join("");
