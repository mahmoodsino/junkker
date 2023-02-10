import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {TokenAtom } from "../../../../helper";
import { handelGetBidders } from "../../../../helper/server/services";
import BiddersType from "../../../../helper/type/bidders/BiddersType";
import { Loading } from "../../../loading";
import { Title } from "../../../title";

const MainSection = () => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const { query } = useRouter();
  const [bidders, setBidders] = useState<BiddersType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      if (query.id) {
        const res = await handelGetBidders(token, +query.id);
        if (res !== null) {
          setBidders(res.data);
        } else {
          toast.error("some thing went wrong");
        }
        setLoading(false);
      }
    };
    if(token){
      getData();
    }
  }, [query.id,token]);

  const handelTableBody = () => {
    return bidders.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-4 w-[16%]">{item.id}</td>
          <td className="pl-6 w-[16%] text-blue1">
            <Link href={`/users/personalinfo?id=${item.user.id}`}>
              {item.user.name}
            </Link>
          </td>
          <td className="pl-6 w-[16%]">{item.amount}</td>
        </tr>
      );
    });
  };
  return (
    <div className="py-12 px-7">
      {!loading ? (
        <div className="border rounded-xl  bg-gray2  pb-5">
          <Title>Number of Bids</Title>
          <div className="overflow-x-auto  mt-5">
            <div className="overflow-hidden mx-5 border rounded-xl">
              <table className="min-w-full ">
                <thead className="bg-[#E6E6E6] border-b ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left "
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
      ) : (
        <Loading className="h-20" />
      )}
    </div>
  );
};

export default MainSection;
