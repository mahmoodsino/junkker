import React, { useState } from "react";
import { SelectActive } from "../../../inputs";
import { Title } from "../../../title";
import PhotoModal from "./PhotoModal";

const Information = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[48%] border rounded-xl  bg-gray2">
      <Title>Personal Information</Title>
      <div className="flex items-center space-x-5 px-5 mt-5">
        <span className="text-gray1 font-semibold text-lg">Active:</span>
        <SelectActive />
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">First Name:</span>
        <span>John</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Last Name:</span>
        <span>Smith</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Email Address:</span>
        <span>JSmith@gmail.com</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Phone Number:</span>
        <span>1-235-6565-987</span>
      </div>
      <div className="text-gray1 items-center space-x-5 px-5 my-3">
        <span className=" font-semibold text-lg">Attachments</span>
        <div>
          <button onClick={() => setOpen(true)} className="flex items-center ">
            <img className="mr-2" src="/link.svg" alt="" />
            a.png
          </button>
          <button className="flex items-center">
            <img className="mr-2" src="/link.svg" alt="" />
            b.png
          </button>
        </div>
      </div>
      {open && <PhotoModal img="/image.png" open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Information;
