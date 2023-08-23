import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import appImages from "../assets";

const CarouselComp = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      swipeable={true}
      className=""
    >
      <div>
        <Link to="/store">
          <img src={appImages.cover[0]} className="h-[90vh]" alt="carousel 1" />
        </Link>
      </div>
      <div>
        <Link to="/store">
          <img src={appImages.cover[1]} className="h-[90vh]" alt="carousel 2" />
        </Link>
      </div>
    </Carousel>
  );
};
export default CarouselComp;
