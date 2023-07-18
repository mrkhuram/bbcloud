import React, { useState } from "react";
import PageHeading from "../../components/PageHeading";

const Videos = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="music_page_root py-16 ">
      <PageHeading heading="Videos" />

      <div className="flex flex-wrap items-center justify-center pt-12">
        <div className="w-3/12">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
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
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div class="inline-flex items-center justify-center w-full mt-8">
        <hr class="w-10/12 h-0.5 my-8 mt-10 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div class="text-5xl text-white absolute px-4 -translate-x-1/2 bg-[#aeaeae] left-1/2 dark:bg-gray-900">
          {openTab === 1 ? "All Videos" : "Official Videos"}
        </div>
      </div>
      <div className="w-9/12 lg:w-10/12 m-auto image_outer_box flex flex-wrap flex-row">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className=" w-96 mt-3 mr-10  hover:text-[#dbb52f] text-white ">
            <div className="poster overflow-hidden">
              <img
                src="https://kidrock.com/cdn/shop/files/We_the_People-2.jpg?v=1643917100"
                alt=""
                className="hover:scale-110 transition-transform delay-75 duration-75 ease-in-out"
              />
            </div>
            <div className="details bg-[#383838b3] h-40 text-center flex flex-col items-center justify-center ">
              <div className="text-4xl font-bold ">We the People</div>
              <div className="text-2xl text-yellow-theme">(Jan 21, 2022)</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Videos;
