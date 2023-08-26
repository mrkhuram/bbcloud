import React, { useState } from "react";
import PageHeading from "../../components/PageHeading";
import { Link } from "react-router-dom";
import { youtubeData } from "../../assets";
import YouTube from "react-youtube";

const Videos = () => {
  const [openTab, setOpenTab] = useState(1);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="music_page_root pb-32 pt-8 lg:pt-20 ">
      <PageHeading heading="Videos" />

      <div className="flex flex-wrap items-center justify-center pt-12">
        <div>
          <ul
            className="flex mb-0 list-none items-center pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl uppercase px-5 py-3 shadow-lg rounded-xl block leading-normal " +
                  (openTab === 1
                    ? "bg-yellow text-black box-shadow-theme "
                    : "bg-tab text-white box-shadow-tab")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                all
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xl uppercase px-5 py-3 shadow-lg rounded-xl block leading-normal " +
                  (openTab === 2
                    ? "bg-yellow text-black box-shadow-theme "
                    : "bg-tab text-white box-shadow-tab")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                official
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full mt-8">
        <hr className="w-10/12 h-0.5 my-8 mt-10 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="text:2xl md:text-5xl text-white absolute px-4 -translate-x-1/2 bg-[#aeaeae] left-1/2 dark:bg-gray-900">
          {openTab === 1 ? "All Videos" : "Official Videos"}
        </div>
      </div>
      <div className="w-9/12 justify-center gap-8 lg:w-10/12 m-auto image_outer_box flex flex-wrap flex-row">
        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}

        {youtubeData.map((item, ind) => (
          <Link to={`video-${item}`} key={ind}>
            <div
              key={item}
              className="w-[16rem] md:w-96 mt-3  hover:text-[#dbb52f] text-white "
            >
              <div className="poster overflow-hidden">
                <YouTube videoId={item.url} opts={opts} />
              </div>
              <div className="details bg-[#383838b3] h-40 text-center flex flex-col items-center justify-center ">
                <div className="text-3xl text-start mx-2 font-bold ">
                  {item.title}
                </div>
                <div className="text-2xl text-yellow-theme mt-4">
                  ({item.uploadedAt})
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Videos;
