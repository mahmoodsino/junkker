import React from "react";
import BaseInput from "./BaseInput";

interface Props {
    placeholder?:string
    onChange?:any
    value?:any
}

const Search = ({placeholder,onChange , value }:Props) => {
  return (
    <div>
      <div className=" space-x-3 flex items-center">
        <span className="text-gray1 font-medium">Search:</span>
        <BaseInput value={value}  onChange={onChange} placeholder={placeholder} type="text" />
      </div>
    </div>
  );
};

export default Search;
