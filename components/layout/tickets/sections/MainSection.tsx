import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TicketsAtom, TokenAtom } from "../../../../helper";
import { handelGetTickets } from "../../../../helper/server/services";
import { Eye } from "../../../icons";
import { BaseInput, Search } from "../../../inputs";
import { Loading } from "../../../loading";
import { PreviousNext } from "../../../pagination";
import { Title } from "../../../title";

interface QueryProps {
  page: number;
  text: string | string[] | undefined;
}

const MainSection = () => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [tickets, setTickets] = useRecoilState(TicketsAtom);
  const [loading, setLoading] = useState(false);
  const [ticketsQueryFilters, setTicketsQueryFilters] = useState<QueryProps>({
    page: 1,
    text: "",
  });
  const { replace, query } = useRouter();
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetTickets({
        token: token,
        page: ticketsQueryFilters.page,
      });
      if (res !== null) {
        setTickets(res.data);
        setTotalPages(res.total);
      } else {
        toast.error("some thing went wrong");
      }
      setLoading(false);
    };
    if (token) {
      getData();
    }
  }, [ticketsQueryFilters, token]);

  useEffect(() => {
    if (typeof query.page !== "undefined") {
      setTicketsQueryFilters((prev) => {
        return { ...prev, page: +query.page! };
      });
    }
  }, [query.page]);

  useEffect(() => {
    if (query.text !== undefined) {
      setTicketsQueryFilters((prev) => {
        return { ...prev, text: query.text };
      });
    }
  }, [query.text]);

  const handelSearch = async (text: any) => {
    setTicketsQueryFilters((prev) => {
      return { ...prev, text: text };
    });
    replace({ query: { ...query, text: text } }, undefined, {
      scroll: false,
    });
  };

  const setNext = () => {
    setTicketsQueryFilters((prev) => {
      return { ...prev, page: ticketsQueryFilters.page + 1 };
    });

    let next = ticketsQueryFilters.page + 1;

    replace({ query: { ...query, page: next } }, undefined, {
      scroll: true,
    });
  };

  const setPrev = () => {
    setTicketsQueryFilters((prev) => {
      return { ...prev, page: ticketsQueryFilters.page - 1 };
    });

    let prev = ticketsQueryFilters.page - 1;

    replace({ query: { ...query, page: prev } }, undefined, {
      scroll: true,
    });
  };

  const handelTableBody = () => {
    return tickets.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-4 ">{item.id}</td>
          <td className="pl-6 ">{item.user.name}</td>
          <td className="pl-6 ">{item.bid.notes}</td>
          <td className="pl-6">{item.reason}</td>
          <td
            className={`pl-6  ${
              item.status === "closed" ? "text-red1" : "text-green1"
            }`}
          >
            {item.status}
          </td>
          <td className="pl-6 ">
            <Link href={`/tickets/ticketsdetails?id=${item.id}`}>
              <div className="border border-primary w-10 h-10 flex justify-center items-center bg-primary/40 rounded-md">
                <Eye />
              </div>
            </Link>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl  bg-gray2  pb-5">
        <Title>
          <img className="h-5" src="/pencil.svg" alt="" />
          Manage Tickets
        </Title>

        <div className="flex justify-end px-5 py-3">
          <div className="w-[23%] ">
            <Search
              value={ticketsQueryFilters.text!}
              onChange={(e: any) => handelSearch(e.target.value)}
            />
          </div>
        </div>
        {!loading ? (
          <div className="overflow-x-auto ">
            <div className="overflow-hidden mx-5 border rounded-xl">
              <table className="min-w-full ">
                <thead className="bg-[#E6E6E6] border-b ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Ticket #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Bids
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Reason
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className=" ">{handelTableBody()}</tbody>
              </table>
            </div>
          </div>
        ) : (
          <Loading className="w-20" />
        )}
        {totalPages > 1 && (
          <div className="flex justify-center py-10">
            <PreviousNext
              total={totalPages}
              setPrev={setPrev}
              setNext={setNext}
              currentPage={ticketsQueryFilters.page}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
