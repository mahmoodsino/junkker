import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {  TokenAtom } from "../../../../helper";
import { handelGetBids } from "../../../../helper/server/services";
import LiveBidsType from "../../../../helper/type/live-bids-types/LiveBidsType";
import { BidDetails } from "../../../bidDetales";
import { Search } from "../../../inputs";
import { Loading } from "../../../loading";
import { PreviousNext } from "../../../pagination";
import Timer from "../../../timer/Timer";
import { Title } from "../../../title";

interface QueryProps {
  page: number;
  text: string | string[] | undefined;
}

const MainSection = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useRecoilState(TokenAtom);
  const [bids, setBids] = useState<LiveBidsType[]>([]);
  const [bidsQueryFilters, setBidsQueryFilters] = useState<QueryProps>({
    page: 1,
    text: "",
  });
  const { replace, query } = useRouter();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [clickedVal,setClickedVal] = useState(0)

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetBids({
        token: token,
        status:"open",
        page: bidsQueryFilters.page,
        text: bidsQueryFilters.text,
      });
      if (res) {
        setBids(res.data);
        setTotalPages(res.total);
      } else {
        toast.error("some thing went wrogn");
      }
      setLoading(false);
    };
    if (token) {
      getData();
    }
  }, [bidsQueryFilters, token]);

  useEffect(() => {
    if (typeof query.page !== "undefined") {
      setBidsQueryFilters((prev) => {
        return { ...prev, page: +query.page! };
      });
    }
  }, [query.page]);

  useEffect(() => {
    if (query.text !== undefined) {
      setBidsQueryFilters((prev) => {
        return { ...prev, text: query.text };
      });
    }
  }, [query.text]);

  const handelSearch = async (text: any) => {
    setBidsQueryFilters((prev) => {
      return { ...prev, text: text };
    });
    replace({ query: { ...query, text: text } }, undefined, {
      scroll: false,
    });
  };

  const setNext = () => {
    setBidsQueryFilters((prev) => {
      return { ...prev, page: bidsQueryFilters.page + 1 };
    });

    let next = bidsQueryFilters.page + 1;

    replace({ query: { ...query, page: next } }, undefined, {
      scroll: true,
    });
  };

  const setPrev = () => {
    setBidsQueryFilters((prev) => {
      return { ...prev, page: bidsQueryFilters.page - 1 };
    });

    let prev = bidsQueryFilters.page - 1;

    replace({ query: { ...query, page: prev } }, undefined, {
      scroll: true,
    });
  };

  const handelTableBody = () => {
    return bids.map((item, i) => {
      return (
        <tbody key={i} className="text-sm">
          <tr className="bg-white">
            <td className="pl-6 py-5 ">{item.id}</td>
            <td className="pl-6  text-blue1">
              <button>{item.owner.fullname}</button>
            </td>
            <td className="pl-6 ">{item.owner.address}</td>
            <td className="pl-6 ">{item.bidders_count}</td>
            <td className="pl-6 ">{item.best_bid}</td>
            <td className="pl-6  text-red1 flex  h-[60px] space-x-5 items-center  ">
              {item.status == "open" && <Timer endDate={item.end_at} />}
              <img
                onClick={() => (setOpen(!open) , setClickedVal(item?.id) )}
                className="inline-block cursor-pointer "
                src="angle-down.svg"
                alt=""
              />
            </td>
          </tr>
          <BidDetails clickedVal={clickedVal} bidsId={item.id} details={item.vehicles[0]} open={open} />
        </tbody>
      );
    });
  };

  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl bg-gray2 pb-5">
        <Title>Live Bids</Title>
        <div className="flex justify-end mx-5 py-7 ">
          <div className="w-[32%] flex justify-end">
            <Search
              value={bidsQueryFilters.text!}
              onChange={(e: any) => handelSearch(e.target.value)}
              placeholder="Bid ID, Seller name, Phone number"
            />
          </div>
        </div>
        {!loading ? (
          <div className="overflow-x-auto ">
            <div className="overflow-hidden mx-5 border rounded-xl">
              <table className="min-w-full ">
                <thead className="bg-gray5 border-b ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left flex items-center"
                    >
                      Bid #
                      <button>
                        <img src="/arrows.svg" alt="" />
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      Seller Username
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      Number of Bids
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      Highest Bid
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  px-6 py-4 text-left"
                    >
                      Remaining Time
                    </th>
                  </tr>
                </thead>
                {handelTableBody()}
              </table>
            </div>
          </div>
        ) : (
          <Loading className="w-20" />
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center py-3 mt-10">
          <PreviousNext
            total={totalPages}
            setPrev={setPrev}
            setNext={setNext}
            currentPage={bidsQueryFilters.page}
          />
        </div>
      )}
    </div>
  );
};
export default MainSection;
