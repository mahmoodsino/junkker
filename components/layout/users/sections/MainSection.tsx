import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BaseInput } from "../../../inputs";
import { Title } from "../../../title";
import BuyersTable from "./BuyersTable";
import SellarTable from "./SellarTable";

export interface QueryProps {
  page: number;
  text: string | string[] | undefined;
}

const MainSection = () => {
  const [index, setIndex] = useState(1);
  const [usersQueryFilters, setUsersQueryFilters] = useState<QueryProps>({
    page: 1,
    text: "",
  });
  const { replace, query } = useRouter();

  useEffect(() => {
    if (typeof query.page !== "undefined") {
      setUsersQueryFilters((prev) => {
        return { ...prev, page: +query.page! };
      });
    }
  }, [query.page]);

  useEffect(() => {
    if (query.text !== undefined) {
      setUsersQueryFilters((prev) => {
        return { ...prev, text: query.text };
      });
    }
  }, [query.text]);

  const handelSearch = async (text: any) => {
    setUsersQueryFilters((prev) => {
      return { ...prev, text: text };
    });
    replace({ query: { ...query, text: text } }, undefined, {
      scroll: false,
    });
  };

  return (
    <div className="py-12 px-7">
      <div className="border rounded-xl  bg-gray2  pb-5">
        <Title>13 Recent Users</Title>
        <div className="overflow-x-auto   mt-5">
          <div className="overflow-hidden mx-5 border rounded-xl">
            <div className="bg-gray5">
              <div className="py-2 pl-4 flex space-x-7">
                <div className="w-[25%]">
                  <BaseInput
                    value={usersQueryFilters.text!}
                    onChange={(e: any) => handelSearch(e.target.value)}
                    type="text"
                    placeholder="Search by Name, Phone num"
                  />
                </div>
                <div className="  rounded-lg flex mx-2">
                  <button
                    onClick={() => setIndex(1)}
                    className={`bg-white px-3 border border-gray1 rounded-l-lg ${
                      index === 1 && "bg-gray1 text-white rounded-l-md"
                    }`}
                  >
                    Buyers
                  </button>
                  <button
                    onClick={() => setIndex(2)}
                    className={`bg-white px-3 border  border-gray1 rounded-r-lg ${
                      index === 2 && "bg-gray1 text-white rounded-r-md"
                    }`}
                  >
                    Sellers
                  </button>
                </div>
              </div>
            </div>
            {index === 1 ? (
              <BuyersTable
                setUsersQueryFilters={setUsersQueryFilters}
                usersQueryFilters={usersQueryFilters}
              />
            ) : (
              <SellarTable
                setUsersQueryFilters={setUsersQueryFilters}
                usersQueryFilters={usersQueryFilters}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
