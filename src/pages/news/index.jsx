import { Link } from "react-router-dom";
import CTAButton from "../../components/CtaButton";
import PageHeading from "../../components/PageHeading";
import { getItems } from "../../constrain/helper";
import { useEffect, useState } from "react";
import { useNotification } from "../../constrain/noficationHook";
import AppLoading from "../../constrain/AppLoading";
import { formatDate } from "../../constrain/dateFormat";

let News = ({ isLandingPage }) => {
  const [news, setNews] = useState(null);
  const { notification, pushNotification, closeNotification } =
    useNotification();

  useEffect(() => {
    async function fetchData() {
      try {
        const allNews = await getItems("news/read_all");
        if (allNews.status === 200) {
          const { data } = allNews;
          setNews(data.News);
        }
      } catch (error) {
        pushNotification(error?.response?.data?.message);
      }
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  if (!news)
    return <AppLoading close={closeNotification} notification={notification} />;

  console.log(news);
  return (
    <div className="news_root pb-32 pt-8 lg:pt-20">
      <PageHeading heading="The Latest" />

      <div className="w-[100%] xl:w-[90%] text-center mx-auto">
        <div className="uppercase w-[90%] xl:w-[90%] m-auto  text-gray-300 text-3xl xl:text-6xl text-shadow-theme text-yellow-theme text-left">
          News
        </div>
        <div className="news_list flex flex-col mt-5 justify-between">
          {news.map(({ createdAt, title, _id, image, description }, ind) => {
            return (
              <div
                className="item w-[90%] xl:w-[90%] m-auto flex  flex-col md:flex-row bg-news p-4 mb-8"
                key={ind}
              >
                <div className="w-full mb-8 md:mb-0">
                  <img
                    src={`http://16.171.254.234:5000/uploads/${image}`}
                    alt="album images"
                    className="h-full object-contain lg:object-fill"
                  />
                </div>
                <div className="w-full flex flex-col md:pl-5">
                  <div className="flex flex-row justify-between mb-4 md:mb-0">
                    <div className="text-white capitalize">
                      {formatDate(createdAt)}
                    </div>
                    <div className="bg-yellow text-white px-3 py-1 text-lg rounded relative left-0 md:left-10">
                      News
                    </div>
                  </div>
                  <Link
                    to={`/news/${_id}`}
                    className=" uppercase break-normal hover:underline text-white text-2xl lg:text-4xl md:w-10/12 text-left"
                  >
                    {title}
                  </Link>
                  <p className="text-white text-left mt-5 overflow-clip">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          {isLandingPage && (
            <div className="text-center pt-24">
              <CTAButton path="/news" text="All News" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
