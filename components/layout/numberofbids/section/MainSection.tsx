import React, { useEffect } from "react";
import { Title } from "../../../title";

const info = [
  {
    a: 1,
    b: "John Smith",
    c: "$350.00",
  },
  {
    a: 2,
    b: "John Smith",
    c: "$200.00",
  },
  {
    a: 3,
    b: "John Smith",
    c: "$700.00",
  },
  {
    a: 4,
    b: "John Smith",
    c: "$800.00",
  },
];

const inn ={
    td1:[
        {
            a: 1,
            b: "John Smith",
            c: "$350.00",
          },
          {
            a: 2,
            b: "John Smith",
            c: "$200.00",
          },
          {
            a: 3,
            b: "John Smith",
            c: "$700.00",
          },
          {
            a: 4,
            b: "John Smith",
            c: "$800.00",
          },
    ],
    td2:[
        {
            a: 1,
            b: "John Smith",
            c: "$350.00",
          },
          {
            a: 2,
            b: "John Smith",
            c: "$200.00",
          },
          {
            a: 3,
            b: "John Smith",
            c: "$700.00",
          },
          {
            a: 4,
            b: "John Smith",
            c: "$800.00",
          },
    ]

}

const MainSection = () => {

    // useEffect (() => {
    //     Object.keys(inn).map(item => {
    //         const value = inn[item]
    //         console.log({value});
            
    //     })
    // },[])
  const handelTableBody = () => {
    return info.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-4 w-[16%]">{item.a}</td>
          <td className="pl-6 w-[16%] text-blue1">{item.b}</td>
          <td className="pl-6 w-[16%]">{item.c}</td>
        </tr>
      );
    });
  };
  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl  bg-gray2  pb-5">
        <Title>Number of Bids</Title>
        <div className="overflow-x-auto  mt-5">
          <div className="overflow-hidden mx-5 border rounded-xl">
            <table className="min-w-full ">
              <thead className="bg-[#E6E6E6] border-b ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium  px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  px-6 py-4 text-left"
                  >
                    User Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  px-6 py-4 text-left "
                  >
                    Bidding Price
                    <button>
                      <img src="/arrows.svg" alt="" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className=" ">{handelTableBody()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
