import Link from "next/link";
import React from "react";
import VehiclesType from "../../helper/type/live-bids-types/VehiclesType";
import DetailsPhotoSlider from "./DetailsPhotoSlider";

interface Props {
  open: boolean;
  details: VehiclesType;
  bidsId: number;
  clickedVal:number
}

const BidDetails = ({ open, details, bidsId,clickedVal }: Props) => {

  return (
    <tr className={``}>
      <td colSpan={6} className="">
        <div
          className={`${
            (open && bidsId==clickedVal) ? "h-[700px] mt-10" : "h-0 invisible overflow-hidden"
          } transition-all  duration-500 ease-in-out`}
        >
          <DetailsPhotoSlider images={details.images} />
          <Link href={`/bids/numberofbids?id=${bidsId}`}>
            <div className="mt-10 flex justify-end w-[800px] max-w-[100%] m-auto">
              <button className="px-5 py-2 bg-red2 text-white font-bold rounded">
                20 Bids
              </button>
            </div>
          </Link>
          <div className="mt-10 w-[800px] max-w-[100%] m-auto">
            <h3 className="font-bold text-lg pb-5">{details.title}</h3>
            <span className="text-[#4d4d4d] font-semibold">GVWR:</span>
            <span className="text-[#4d4d4d]">{details.gvwr}</span>
            <div className="flex  space-x-6 py-5">
              <div className="flex space-x-3">
                {details.is_alluminium_wheels == 1 ? (
                  <img src="/right-sign.svg" alt="" />
                ) : (
                  <img src="/x-sign.svg" alt="" />
                )}
                <span className="underline ">Alluminium wheels</span>
              </div>
              <div className="flex space-x-3">
                {details.is_complete == 1 ? (
                  <img src="/right-sign.svg" alt="" />
                ) : (
                  <img src="/x-sign.svg" alt="" />
                )}{" "}
                <span className="underline ">Incomplete</span>
              </div>
              <div className="flex space-x-3">
                {details.have_converter == 1 ? (
                  <img src="/right-sign.svg" alt="" />
                ) : (
                  <img src="/x-sign.svg" alt="" />
                )}{" "}
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

export default BidDetails;
