import React, { useState } from "react";
import { BaseInput } from "../../../inputs";
import { Title } from "../../../title";
import BuyersTable from "./BuyersTable";
import SellarTable from "./SellarTable";

const MainSection = () => {
  const [index, setIndex] = useState(1);

  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl  bg-gray2  pb-5">
        <Title>13 Recent Users</Title>
        <div className="overflow-x-auto   mt-5">
          <div className="overflow-hidden mx-5 border rounded-xl">
            <div className="bg-gray5">
              <div className="py-4 pl-4 flex space-x-7">
                <div className="w-[25%]">
                  <BaseInput
                    type="text"
                    placeholder="Search by Name, Phone num"
                  />
                </div>
                <div className="border border-gray1 rounded-md flex mx-2">
                  <button
                    onClick={() => setIndex(1)}
                    className={`bg-white px-3 rounded-l-md ${
                      index === 1 && "bg-gray1 text-white"
                    }`}
                  >
                    Buyers
                  </button>
                  <button
                    onClick={() => setIndex(2)}
                    className={`bg-white px-3 rounded-r-md ${
                      index === 2 && "bg-gray1 text-white"
                    }`}
                  >
                    Sellers
                  </button>
                </div>
              </div>
            </div>
            {index === 1 ? <BuyersTable /> : <SellarTable />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
