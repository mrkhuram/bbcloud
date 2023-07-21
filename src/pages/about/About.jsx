import React from "react";
// import { Link } from "react-router-dom";
import PageHeading from "../../components/PageHeading";

const About = () => {
  return (
    <div className="music_page_root pb-32 pt-8 lg:pt-20">
      <PageHeading heading="About" />

      <div className="w-[90%] md:w-9/12 lg:w-[60%] m-auto image_outer_box flex flex-wrap flex-row gap-10 justify-center">
        <div className="inline-flex items-center justify-center w-full ">
          <hr className="w-10/12 h-0.5 my-8 mt-10 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="text:2xl md:text-5xl text-white absolute px-4 -translate-x-1/2 bg-[#aeaeae] left-1/2 dark:bg-gray-900">
            Kid Rock
          </div>
        </div>
        <div className="w-full h-full m-auto mt-4 mb-4">
          <img
            src="https://kidrock.com/cdn/shop/t/2/assets/2013_1002_2840_594.jpeg?v=33415565719819587081556134704"
            alt="kid roc"
            className="m-auto"
          />
        </div>
        <div>
          <p className="text-black text-lg md:text-2xl ">
            Kid Rock burst onto the music scene in 1998 with his Devil Without a
            Cause album and hasn't looked back. From hit singles like
            “Bawitdaba” and “Cowboy” to “Picture” and “All Summer Long,” the
            recording artist has blazed his own trail in the music world, having
            sold over 26 million albums to date and continuing tour. Kid Rock
            holds the Michigan record for most tickets sold with 150,000 for a
            run of ten consecutive sold-out shows, and recently set the Little
            Caesars Arena attendance record in his hometown of Detroit with
            86,893 attendees in six sold-out shows. On the heels of his arena
            success, Kid Rock recently announced his “American Rock n Roll Tour
            2018” in tandem with his brand-new album Sweet Southern Sugar. The
            tour kicks off on January 19 at Bridgestone Arena in Nashville,
            Tennessee and will continue with 21 shows from coast to coast. Sweet
            Southern Sugar is Kid Rock’s first album recorded in Nashville and
            features recent singles “Tennessee Mountain Top,” “Po-Dunk,” and the
            tour name, “American Rock n Roll.” Kid Rock remains at the center of
            media attention in regards to his musical and personal ambitions,
            leaving his mark in a multitude of genres.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
