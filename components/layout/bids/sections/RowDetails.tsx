import Link from "next/link";
import React from "react";
import DetailsPhotoSlider from "./DetailsPhotoSlider";

interface Props {
  open: boolean;
}

const RowDetails = ({ open }: Props) => {
  return (
    <tr className={``}>
      <td colSpan={6} className="">
        <div
          className={`${
            open ? "h-[700px] mt-10" : "h-0 invisible"
          } transition-all  duration-500 ease-in-out`}
        >
          <DetailsPhotoSlider />
          <Link href="/bids/numberofbids">
          <div className="mt-10 flex justify-end px-44">
            <button className="px-5 py-2 bg-red2 text-white font-bold rounded">20  Bids</button>
          </div>
          </Link>
          <div className="mt-10 w-[800px] max-w-[100%] m-auto">
            <h3 className="font-bold text-lg pb-5">Toyota Camry, 2011</h3>
            <span className="text-[#4d4d4d] font-semibold">GVWR:</span>
            <span className="text-[#4d4d4d]">6000 lbs</span>
            <div className="flex  space-x-6 py-5">
              <div className="flex space-x-3">
                <img src="/right-sign.svg" alt="" />
                <span className="underline ">Alluminium wheels</span>
              </div>
              <div className="flex space-x-3">
                <img src="/x-sign.svg" alt="" />
                <span className="underline ">Incomplete</span>
              </div>
              <div className="flex space-x-3">
                <img src="/right-sign.svg" alt="" />
                <span className="underline ">Converter</span>
              </div>
            </div>
            <div className="space-x-2">
              <span className="text-gray1 font-semibold">Notes:</span>
              <span className="text-[#878787]">
                Engine, Transmission, Brakes
              </span>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default RowDetails;
