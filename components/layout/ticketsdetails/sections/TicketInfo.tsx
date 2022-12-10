import React, { useState } from "react";
import { BaseButton } from "../../../buttons";
import { Title } from "../../../title";
import AddComment from "./AddComment";



const TicketInfo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="rounded-xl bg-gray2">
        <Title>
          <div className="flex  justify-between items-center w-full">
            <div className="">
              <h3 className="text-lg">Ticket # 1234</h3>
              <span className="text-xs">October, 20, 2022</span>
            </div>
            <BaseButton title="Resolve" />
          </div>
        </Title>
        <div className="py-7 border-b mx-5">
          <div className="flex justify-between">
            <div>
              <span className="font-bold ">User Name:</span>
              <span className="text-sm text-blue1"> Liam Murphy</span>
            </div>
            <div>
              <span className="font-bold ">Phone number:</span>
              <span className="text-sm "> 1-231-5665-6558</span>
            </div>
            <div>
              <span className="font-bold ">Email Address:</span>
              <span className="text-sm "> LM@gmail.com</span>
            </div>
            <div>
              <span className="font-bold ">Type:</span>
              <span className="text-sm "> Buyer</span>
            </div>
          </div>

          <div className="flex justify-start mt-5 space-x-20">
            <div>
              <span className="font-bold ">Bid:</span>
              <span className="text-sm "> Toyota Camry 2009</span>
            </div>
            <div>
              <span className="font-bold ">Bid #:</span>
              <span className="text-sm text-blue1"> 12345</span>
            </div>
            <div>
              <span className="font-bold ">Reason:</span>
              <span className="text-sm ">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 mx-5">
          <div className="pb-20">
            <span className="font-bold">Details:</span>
            <span>
              Lorem ipsum dolor sit amet consectetur. Sit enim scelerisque magna
              consequat facilisis in. Lorem ipsum dolor sit amet consectetur.
              Sit enim scelerisque magna consequat facilisis in.
            </span>
          </div>
          <div className="flex justify-end py-5">
            <button
              onClick={() => setOpen(true)}
              className="underline text-green1 font-bold"
            >
              Add Comment
            </button>
          </div>
        </div>
        {open && (
          <AddComment
            open={open}
            setOpen={setOpen}
          />
        )}
      </div>

      
    </div>
  );
};

export default TicketInfo;
