import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { CommentsAtom, TokenAtom } from "../../../../helper";
import { handelAddComment } from "../../../../helper/server/services";
import { Loading } from "../../../loading";

interface Props {
  open: boolean;
  setOpen: any;
  id:number
  name:string
  creatat:any
}

const AddComment = ({ open, setOpen , id , name, creatat}: Props) => {
  const [comments, setComments] = useRecoilState(CommentsAtom)
  const [token,setToken] = useRecoilState(TokenAtom)
  const [loading,setLoading] = useState(false)

  const [text, setText] = useState("");
  const handelAddComments = async () => {
    setLoading(true)
    if(text){
      const res = await handelAddComment(token,id,text)
      if(res!==null){
        toast.success("success")
      }else{
        toast.error("some thing went wrong")
      }
    }
    setLoading(false)
    setOpen(false)

}
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="py-7 px-5 w-[100vh]">
          <div className="flex justify-between py-3">
            <span>{name}</span>
            <span className="font-bold">Message</span>
            <span>{creatat}</span>
          </div>
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="w-[100%] h-[150px] resize-none outline-none border rounded-md px-3 bg-gray2"
            placeholder="Type message"
          />
        </div>
        <div className="flex justify-end px-5">
          <button disabled={loading && true} onClick={() => handelAddComments()} className="border text-green1 border-green1  px-5 py-1 rounded-md bg-green1/5">
            {!loading ?
            "Add" : 
            <Loading className="h-6" />
            }
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddComment;
