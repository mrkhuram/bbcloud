const PageHeading = ({ heading }) => (
  <div className="w-[97%] xl:w-[90%]  flex flex-col xl:flex-row mx-auto">
    <div className="w-full xl:w-5/12 text-center mx-auto mb-5">
      <div className="capitalize text-gray-300 text-4xl lg:text-7xl xl:text-8xl text-shadow-theme text-yellow-theme">
        {heading}
      </div>
    </div>
  </div>
);

export default PageHeading;
