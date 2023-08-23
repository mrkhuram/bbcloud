const Footer = () => {
  return (
    <div className="footer_root bg-black py-10 w-full">
      <div className="w-[97%] xl:w-[90%] flex flex-col md:flex-row mx-auto  md:h-56">
        <div className="md:w-6/12 text-center border border-0 md:border-r-4 border-gray-500">
          <div className="text-3xl lg:text-5xl uppercase text-white flex justify-center">
            kid rock <div className="text-yellow-theme ml-3">Social</div>
          </div>
        </div>
        <div className="md:w-6/12 text-center">
          <div className="text-3xl lg:text-5xl uppercase text-white flex justify-center">
            join the <div className="text-yellow-theme ml-3">email list</div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="border border-white border-2 px-2 py-2 bg-transparent text-left text-white outline-none rounded w-auto"
              placeholder="Enter your email"
            />
            <button className="border border-white px-2 py-2 bg-transparent border-2 text-white ml-2 rounded">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-[98%] lg:w-[90%] m-auto items-center mt-10 text-[#444]">
        <div className="text-center md:text-start">
          <small className="mb-1">@2023 KID ROCK</small>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <a className="hover:text-[#dbb52f]" href="/customer-support">
              Customer Support
            </a>
            <p>|</p>
            <a className="hover:text-[#dbb52f]" href="/term-of-services">
              Terms of Services
            </a>
            <p>|</p>
            <a className="hover:text-[#dbb52f]" href="privacy-policy">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="w-full text-center">
          <img
            src="https://kidrock.com/cdn/shop/t/2/assets/2017_1018_2506_7262.png?v=14718454488212175581555953557"
            alt="logo"
            className="w-[180px] m-auto"
          />
        </div>
        <div className="w-full text-center md:text-end">
          <span>
            Powered by{" "}
            <a href="/one-live" className="hover:text-[#dbb52f]">
              One Live Media
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
