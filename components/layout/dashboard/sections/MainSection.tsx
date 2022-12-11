import React from "react";
import { BaseButton } from "../../../buttons";
import { DashboardCard } from "../../../cards";
import Chart from "./Chart";
import SelectInput from "../../../inputs";

const MainSection = () => {
  return (
    <div>
      <div className="space-x-3 flex px-10 py-12">
        <SelectInput optionName="Month" />
        <SelectInput optionName="Day" />
        <SelectInput optionName="Year" />
        <BaseButton title="show" />
      </div>

    <div className="flex ">
      <div className="w-[65%]">
        <Chart />
      </div>
      <div className=" ">
        <DashboardCard />
      </div>
    </div>
    </div>
  );
};
export default MainSection;
