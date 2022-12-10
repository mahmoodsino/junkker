import React from "react";
import { Title } from "../../../title";

const CustomerOverview = () => {
  return (
    <div className="w-[48%] border rounded-xl  bg-gray2">
      <Title>Customer Overview</Title>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Total Junkkers:</span>
        <span>16</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">won bids:</span>
        <span>10</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Lost bids:</span>
        <span>6</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Refunds:</span>
        <span>2</span>
      </div>
    </div>
  );
};

export default CustomerOverview;
