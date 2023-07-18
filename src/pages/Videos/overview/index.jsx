import React from "react";
import { useParams } from "react-router-dom";

const VideosOverviewPage = () => {
  const { slug } = useParams();

  console.log(slug);

  return <div>VideosOverviewPage</div>;
};

export default VideosOverviewPage;
