import React from "react";
import CTAButton from "../../components/CtaButton";
import { BiErrorAlt } from "react-icons/bi";

const DeclinePayment = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#444]">
      <div className="bg-white p-10 rounded">
        <div className="w-[100px] h-[100px] bg-red-500 flex items-center justify-centner rounded-full m-auto bg-[#f0b5b5] text-[#e76c6c]">
          <BiErrorAlt className="font-relative m-auto" fontSize={80} />
        </div>
        <h1 className="text-4xl mt-8 mb-1 text-[#db7f7f] font-bold text-center">
          Payment unSuccessful
        </h1>
        <div className="mt-6 text-center">
          <CTAButton
            text={"Go to Home"}
            classes={
              "!w-full block !border-[#db7f7f] !text-[#db7f7f] hover:!border-[#db7f7f99] hover:text-black"
            }
            path={"/"}
          />
        </div>
      </div>
    </div>
  );
};
export default DeclinePayment;
