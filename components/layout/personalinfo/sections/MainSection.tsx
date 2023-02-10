import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import PersonalInformation from "./PersonalInformation";
import Wallet from "./Wallet";

const MainSection = () => {
  const [index, setIndex] = useState(1);
  const { query } = useRouter();


  const taps = () => {
    return (
      <div className="border bg-gray2 rounded-lg text-center space-x-10 py-5">
        <button
          onClick={() => setIndex(1)}
          className={` font-bold text-lg ${
            index == 1 ? "text-black" : "text-[#878787]"
          }`}
        >
          Personal Information
          {index == 1 && (
            <hr className="w-[45%] border-[2px] rounded m-auto border-[#FA5D3A] mt-2" />
          )}
        </button>
        <button
          onClick={() => setIndex(2)}
          className={` font-bold text-lg ${
            index == 2 ? "text-black" : "text-[#878787]"
          }`}
        >
          Wallet{" "}
          {index == 2 && (
            <hr className="w-[45%] border-[2px] rounded m-auto border-[#FA5D3A] mt-2" />
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="py-9 mx-5 ">
      {taps()}
      {index === 1 ? <PersonalInformation /> : query.id &&  <Wallet id={+query.id} />}
    </div>
  );
};

export default MainSection;
