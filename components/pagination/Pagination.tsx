import React, { useEffect } from "react";
import { RightArrow } from "../icons";


interface Props {
  currentPage: number;
  setNext: () => void;
  setPrev: () => void;
  total: number;
}

let pages: number[] = [];
const Pagination = ({ currentPage, setNext, setPrev, total }: Props) => {
  useEffect(() => {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  }, [total,currentPage]);

  return (
    <div className="flex ">
      <button
        disabled={currentPage == 1 ? true : false}
        onClick={() => setPrev()}
        className="bg-gray1 rounded-l-full"
      >
        <RightArrow className="fill-white rotate-180" />
      </button>
      <div>
        <select
          className={`bg-white border border-gray1  py-2 px-1 text-gray1 outline-none text-sm`}
        >
          {pages.map((page, i) => {
            return (
              <option placeholder={currentPage.toString()} key={i} value={page}>
                {page} page
              </option>
            );
          })}
        </select>
      </div>
      <button
        disabled={currentPage === total ? true : false}
        onClick={() => setNext()}
        className="bg-gray1 rounded-r-full"
      >
        <RightArrow className="fill-white " />
      </button>
    </div>
  );
};

export default Pagination;
