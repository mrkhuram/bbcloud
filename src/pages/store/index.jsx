import React, { useState, useEffect } from "react";
import { dataStore } from "../../assets/data/store";
import PageHeading from "../../components/PageHeading";
import { Link } from "react-router-dom";
import { useNotification } from "../../constrain/noficationHook";
import AppLoading from "../../constrain/AppLoading";
import { getItems } from "../../constrain/helper";
import { imageBaseURL } from "../../helpers/utils";
import CTAButton from "../../components/CtaButton";

function Store() {
  const [products, setProducts] = useState(null);
  const { notification, pushNotification, closeNotification } =
    useNotification();

  useEffect(() => {
    async function fetchData() {
      try {
        const allProducts = await getItems("/store/read_all/products");
        if (allProducts.status === 200) {
          const { data } = allProducts;
          console.log(data);
          setProducts(data.Product);
        }
      } catch (error) {
        pushNotification(error?.response?.data?.message);
      }
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  if (!products)
    return <AppLoading close={closeNotification} notification={notification} />;

  return (
    <div className="py-6 mt-20">
      <PageHeading heading={"Store"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-10 text-center text-black m-10">
        {products.map((data, index) => {
          return (
            <Link to={`/store/${data._id}`} state={data} key={index}>
              <div
                key={index}
                className="relative overflow-hidden"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src={`${imageBaseURL}/${data.product_image}`}
                  alt={`Clothing ${index + 1}`}
                  style={{ maxWidth: "20rem", height: "auto" }}
                  className="transition-all transform-gpu hover:scale-105 hover:duration-300"
                />
                <div className="py-2 px-4 bg-[#eaeaea] shadow-lg w-full max-w-[20rem]">
                  <p className="text-start text-xl mb-2">{data.title}</p>
                  <div className="flex items-center justify-between">
                    <p>Quantity: {data.quantity}</p>
                    <p>Price: ${data.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
