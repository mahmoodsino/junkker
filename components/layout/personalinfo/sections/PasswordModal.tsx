import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { BaseInput } from "../../../inputs";

interface Props {
  open: boolean;
  setOpen: any;
}

const PasswordModal = ({ open, setOpen }: Props) => {
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="py-7 px-5">
          <span className="font-semibold text-lg block text-center w-[350px]">
            Please type your password
          </span>
          <div className="mt-6">
            <BaseInput type="password" placeholder="**********" />
          </div>
          <div className="flex justify-between mt-5">
            <button
              onClick={() => setOpen(false)}
              className="underline text-red2 font-semibold text-lg"
            >
              Cancel
            </button>
            <button className="border px-4 py-2 rounded-md text-green1 bg-green1/5 border-green1 text-lg font-semibold ">
              Confrim
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PasswordModal;
