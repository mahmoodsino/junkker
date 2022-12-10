import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

interface Props {
  open: boolean;
  setOpen: any;
  setOepnConfirm: any;
}

const ConfirmRefund = ({ open, setOpen, setOepnConfirm }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="py-7 px-5">
          <span className="font-semibold text-lg block text-center w-[350px]">
            Are you sure you want to refund bid # 123 to John Smith?
          </span>
          <div className="flex justify-between mt-5">
            <button
              onClick={() => setOpen(false)}
              className="underline text-red2 font-semibold text-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => (setOpen(false), setOepnConfirm(true))}
              className="border px-4 py-2 rounded-md text-green1 bg-green1/5 border-green1 text-lg font-semibold "
            >
              Refund
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmRefund;
