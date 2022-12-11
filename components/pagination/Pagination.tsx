import React from "react";
import { RightArrow } from "../icons";

const pages = ["page1", "page2", "page3", "page4", "page5", "page6", "page7"];

const Pagination = () => {
  return (
    <div className="flex ">
      <button className="bg-gray1 rounded-l-full">
        <RightArrow className="fill-white rotate-180" />
      </button>
      <div>
        <select
          className={`bg-white border border-gray1  py-2 px-1 text-gray1 outline-none text-sm`}
        >
          {pages.map((page, i) => {
            return (
              <option key={i} value={page}>
                {page}
              </option>
            );
          })}
        </select>
      </div>
      <button className="bg-gray1 rounded-r-full">
        <RightArrow className="fill-white " />
      </button>
    </div>
  );
};

export default Pagination;
