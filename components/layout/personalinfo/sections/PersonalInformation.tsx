import React, { useState } from "react";
import { SelectActive } from "../../../inputs";
import { Title } from "../../../title";
import BidsLog from "./BidsLog";
import CustomerOverview from "./CustomerOverview";
import Information from "./Information";
import PhotoModal from "./PhotoModal";

const PersonalInformation = () => {
  return (
    <div>
      <div className="text-gray1 px-10 mt-5">
        <div className=" flex justify-between">
          <span>Radius: 4.5 miles</span>
          <span>Last App Login: Nov, 05, 2022</span>
        </div>
        <span className="font-semibold text-lg block mt-3">
          8951 Alpine St, Detroit, MI 48888, United States
        </span>
      </div>
      <div className="flex justify-between mt-8">
        <Information />
        <CustomerOverview />
      </div>
      <div className="mt-5">
        <BidsLog />
      </div>
    </div>
  );
};

export default PersonalInformation;
