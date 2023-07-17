import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";


const CarouselComp = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      swipeable={true}
    >
      <div>
        <Link to='/store'>
          <img src='https://cdn.shopify.com/s/files/1/0086/9315/3852/t/2/assets/slide-4-image.jpg?v=12992332416654516371646949875' alt="carousel 1" />
        </Link>      
      </div>
      <div>
        <Link to='/store'>
          <img src='https://cdn.shopify.com/s/files/1/0086/9315/3852/t/2/assets/slide-5-image.jpg?v=62087092770412964211643129851' alt="carousel 2"/>
        </Link>
      </div>
    </Carousel>
  );
};
export default CarouselComp;
