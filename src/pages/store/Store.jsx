import React from "react";
import { dataStore } from "../../assets/data/store";

function Store() {
  return (
    <div
      className="grid grid-cols-4 text-center text-black m-10"
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
      onClick={() => {
        console.log("-------------->Display");
      }}
    >
      {dataStore.map((data, index) => (
        <a href={`/store/${data.ref}`}>
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
        </a>
      ))}
    </div>
  );
}

export default Store;
