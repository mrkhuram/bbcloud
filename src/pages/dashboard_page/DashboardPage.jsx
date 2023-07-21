import Tour from "../tour/Tour";
import News from "../news";
import Music from "../Music";
import CarouselComp from "../../components/Carousel";

const DashboardPage = () => {
  return (
    <>
      <CarouselComp />
      <Tour />
      <News />
      <Music />
    </>
  );
};
export default DashboardPage;
