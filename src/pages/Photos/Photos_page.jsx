
const DashboardPage = () => {
  return (
    <div className='music_page_root py-32 '>
      <div className='w-[97%] xl:w-[70%]  flex flex-col xl:flex-row mx-auto'>
        <div className='w-full xl:w-5/12 text-center mx-auto mb-5'>
          <div className='capitalize text-gray-300 text-4xl lg:text-7xl xl:text-8xl text-shadow-theme text-yellow-theme'>
            Photos
          </div>
        </div>


      </div>
      <div className="w-9/12 m-auto image_outer_box flex flex-wrap flex-row">
        {[1, 2, 3, 4, 5].map(item => <div className=" w-96 mt-3 mr-10 overflow-hidden hover:text-[#dbb52f] text-white ">
          <div className="poster">
            <img src="https://kidrock.com/cdn/shop/files/We_the_People-2.jpg?v=1643917100" alt="" className="hover:scale-110 transition-transform delay-75 duration-75 ease-in-out" />
          </div>
          <div className="details bg-[#383838b3] h-40 text-center flex flex-col items-center justify-center ">
          <div className="text-4xl font-bold ">We the People</div>
          <div className="text-2xl text-yellow-theme">(Jan 21, 2022)</div>
          </div>

        </div>)}
      </div>
    </div>
  );
};
export default DashboardPage;
