import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../../helper";
import {
  handelAddFaq,
  handelupdateFaq,
} from "../../../../helper/server/services";
import { BaseButton } from "../../../buttons";
import { Loading } from "../../../loading";

interface Props {
  open: boolean;
  setOpen: any;
  Clickanswer?: string;
  qestion?: string;
  ClickId?: number;
  Clickorder?: number;
}

const AddFAQModa = ({
  open,
  setOpen,
  ClickId,
  Clickanswer,
  qestion,
  Clickorder,
}: Props) => {
  const [title, SetTitle] = useState("");
  const [order, setOrder] = useState<number>(1);
  const [answers, setAnswer] = useState("");
  const [token, setToken] = useRecoilState(TokenAtom);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(Clickanswer&& qestion){

      setAnswer(Clickanswer!);
      SetTitle(qestion!);
      setOrder(Clickorder!);
    }
  }, [Clickanswer, qestion]);

  const handelAdd = async () => {
    setLoading(true);
    if (title && answers) {
      if (!Clickanswer && !qestion) {
        const data = new FormData();
        data.append("question", title);
        data.append("answer", answers);
        if (order) {
          data.append("order", order.toString());
        }
        const res = await handelAddFaq(token, data);
        if (res) {
          setOpen(false);
          toast.success("add");
          setLoading(false);
        } else {
          toast.error("some thing went wrong");
        }
      } else {
        const data = new FormData();
        data.append("question", title);
        data.append("answer", answers);
        data.append("_method", "PUT");

        if (order) {
          data.append("order", order.toString());
        }
        const res = await handelupdateFaq(data, token, ClickId!);
        if (res) {
          setOpen(false);
          toast.success("add");
          setLoading(false);
        } else {
          toast.error("some thing went wrong");
        }
      }
    }
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="px-4 py-4 w-[100vh] mt-3 round">
          <div className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="name" className="font-semibold px-2">
                Title
              </label>
              <input
                value={title}
                onChange={(e) => SetTitle(e.target.value)}
                id="name"
                className="w-full border outline-none px-3 py-1"
                type="text"
                placeholder="title"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="order" className="font-semibold px-2">
                Order
              </label>
              <input
                value={order}
                onChange={(e) => setOrder(+e.target.value)}
                className="w-full border outline-none px-3 py-1"
                type="number"
                placeholder="order"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="name" className="font-semibold px-2">
                Answer
              </label>
              <textarea
                value={answers}
                onChange={(e) => setAnswer(e.target.value)}
                id="name"
                className="w-full resize-none border outline-none px-3 py-1"
                placeholder="text"
              />
            </div>
            <div className="flex justify-end">
              {!loading ? (
                <BaseButton onClick={() => handelAdd()} title="submit" />
              ) : (
                <Loading className="w-10" />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddFAQModa;
