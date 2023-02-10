import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {  UserDetailsAtom } from "../../../../helper";
import licensesType from "../../../../helper/type/users/licensesType";
import { SelectActive } from "../../../inputs";
import { Title } from "../../../title";
import PhotoModal from "./PhotoModal";

const Information = () => {
  const [open, setOpen] = useState(false);
  const [useDetails, setUserDetails] = useRecoilState(UserDetailsAtom);
  const { query } = useRouter();
  const [clickedFile,setClickedFile] = useState<licensesType>({} as licensesType)

  return (
    <div className="w-[48%] border rounded-xl  bg-gray2">
      <Title>Personal Information</Title>
      <div className="flex items-center space-x-5 px-5 mt-5">
        <span className="text-gray1 font-semibold text-lg">Active:</span>
        <SelectActive
          id={query.id !== undefined ? +query.id : null}
          status={useDetails.status}
        />
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">First Name:</span>
        <span>{useDetails.name}</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Last Name:</span>
        <span>{useDetails.name}</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Email Address:</span>
        <span>{useDetails.email}</span>
      </div>
      <div className="flex text-gray1 items-center space-x-5 px-5 mt-3">
        <span className=" font-semibold text-lg">Phone Number:</span>
        <span>{useDetails.phone}</span>
      </div>
      <div className="text-gray1 items-center space-x-5 px-5 my-3">
      <span className=" font-semibold text-lg">Tax id:</span>

      </div>
      <div className="text-gray1 items-center space-x-5 px-5 my-3">
        <span className=" font-semibold text-lg">Attachments</span>
        <div>
          {useDetails?.licenses?.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => (setOpen(true),setClickedFile(item))}
                className="flex items-center "
              >
                <img className="mr-2" src="/link.svg" alt="" />
                {/* {item.name} */}
              </button>
            );
          })}
        </div>
      </div>
      {open && <PhotoModal images={clickedFile} open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Information;
