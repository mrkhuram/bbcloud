import React from "react";
import { useParams } from "react-router-dom";

const NewsOverviewPage = () => {
  const { slug } = useParams();
  console.log(slug);
  return <div>NewsOverviewPage</div>;
};

export default NewsOverviewPage;
