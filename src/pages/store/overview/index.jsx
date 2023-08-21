import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { dataStore } from "../../../assets/data/store";
import ReturnHome from "../../../components/ReturnHome";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductPage = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(0);
  let {state:product} = useLocation()
  const inc = () => {
    setQuantity(quantity + 1);
  };
  const dec = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="w-full py-6 text-black">
      <div className=" m-auto w-[80%] xl:w-1/2">
        <ReturnHome link={"/store"} title={"Return to store"} />

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-20 mt-12 lg:mt-32">
          <div className="flex items-center justify-center">
            <img src={product.product_image} alt="product pic" />
          </div>
          <div>
            <h2 className="text-3xl lg:text-5xl">{product.title}</h2>
            <p className="my-8 ml-2">{product.price}</p>

            <div className="mt-4">
              <p className="mb-2 text-gray-600">Quantity</p>
              <div className="border rounded-lg w-[10rem] flex items-center justify-around py-3">
                <AiOutlineMinus onClick={dec} className="cursor-pointer" />
                <p>{quantity}</p>
                <AiOutlinePlus onClick={inc} className="cursor-pointer" />
              </div>
              <p className="mt-8 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus quidem, fuga accusamus suscipit sapiente laborum vero
                assumenda est repellat voluptatem quo placeat doloremque aliquid
                veritatis consequuntur odio labore eos officia?
              </p>
              <button
                type="button"
                className="py-2.5 px-5 w-full font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="text-white mt-4 w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={()=>{
                  window.location.replace(`http://localhost:5000/api/pay/${product._id}`,'_blank', 'rel=bobbybbc')
                }}
              >
                Buy with papypal
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto ">
        <h3 className="text-2xl lg:text-3xl mt-40 mb-16">You may also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dataStore.map((store, index) => {
            return (
              <Link to={`/store/${store.ref}`} key={index}>
                <div
                  className="relative overflow-hidden"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={store.image}
                    alt={`Clothing ${index + 1}`}
                    style={{ maxWidth: "60%", height: "auto" }}
                    className="transition-all transform-gpu hover:scale-105 hover:duration-300"
                  />
                  <p>{store.name}</p>
                  <p>{store.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
