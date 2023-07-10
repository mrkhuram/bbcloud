import { useState } from "react";
import CarouselComp from "../../components/Carousel";
import Tour from "../../components/Tour";
import News from "../../components/News";
import Music from "../../components/Music";
import Store from "../../components/Store";
const DashboardPage = () => {
  return (
    <>
      <CarouselComp />
      <Tour />
      <News />
      <Music />
      <Store/>
    </>
  );
};
export default DashboardPage;
