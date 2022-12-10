import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useRecoilState } from "recoil";
import { CommentsAtom } from "../../../../helper";

interface Props {
  open: boolean;
  setOpen: any;
}

const AddComment = ({ open, setOpen}: Props) => {
  const [comments, setComments] = useRecoilState(CommentsAtom)

  const [text, setText] = useState("");
  const handelAddComments = () => {
    setOpen(false)
    setComments([...comments, {
        comment:text,
        userName:"mahmood"
    }])
}
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="py-7 px-5 w-[100vh]">
          <div className="flex justify-between py-3">
            <span>David K</span>
            <span className="font-bold">Message</span>
            <span>Nov, 20, 2022</span>
          </div>
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="w-[100%] h-[150px] outline-none border rounded-md px-3 bg-gray2"
            placeholder="Type message"
          />
        </div>
        <div className="flex justify-end px-5">
          <button onClick={() => handelAddComments()} className="border text-green1 border-green1  px-5 py-1 rounded-md bg-green1/5">
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddComment;
