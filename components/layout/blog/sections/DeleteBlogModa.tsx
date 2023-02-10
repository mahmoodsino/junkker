import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import {
  handeldeleteBlog,
  handeldeleteHomeSlider,
} from "../../../../helper/server/services";
import { Loading } from "../../../loading";

interface Props {
  open: boolean;
  setOpen: any;
  id: number;
}
const DeleteBlogModa = ({ open, setOpen, id }: Props) => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [loadind, setLoading] = useState(false);

  const confirmDelete = async () => {
    setLoading(true);
    const res = await handeldeleteBlog(token, id);
    if (res) {
      toast.success("Make delted Sucssefully");
      setOpen(false);
    } else {
      toast.error("somr thing went wrong");
    }

    setLoading(false);
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className=" px-4 py-4  mt-3 round">
          <span className="text-xl font-bold">
            Are you sure want to delete this blog !!
          </span>

          <div className="flex justify-between mt-5">
            <button
              onClick={() => setOpen(false)}
              className="border px-4 py-1 border-black font-bold rounded-full"
            >
              cancel
            </button>
            <button
              disabled={loadind ? true : false}
              onClick={() => confirmDelete()}
              className="border-2 px-4 py-1 border-red-600 text-red-600 font-bold rounded-full "
            >
              {!loadind ? "Delete" : <Loading className="w-8" />}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteBlogModa;
