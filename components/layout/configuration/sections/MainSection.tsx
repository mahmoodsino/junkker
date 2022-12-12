import React from "react";
import { BaseButton } from "../../../buttons";
import Setting from "../../../icons";
import { BaseInput } from "../../../inputs";
import { Title } from "../../../title";

const MainSection = () => {
  return (
    <div className="py-12 px-10">
      <div className="w-[65%] border  rounded-xl  bg-gray2  pb-5">
        <Title>
          <Setting className="fill-gray1" />
          Edit Configuration
        </Title>
        <div className="mx-5 border-b pb-5">
          <div className=" py-3 space-y-3">
            <label className="text-gray1 text-lg block">Junkker Fee</label>

            <BaseInput placeholder="$65" type="text" />
          </div>
          <div className=" py-3 space-y-3">
            <label className="text-gray1 text-lg block">Bid Duration</label>
            <BaseInput placeholder="30 minutes" type="text" />
          </div>
        </div>
        <div className="flex justify-center py-5">
          <BaseButton title="Save Changes" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
