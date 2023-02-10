import React from "react";
import { useRecoilState } from "recoil";
import { UserDetailsAtom } from "../../../../helper";
import { Title } from "../../../title";

const CustomerOverview = () => {
  const [useDetails, setUserDetails] = useRecoilState(UserDetailsAtom);

  return (
    <div className="w-[48%] border rounded-xl  bg-gray2">
      <Title>Customer Overview</Title>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Total Junkkers:</span>
        <span>{useDetails.junkkers}</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">won bids:</span>
        <span>{useDetails.won_count}</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Lost bids:</span>
        <span>{useDetails.lose_count}</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Refunds:</span>
        <span>{useDetails.refunded_count}</span>
      </div>
    </div>
  );
};

export default CustomerOverview;
