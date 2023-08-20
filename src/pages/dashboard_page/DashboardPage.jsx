import CarouselComp from "../../components/Carousel";
import Music from "../Music";
import News from "../news";
import Tour from "../tour/Tour";

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
