import CarouselComp from "../../components/Carousel";
import Music from "../Music";
import News from "../news";
import Tour from "../tour/Tour";

const DashboardPage = () => {
  return (
    <>
      <CarouselComp />
      <Tour isLandingPage={true} />
      <News isLandingPage={true} />
      <Music />
    </>
  );
};
export default DashboardPage;
