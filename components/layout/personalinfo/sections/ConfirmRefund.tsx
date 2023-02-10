import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import { handelRefundBid } from "../../../../helper/server/services";
import { Loading } from "../../../loading";

interface Props {
  open: boolean;
  setOpen: any;
  clickedId: number;
}

const ConfirmRefund = ({ open, setOpen, clickedId }: Props) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useRecoilState(TokenAtom);

  const handelRefund = async () => {
    setLoading(true);
    const res = await handelRefundBid(token, clickedId);
    if (res) {
      toast.success("refund success");
      setOpen(false);
      window.location.reload()
    } else {
      toast.error("this bid is not a winner bid");
    }
    setLoading(false);
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="py-7 px-5">
          <span className="font-semibold text-lg block text-center w-[350px]">
            Are you sure you want to refund bid # {clickedId} ?
          </span>
          <div className="flex justify-between mt-5">
            <button
              onClick={() => setOpen(false)}
              className="underline text-red2 font-semibold text-lg"
            >
              Cancel
            </button>
            <button
              disabled={loading && true}
              onClick={() => handelRefund()}
              className="border px-4 py-2 rounded-md text-green1 bg-green1/5 border-green1 text-lg font-semibold "
            >
              {!loading ? "Refund" : <Loading className="w-8" />}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmRefund;
