import React from "react";
import { DashboardCard } from "../../../cards";
import Chart from "./Chart";

const MainSection = () => {
  return (
    <div className="flex ">
      <div className="w-[65%]">
        <Chart />
      </div>
      <div className="py-12">
        <DashboardCard />
      </div>
    </div>
  );
};
export default MainSection;
