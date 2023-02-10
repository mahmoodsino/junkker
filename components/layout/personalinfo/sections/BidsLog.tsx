import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { handelGetBuyerBidders } from "../../../../helper/server/services";
import BuyerBiddersType from "../../../../helper/type/users/BuyerBiddersType";
import { BaseInput, Search } from "../../../inputs";
import { Title } from "../../../title";
import ConfirmRefund from "./ConfirmRefund";

const BidsLog = () => {
  const [open, setOpen] = useState(false);
  const [openConfirm, setOepnConfirm] = useState(false);
  const [token, setToken] = useRecoilState(TokenAtom);
  const { query } = useRouter();
  const [buyerBidders, setBuyerBidders] = useState<BuyerBiddersType[]>([]);
  const [clickedId, setClickedId] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      if (query.id) {
        const res = await handelGetBuyerBidders(token, +query.id);
        if (res) {
          setBuyerBidders(res.data);
        } else {
          toast.error("some thing went wrong !!");
        }
      }
    };
    getData();
  }, []);

  const refund = (id: number) => {
    setClickedId(id);
    setOpen(true);
  };

  const handelTableBody = () => {
    return buyerBidders.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-4 ">{item.bid.id}</td>
          <td className="pl-6 ">{item.bid?.owner?.fullname}</td>
          <td className="pl-6 ">{item.amount}</td>
          <td className="pl-6">{item.bid.created_at}</td>
          <td className={`pl-6 `}>
            <div className="flex justify-between items-center mr-5">
              {item.status}
              {item.status=="won"&&
              <button
              onClick={() => refund(item.id)}
              className="underline text-green1"
              >
                REFUND
              </button>
              }
            </div>
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
            <tbody>{handelTableBody()}</tbody>
          </table>
        </div>
      </div>
      {open && (
        <ConfirmRefund clickedId={clickedId} open={open} setOpen={setOpen} />
      )}
    </div>
  );
};

export default BidsLog;
