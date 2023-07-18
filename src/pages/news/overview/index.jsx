import React from "react";
import { useParams } from "react-router-dom";
import { newsList } from "../../../assets/data/news";
import ReturnHome from "../../../components/ReturnHome";

const NewsOverviewPage = () => {
  const { slug } = useParams();
  const news = newsList.find((news) => news.path === slug);

  return (
    <div className="w-full py-6 text-black">
      <div className=" m-auto w-[80%] xl:w-1/2">
        <ReturnHome link={"/news"} title={"Return to all news"} />

        <h1 className="text-3xl lg:text-5xl  mb-6 text-theme-1">
          {news.title}
        </h1>
        <p className="text-center">{news.date}</p>

        <p className="mt-8 mb-8">{news.text}</p>
        <div className="w-1/2">
          <img src={news.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewsOverviewPage;
