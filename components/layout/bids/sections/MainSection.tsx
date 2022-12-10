import React, { useState } from "react";
import { Search } from "../../../inputs";
import { PreviousNext } from "../../../pagination";
import { Title } from "../../../title";
import RowDetails from "./RowDetails";

const MainSection = () => {
  const [open, setOpen] = useState(false);

  const handelTableBody = () => {
    return (
      <tbody className="text-sm">
        <tr className="bg-white">
          <td className="pl-6 py-5 ">123</td>
          <td className="pl-6  text-blue1">John Smith</td>
          <td className="pl-6 ">Lorem ipsum dolor sit amet consectetur.</td>
          <td className="pl-6 ">30</td>
          <td className="pl-6 ">$350.00</td>
          <td className="pl-6  text-red1  ">
            15:29
            <img
              onClick={() => setOpen(!open)}
              className="inline-block cursor-pointer ml-[50%]"
              src="angle-down.svg"
              alt=""
            />
          </td>
        </tr>
        <RowDetails open={open} />
        <tr className="bg-white">
          <td className="pl-6 py-5 ">123</td>
          <td className="pl-6  text-[#236EFF]">John Smith</td>
          <td className="pl-6 ">Lorem ipsum dolor sit amet consectetur.</td>
          <td className="pl-6 ">30</td>
          <td className="pl-6 ">$350.00</td>
          <td className="pl-6  text-red1  ">
            15:29
            <img
              className="inline-block cursor-pointer ml-[50%]"
              src="angle-down.svg"
              alt=""
            />
          </td>
        </tr>
      </tbody>
    );
  };
  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl bg-gray2 pb-5">
        <Title>Live Bids</Title>
        <div className="flex justify-end mx-5 py-7 ">
          <div className="w-[32%] flex justify-end">
            <Search placeholder="Bid ID, Seller name, Phone number" />
          </div>
        </div>
        <div className="overflow-x-auto ">
          <div className="overflow-hidden mx-5 border rounded-xl">
            <table className="min-w-full ">
              <thead className="bg-gray5 border-b ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium  px-6 py-4 text-left flex items-center"
                  >
                    Bid #
                    <button>
                      <img src="/arrows.svg" alt="" />
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  px-6 py-4 text-left"
                  >
                    Seller Username
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  px-6 py-4 text-left"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  px-6 py-4 text-left"
                  >
                    Number of Bids
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  px-6 py-4 text-left"
                  >
                    Highest Bid
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  px-6 py-4 text-left"
                  >
                    Remaining Time
                  </th>
                </tr>
              </thead>
              {handelTableBody()}
            </table>
          </div>
        </div>
      <div className="flex justify-center py-3 mt-10">
        <PreviousNext />
      </div>
      </div>
    </div>
  );
};
export default MainSection;
