import React from "react";
import { BaseButton } from "../../../buttons";
import { Title } from "../../../title";
import { UserNameTap } from "../elements";

const MainSection = () => {
  return (
    <div className="py-12 px-7">
      <div className="w-[65%] border bg-[#F4F5F6] rounded-xl pb-5">
        <Title>Gift Junkker</Title>
        <div className="px-5 py-5">
          <span className="text-gray1 font-semibold">Choose Users</span>
          <div className="w-full border bg-white px-3 py-1.5 flex space-x-2">
            <UserNameTap name="userName1" />
            <UserNameTap name="userName2" />
          </div>
          <div className="flex justify-center py-10">
            <BaseButton title="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
