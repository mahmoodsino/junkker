import React, { useState } from "react";

const options = ["Inactive", "Active"];

const SelectActive = () => {
  const [selected, setSelected] = useState("Inactive");
  return (
    <select
      onChange={(e) => setSelected(e.target.value)}
      className={`font-bold border-l-4 w-[95px] border py-1.5 px-1  outline-none text-sm rounded ${
        selected === "Active"
          ? "bg-green1/5  border-green1 text-green1 "
          : "bg-red2/5 border-red2 text-red2"
      }`}
    >
      {options.map((item,i) => {
        return (
          <option key={i} className="text-black" value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default SelectActive;
