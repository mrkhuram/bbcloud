import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import CTAButton from "../../components/CtaButton";
import { useNavigate } from "react-router-dom";

const SuccessPayment = () => {
  let navigate = useNavigate();
  useEffect(() => {
    let timeout = setTimeout(() => {
      navigate("/store");
    }, 3000);
    return ()=> clearTimeout(timeout);
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#444]">
      <div className="bg-white p-10 rounded">
        <div className="w-[100px] h-[100px] bg-red-500 flex items-center justify-centner rounded-full m-auto bg-[#9ee19e] text-[#0dc30d]">
          <FaCheck className="font-relative m-auto" fontSize={80} />
        </div>
        <h1 className="text-4xl mt-8 mb-1 text-[#dbb52f] font-bold text-center">
          Payment Successful
        </h1>
        <p className="text-center text-[#444] text-xl">
          You have Successfully paid 30.04$.
        </p>
        <div className="mt-6 text-center">
          <CTAButton
            text={"Go to Home"}
            classes={"!w-full block hover:!border-[#dbb52fbf] hover:text-black"}
            path={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
