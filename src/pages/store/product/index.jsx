import React from "react";
import { useParams } from "react-router-dom";
import { dataStore } from "../../../assets/data/store";

const ProductPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const product = dataStore.find((p) => p.ref === slug);

  console.log(product);
  return (
    <div>
      <img src={product.image} alt="" />
      <h1>there we are</h1>
      <h1>there we are</h1>
      <h1>there we are</h1>
    </div>
  );
};

export default ProductPage;
