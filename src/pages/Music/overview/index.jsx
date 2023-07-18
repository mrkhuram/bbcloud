import React from "react";
import { useParams } from "react-router-dom";

const MusicOverviewPage = () => {
  const { slug } = useParams();
  console.log(slug);

  return <div>MusicOverviewPage</div>;
};

export default MusicOverviewPage;
