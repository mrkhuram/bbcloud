import React from "react";
import { useParams } from "react-router-dom";

const PhotosOverviewPage = () => {
  const { slug } = useParams();
  console.log(slug);

  return <div>PhotosOverviewPage</div>;
};

export default PhotosOverviewPage;
