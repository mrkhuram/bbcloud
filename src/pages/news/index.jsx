import { Link } from "react-router-dom";
import CTAButton from "../../components/CtaButton";
import PageHeading from "../../components/PageHeading";
import { getItems } from "../../constrain/helper";
import { useEffect, useState } from "react";
import { useNotification } from "../../constrain/noficationHook";
import AppLoading from "../../constrain/AppLoading";
import { formatDate } from "../../constrain/dateFormat";

let News = () => {
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

      <div className="w-[100%] xl:w-[70%] text-center mx-auto">
        <div className="uppercase w-[90%] xl:w-[70%] m-auto  text-gray-300 text-3xl xl:text-6xl text-shadow-theme text-yellow-theme text-left">
          News
        </div>
        <div className="news_list flex flex-col mt-5 justify-between">
          {news.map(({ createdAt, title, _id, img, description }, ind) => {
            return (
              <div
                className="item w-[90%] xl:w-[70%] m-auto flex  flex-col md:flex-row bg-news p-4 mb-8"
                key={ind}
              >
                <div className="w-full mb-8 md:mb-0">
                  <img
                    src={
                      "https://cdn.shopify.com/s/files/1/0086/9315/3852/articles/Group_Photo_No_Bird_smaller.jpg?v=1683923410"
                    }
                    alt=""
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
                    to={_id}
                    className="break-normal hover:underline text-white text-2xl xl:text-4xl md:w-10/12 text-left"
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
          <div className="text-center pt-24">
            <CTAButton path="/news" text="All News" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
