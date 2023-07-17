import PageHeading from "../../components/PageHeading";
const PhotosPage = () => {
  return (
    <div className="music_page_root py-32 ">
      <PageHeading heading="Music" />
      <div className="w-9/12 lg:w-10/12 m-auto image_outer_box flex flex-wrap flex-row">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className=" w-96 text-left mt-3 mr-10 ">
            <div className="poster overflow-hidden">
              <img
                src="https://kidrock.com/cdn/shop/files/We_the_People-2.jpg?v=1643917100"
                alt=""
                className="hover:scale-110 transition-transform delay-75 duration-75 ease-in-out"
              />
            </div>
            <div className="text-white text-4xl font-bold mt-2">
              We the People
            </div>
            <div className="text-2xl text-black">(Jan 21, 2022)</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PhotosPage;
