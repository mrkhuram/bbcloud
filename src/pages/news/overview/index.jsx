import React from "react";
import { useParams } from "react-router-dom";
import ReturnHome from "../../../components/ReturnHome";
import { getItems } from "../../../constrain/helper";
import { useEffect, useState } from "react";
import { useNotification } from "../../../constrain/noficationHook";
import AppLoading from "../../../constrain/AppLoading";
import { formatDate } from "../../../constrain/dateFormat";

const NewsOverviewPage = () => {
  const { slug } = useParams();

  const [news, setNews] = useState(null);
  const { notification, pushNotification, closeNotification } =
    useNotification();

  useEffect(() => {
    async function fetchData() {
      try {
        const allNews = await getItems(`news/read/${slug}`);
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

  return (
    <div className="w-full py-6 text-black">
      <div className=" m-auto w-[80%] xl:w-1/2">
        <ReturnHome link={"/news"} title={"Return to all news"} />

        <h1 className="text-3xl lg:text-5xl  mb-6 text-theme-1">
          {news.title}
        </h1>
        <p className="text-center">{formatDate(news.createdAt)}</p>

        <p className="mt-8 mb-8">{news.description}</p>
        <div className="w-1/2">
          <img
            src="https://cdn.shopify.com/s/files/1/0086/9315/3852/articles/Group_Photo_No_Bird_smaller.jpg?v=1683923410"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewsOverviewPage;
