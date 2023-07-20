import { Link } from "react-router-dom";
import CTAButton from "../../components/CtaButton";
import PageHeading from "../../components/PageHeading";
import { newsList } from "../../assets/data/news";

let News = () => {
  return (
    <div className="news_root pb-32 pt-8 lg:pt-20 xl:py-32">
      <PageHeading heading="The Latest" />

      <div className="w-[100%] xl:w-[70%] text-center mx-auto">
        <div className="uppercase w-[90%] xl:w-[70%] m-auto  text-gray-300 text-3xl xl:text-6xl text-shadow-theme text-yellow-theme text-left">
          News
        </div>
        <div className="news_list flex flex-col mt-5 justify-between">
          {newsList.map(({ date, title, path, img, text }, ind) => {
            if (ind < 5) {
              return (
                <div
                  className="item w-[90%] xl:w-[70%] m-auto flex  flex-col md:flex-row bg-news p-4 mb-8"
                  key={ind}
                >
                  <div className="w-full md:w-6/12 mb-8 md:mb-0">
                    <img
                      src={img}
                      alt=""
                      className="h-full object-contain lg:object-fill"
                    />
                  </div>
                  <div className="w-full md:w-6/12 flex flex-col md:pl-5">
                    <div className="flex flex-row justify-between mb-4 md:mb-0">
                      <div className="text-white capitalize">{date}</div>
                      <div className="bg-yellow text-white px-3 py-1 text-lg rounded relative left-0 md:left-10">
                        News
                      </div>
                    </div>
                    <Link
                      to={path}
                      className="break-normal hover:underline text-white text-2xl xl:text-4xl md:w-10/12 text-left"
                    >
                      {title}
                    </Link>
                    <p className="text-white text-left mt-5 overflow-clip">
                      {text}
                    </p>
                  </div>
                </div>
              );
            }
            return false;
          })}
        </div>
        <div className="flex flex-col">
          <div className="text-center pt-24">
            <CTAButton path="/" text="All News" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
