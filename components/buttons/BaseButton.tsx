import React from "react";

interface Props {
    className?:string,
    title:string
}

const BaseButton = ({className,title}:Props) => {
  return (
    <button className={`${className ? className : "text-[#FA5D3A] px-3 py-1 rounded-md  font-bold border border-[#FA5D3A]  bg-[#FFEAE5]"}`}>
      {title}
    </button>
  );
};

export default BaseButton;
