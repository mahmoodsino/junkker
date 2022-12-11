import React, { useState } from "react";
import { BaseInput, Search } from "../../../inputs";
import { Title } from "../../../title";
import ConfirmRefund from "./ConfirmRefund";
import PasswordModal from "./PasswordModal";

const info = [
  {
    a: 123,
    b: "Toyota Camry 2016",
    c: "$350.00",
    d: "Nov, 08, 2022 09:51 PM",
    e: "Lost",
  },
  {
    a: 123,
    b: "Toyota Camry 2016",
    c: "$350.00",
    d: "Nov, 08, 2022 09:51 PM",
    e: "No bid",
  },
  {
    a: 123,
    b: "Toyota Camry 2016",
    c: "$350.00",
    d: "Nov, 08, 2022 09:51 PM",
    e: "Won",
  },
  {
    a: 123,
    b: "Toyota Camry 2016",
    c: "$350.00",
    d: "Nov, 08, 2022 09:51 PM",
    e: "Won",
  },
];

const BidsLog = () => {
    const [open,setOpen]=useState(false)
    const [openConfirm,setOepnConfirm] = useState(false)
  const handelTableBody = () => {
    return info.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-4 ">{item.a}</td>
          <td className="pl-6 ">{item.b}</td>
          <td className="pl-6 ">{item.c}</td>
          <td className="pl-6">{item.d}</td>
          <td className={`pl-6 flex justify-between items-center mr-5`}>
            {item.e}
            <button onClick={() => setOpen(true)} className="underline text-green1">REFUND</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="border rounded-xl  bg-gray2  pb-5">
      <Title>Bids Log</Title>
      <div className="flex justify-start px-5 py-7">
        <div className="w-[23%] ">
          <BaseInput type="text" placeholder="Search by bid #, Date" />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <div className="overflow-hidden mx-5 border rounded-xl">
          <table className="min-w-full ">
            <thead className="bg-[#E6E6E6] border-b ">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-bold px-6 py-4 text-left flex"
                >
                  Bid #
                  <button>
                    <img src="/arrows.svg" alt="" />
                  </button>
                </th>
                <th
                  scope="col"
                  className="text-sm font-bold px-6 py-4 text-left"
                >
                  Bid Name
                  <button>
                    <img src="/arrows.svg" alt="" />
                  </button>
                </th>
                <th
                  scope="col"
                  className="text-sm font-bold px-6 py-4 text-left"
                >
                  Pricing
                  <button>
                    <img src="/arrows.svg" alt="" />
                  </button>
                </th>
                <th
                  scope="col"
                  className="text-sm font-bold px-6 py-4 text-left"
                >
                  Date - Time
                  <button>
                    <img src="/arrows.svg" alt="" />
                  </button>
                </th>
                <th
                  scope="col"
                  className="text-sm font-bold px-6 py-4 text-left"
                >
                  Status
                  <button>
                    <img src="/arrows.svg" alt="" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody >{handelTableBody()}</tbody>
          </table>
        </div>
      </div>
      {open && 
      <ConfirmRefund open={open} setOpen={setOpen} setOepnConfirm={setOepnConfirm} />
      }
      {openConfirm && 
      <PasswordModal open={openConfirm} setOpen={setOepnConfirm} />
      }
    </div>
  );
};

export default BidsLog;
