import React from "react";
import { useParams } from "react-router-dom";
import PageHeading from "../../../components/PageHeading";
import ReturnHome from "../../../components/ReturnHome";

const VideosOverviewPage = () => {
  const { slug } = useParams();

  return (
    <div className="w-full py-6 text-black">
      <div className=" m-auto w-[80%] xl:w-[70%]">
        <ReturnHome link={"/videos"} title={"Return to all videos"} />
        <PageHeading heading={"Video"} />

        <div className=" my-8 m-auto">
          <div className="w-full  bg-gray-100 rounded-md overflow-hidden">
            <iframe
              className="w-full h-[40vh] lg:h-[50vh] m-auto"
              src="https://www.youtube.com/embed/KJwYBJMSbPI"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosOverviewPage;
