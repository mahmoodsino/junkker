import React from "react";
import { Eye } from "../../../icons";
import { Title } from "../../../title";

const info = [
  {
    a: 123,
    b: "Liam Murphy",
    c: "Rrrr",
    d: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    a: 123,
    b: "Liam Murphy",
    c: "Rrrr",
    d: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    a: 123,
    b: "Liam Murphy",
    c: "Rrrr",
    d: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    a: 123,
    b: "Liam Murphy",
    c: "Rrrr",
    d: "Lorem ipsum dolor sit amet consectetur.",
  },
];
const MainSection = () => {
  const handelTableBody = () => {
    return info.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-4 w-[16%]">{item.a}</td>
          <td className="pl-6 w-[16%]">{item.b}</td>
          <td className="pl-6 w-[16%]">{item.c}</td>
          <td className="pl-6">{item.d}</td>
          <td className="pl-6 w-[16%]">
            <div className="border border-primary w-10 h-10 flex justify-center items-center bg-primary/40 rounded-md">
              <Eye />
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl  bg-gray2  pb-5">
        <Title>
          Unpicked junks
        </Title>
        <div className="overflow-x-auto  mt-5">
          <div className="overflow-hidden mx-5 border rounded-xl">
            <table className="min-w-full ">
              <thead className="bg-[#E6E6E6] border-b ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold px-6 py-4 text-left"
                  >
                    Bid #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold px-6 py-4 text-left"
                  >
                    User Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold px-6 py-4 text-left"
                  >
                    Highest Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold px-6 py-4 text-left"
                  >
                    Reason
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold px-6 py-4 text-left"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=" ">
                {handelTableBody()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MainSection;
