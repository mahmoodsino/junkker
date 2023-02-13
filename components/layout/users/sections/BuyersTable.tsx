import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { handelGetBuyer } from "../../../../helper/server/services";
import BuyerType from "../../../../helper/type/users/BuyerType";
import { Loading } from "../../../loading";
import Pagination from "../../../pagination/Pagination";
import { QueryProps } from "./MainSection";
import UserMapModal from "./UserMapModal";

interface Props {
  usersQueryFilters: QueryProps;
  setUsersQueryFilters: any;
}

const BuyersTable = ({ setUsersQueryFilters, usersQueryFilters }: Props) => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [buyers, setBuyers] = useState<BuyerType[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [mapModal, setMapModal] = useState(false);
  const { replace, query } = useRouter();
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetBuyer({
        token: token,
        page: usersQueryFilters.page,
        text: usersQueryFilters.text,
      });
      if (res !== null) {
        setBuyers(res.data);
        setTotalPages(res.total);
      } else {
        toast.error("some thing wrong");
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
    return buyers.map((item, i) => {
      return (
        <tr
          key={i}
          className={` text-sm ${i % 2 == 0 ? "bg-white" : "bg-[#F5F5F5]"}`}
        >
          <td className="pl-6 py-5 w-[16%]">
            <Link
              className="text-blue1"
              href={`/users/personalinfo?id=${item.id}`}
            >
              {item.name}
            </Link>
          </td>
          <td className="pl-6 ">{item.email}</td>
          <td className="pl-6 ">{item.phone}</td>
          <td className="pl-6 ">{item.address}</td>
          <td className="pl-6 ">
            <div className="flex justify-between pr-5 ">
              {item.junkkers}
              {item.lat !== null && (
                <button
                  onClick={() => handelMap(item.lat, item.lng)}
                  className="text-secoundary"
                >
                  Show on map
                </button>
              )}
            </div>
          </td>
        </tr>
      );
    });
  };

  const handelMap = (lat: number, lng: number) => {
    setLat(lat);
    setLng(lng);
    setMapModal(true);
  };

  return (
    <div>
      {!loading ? (
        <div>
          <table className="min-w-full ">
            <thead className="bg-gray5 border-b ">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-bold px-6 py-4 text-left"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="text-sm font-bold px-6 py-4 text-left"
                >
                  Email Address
                </th>
                <th
                  scope="col"
                  className="text-sm font-bold px-6 py-4 text-left"
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="text-sm font-bold px-6 py-4 text-left"
                >
                  Contact Info
                </th>
                <th
                  scope="col"
                  className="text-sm font-bold text-gray-900 px-6 py-4 text-left flex  items-center"
                >
                  Junkkers’ Balance
                  {/* <img src="/down-arrow.svg" alt="" /> */}
                </th>
              </tr>
            </thead>
            <tbody className=" ">{handelTableBody()}</tbody>
          </table>
        </div>
      ) : (
        <Loading className="h-20" />
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
      {mapModal && (
        <UserMapModal
          open={mapModal}
          setOpen={setMapModal}
          lat={lat}
          lng={lng}
        />
      )}
    </div>
  );
};

export default BuyersTable;
