import React from "react";
import { dataStore } from "../../assets/data/store";
import PageHeading from "../../components/PageHeading";
import { Link } from "react-router-dom";

function Store() {
  return (
    <div className="py-6 mt-20">
      <PageHeading heading={"Store"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center text-black m-10">
        {dataStore.map((data, index) => (
          <Link to={`/store/${data.ref}`} key={index}>
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
                src={data.image}
                alt={`Clothing ${index + 1}`}
                style={{ maxWidth: "60%", height: "auto" }}
                className="transition-all transform-gpu hover:scale-105 hover:duration-300"
              />
              <p>{data.name}</p>
              <p>{data.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Store;
