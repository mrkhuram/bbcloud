import React, { useState } from "react";
import PageHeading from "../../components/PageHeading";
import YouTube from "react-youtube";

const Videos = () => {
  const [openTab, setOpenTab] = useState(1);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
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
        {[7, 8, 9, 10, 11, 12].map((i) => (
          <div className="news_list flex flex-col mt-5 justify-between" key={i}>
            <YouTube videoId="2g811Eo7K8U" opts={opts} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Videos;
