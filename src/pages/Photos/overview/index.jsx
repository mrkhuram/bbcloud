import React from "react";
import { useParams } from "react-router-dom";
import PageHeading from "../../../components/PageHeading";
import ReturnHome from "../../../components/ReturnHome";

const PhotosOverviewPage = () => {
  const { slug } = useParams();
  console.log(slug);

  return (
    <div className="w-full py-6 text-black">
      <div className=" m-auto w-[80%] xl:w-1/2">
        <ReturnHome link={"/photos"} title={"Return to all photos"} />
        <PageHeading heading={"Photos"} />

        <div className="grid grid-cols-5 gap-5 my-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((photo) => {
            return (
              <div
                key={photo}
                className="w-full  bg-gray-100 rounded-md overflow-hidden"
              >
                {/* eslint-disable-next-line  */}
                <img
                  src="https://kidrock.com/cdn/shop/files/We_the_People-2.jpg?v=1643917100"
                  alt="photo-background"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotosOverviewPage;
