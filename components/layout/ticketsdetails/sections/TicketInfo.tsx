import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { CommentsAtom, TokenAtom } from "../../../../helper";
import { handelGetTicketsDetails } from "../../../../helper/server/services";
import TicketsType from "../../../../helper/type/tickets/TicketsType";
import { BaseButton } from "../../../buttons";
import { Loading } from "../../../loading";
import { Title } from "../../../title";
import AddComment from "./AddComment";
import ResolveModal from "./ResolveModal";

const TicketInfo = () => {
  const [open, setOpen] = useState(false);
  const { query } = useRouter();
  const [token, setToken] = useRecoilState(TokenAtom);
  const [ticketDetails, setTicketDetails] = useState<TicketsType>(
    {} as TicketsType
  );
  const [openResolveModal, setOpenResolveModal] = useState(false);
  const [comments, setComments] = useRecoilState(CommentsAtom);
  const [loading,setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      if (query.id) {
        const res = await handelGetTicketsDetails(token, +query.id);
        if (res !== null) {
          setTicketDetails(res.data);
        } else {
          toast.error("some thing went wrong");
        }
        setLoading(false)
      }
    };
    if(token){
      getData();
    }
  }, [query.id,token]);

  useEffect(() => {
      setComments(ticketDetails.comments)
  },[ticketDetails])

  return (
    <div>
      {!loading ?
      <div className="rounded-xl bg-gray2">
        <Title>
          <div className="flex  justify-between items-center w-full">
            <div className="">
              <h3 className="text-lg">Ticket # {ticketDetails?.id}</h3>
              <span className="text-xs">{ticketDetails?.created_at}</span>
            </div>
            <BaseButton
              onClick={() => setOpenResolveModal(true)}
              className="text-[#FA5D3A] px-3 py-1 rounded-md  font-semibold border border-[#FA5D3A]  bg-[#FFEAE5]"
              title="Resolve"
            />
          </div>
        </Title>
        <div className="py-7 border-b mx-5">
          <div className="grid grid-cols-3 ">
            <div className="flex items-center">
              <span className="font-bold block w-[32%]">User Name:</span>
              <span className="text-sm text-blue1">
                {ticketDetails?.user?.name}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-bold block w-[32%]">Phone number:</span>
              <span className="text-sm ">{ticketDetails?.user?.phone}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold block w-[32%]">Email Address:</span>
              <span className="text-sm ">{ticketDetails?.user?.email}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold block w-[32%]">Type:</span>
              <span className="text-sm ">{ticketDetails?.user?.type}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 whitespace-nowrap  ">
            <div className="flex items-center">
              <span className="font-bold block w-[32%]">Bid:</span>
              <span className="text-sm ">
                {ticketDetails?.bid?.vehicles[0]?.model}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-bold block w-[32%]">Bid #:</span>
              <span className="text-sm text-blue1">
                {ticketDetails?.bid?.id}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-bold block w-[32%]">Reason:</span>
              <span className="text-sm ">{ticketDetails?.reason}</span>
            </div>
          </div>
        </div>
        <div className="mt-5 mx-5">
          <div className="pb-20">
            <span className="font-bold">Details:</span>
            <span className="block">
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
        {open && query.id && (
          <AddComment id={+query.id} open={open} setOpen={setOpen} name={ticketDetails.user.name} creatat={ticketDetails.created_at} />
        )}
        {openResolveModal && query.id && (
          <ResolveModal
            id={+query.id}
            open={openResolveModal}
            setOpen={setOpenResolveModal}
            status={ticketDetails.status}
          />
        )}
      </div> : 
      <Loading className="w-20" />
      }
    </div>
  );
};

export default TicketInfo;
