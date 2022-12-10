import React from "react";
import HistoryLog from "./HistoryLog";
import MasterCard from "./MasterCard";

const Wallet = () => {
  return (
    <div>
      <div className="my-10">
        <MasterCard />
      </div>
      <div>
        <h4 className="font-bold text-lg text-center text-gray1">
          Junkker History Log
        </h4>
        <div className="mt-10">
            <HistoryLog />
            <HistoryLog />
            <HistoryLog />

        </div>
      </div>
    </div>
  );
};

export default Wallet;
