import React from "react";

interface Props {
    name:string
}

const UserNameTap = ({name}:Props) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FA5D3A 0%, rgba(250, 93, 58, 0.5) 100%)",
      }}
      className="w-[127px] h-[40px] rounded-full  text-center text-white relative"
    >
      <span className="absolute right-[10%] top-0 text-xs">x</span>
      <span className="absolute top-[9px] left-0 right-0 bottom-0 m-auto">
        {name}
      </span>
    </div>
  );
};

export default UserNameTap;
