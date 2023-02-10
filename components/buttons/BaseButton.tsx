import React from "react";

interface Props {
    className?:string,
    title:string
    type?:"submit"|"button"
    onClick?:() => void
}

const BaseButton = ({className,title,type,onClick}:Props) => {
  return (
    <button onClick={onClick} type={type} className={`${className ? className : "text-[#FA5D3A] px-3 py-1 rounded-md  font-bold border border-[#FA5D3A]  bg-[#FFEAE5]"}`}>
      {title}
    </button>
  );
};

export default BaseButton;
