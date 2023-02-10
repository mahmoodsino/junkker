import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { TokenAtom } from "../../../../helper";
import { handelGetSellers } from "../../../../helper/server/services";
import SellersType from "../../../../helper/type/users/SellersTYpe";
import { Loading } from "../../../loading";
import Pagination from "../../../pagination/Pagination";
import { QueryProps } from "./MainSection";

interface Props {
  usersQueryFilters: QueryProps;
  setUsersQueryFilters: any;
}

const SellarTable = ({ setUsersQueryFilters, usersQueryFilters }: Props) => {
  const [sellers, setSellers] = useState<SellersType[]>([]);
  const token = useRecoilValue(TokenAtom);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const { replace, query } = useRouter();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetSellers({
        token: token,
        page: usersQueryFilters.page,
        text: usersQueryFilters.text,
      });
      console.log(res);
      if (res !== null) {
        setSellers(res.data);
      } else {
        toast.error("some thing went wrong");
      }
      setLoading(false);
    };
    if (token) {
      getData();
    }
  }, [usersQueryFilters, token]);

  const setNext = () => {
    setUsersQueryFilters((prev: any) => {
      return { ...prev, page: usersQueryFilters.page + 1 };
    });

    let next = usersQueryFilters.page + 1;

    replace({ query: { ...query, page: next } }, undefined, {
      scroll: true,
    });
  };

  const setPrev = () => {
    setUsersQueryFilters((prev: any) => {
      return { ...prev, page: usersQueryFilters.page - 1 };
    });

    let prev = usersQueryFilters.page - 1;

    replace({ query: { ...query, page: prev } }, undefined, {
      scroll: true,
    });
  };

  const handelTableBody = () => {
    return sellers.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-5 w-[16%]">{item.fullname}</td>
          <td className="pl-6 w-[16%]"></td>
          <td className="pl-6 w-[20%]">{item.phone}</td>
          <td className="pl-6 w-[30%]">{item.address}</td>
          <td className="pl-6 w-[22%]"></td>
        </tr>
      );
    });
  };
  return (
    <div>
      {!loading ? (
        <table className="min-w-full ">
          <thead className="bg-gray5 border-b ">
            <tr>
              <th
                scope="col"
                className="text-sm font-bold  px-6 py-4 text-left"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-sm font-bold  px-6 py-4 text-left"
              >
                Email Address
              </th>
              <th
                scope="col"
                className="text-sm font-bold  px-6 py-4 text-left"
              >
                Phone Number
              </th>
              <th
                scope="col"
                className="text-sm font-bold  px-6 py-4 text-left"
              >
                Contact Info
              </th>
              <th
                scope="col"
                className="text-sm font-bold  px-6 py-4 text-left"
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody className=" ">{handelTableBody()}</tbody>
        </table>
      ) : (
        <Loading className=" h-20" />
      )}
      {totalPages > 1 && (
        <div className="flex justify-center my-10">
          <Pagination
            total={totalPages}
            setPrev={setPrev}
            setNext={setNext}
            currentPage={usersQueryFilters.page}
          />
        </div>
      )}
    </div>
  );
};

export default SellarTable;
