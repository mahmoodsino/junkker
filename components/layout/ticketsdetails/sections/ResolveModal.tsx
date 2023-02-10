import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { handelChangeTicketStatus } from "../../../../helper/server/services";
import { Loading } from "../../../loading";

interface Props {
  open: boolean;
  setOpen: any;
  id: number;
  status: string;
}

const ResolveModal = ({ open, setOpen, id, status }: Props) => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [loading, setLoading] = useState(false);

  const handelStatue = async () => {
    setLoading(true);
    if (status === "open") {
      const res = await handelChangeTicketStatus(token, id, "closed");
      if (res !== null) {
        toast.success("success");
        setOpen(false);
      } else {
        toast.error("some thing went wrong");
      }
    } else {
      const res = await handelChangeTicketStatus(token, id, "open");
      if (res !== null) {
        toast.success("success");
        setOpen(false);
      } else {
        toast.error("some thing went wrong");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <Modal  open={open} onClose={() => setOpen(false)} center>
        <div className=" px-5 w-[50vh]">
          <div className="">
            <h3 className="font-bold text-xl">Confirem</h3>
            <h4 className="font-medium text-gray1">Are you sure you want to close this ticket!</h4>
          </div>
        </div>
        <div className="flex justify-end space-x-3 px-5 mt-3">
          <button onClick={() => setOpen(false)} className="font-bold">Cancel</button>
          {!loading ? (
            <button
              onClick={() => handelStatue()}
              className="border text-red1 border-red1  px-5 py-1 rounded-md bg-red1/5"
            >
              {status === "open" ? "Close Ticket" : "Open Ticket"}
            </button>
          ) : (
            <div>
              <Loading className="h-10" />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ResolveModal;
