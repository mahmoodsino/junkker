import React from "react";

interface Props {
  currentPage: number;
  setNext: () => void;
  setPrev: () => void;
  total:number
}

const PreviousNext = ({ currentPage, setNext, setPrev ,total }: Props) => {
  return (
    <div className="flex ">
      <button
        disabled={currentPage == 1 ? true : false}
        onClick={() => setPrev()}
        className="text-[#787878] px-1 border bg-white border-[#787878] rounded-l-md"
      >
        Previous
      </button>
      <span className=" bg-gray1 text-white py-1.5 px-4">{currentPage}</span>
      <button
      disabled={currentPage === total ? true : false}
        onClick={() => setNext()}
        className="text-[#787878] px-4 py-1.5 border bg-white border-[#787878] rounded-r-md"
      >
        Next
      </button>
    </div>
  );
};

export default PreviousNext;
