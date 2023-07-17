
const Footer = () => {
  return (
    <div className='footer_root bg-black py-10 w-full'>
      <div className='w-[97%] xl:w-[70%] flex flex-row mx-auto h-56'>
        <div className='w-6/12 text-center border border-0 border-r-4 border-gray-500'>
          <div className='text-5xl uppercase text-white flex justify-center'>
            kid rock <div className='text-yellow-theme ml-3'>Social</div>
          </div>
        </div>
        <div className='w-6/12 text-center'>
          <div className='text-5xl uppercase text-white flex justify-center'>
            join the <div className='text-yellow-theme ml-3'>email list</div>
          </div>
          <div className='mt-4'>
            <input
              type='text'
              className='border border-white border-2 px-2 py-2 bg-transparent text-left text-white outline-none rounded w-64'
              placeholder='Enter your email'
            />
            <button className="border border-white px-2 py-2 bg-transparent border-2 text-white ml-2 rounded">Go</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
