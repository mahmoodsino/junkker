import React from "react";
import { useRecoilState } from "recoil";
import { CommentsAtom } from "../../../../helper";

const Commnets = () => {
  const [comments, setComments] = useRecoilState(CommentsAtom);
  return (
    <div className="mt-10">
      <span className="text-lg font-semibold block mb-5">
        Comment({comments?.length})
      </span>
      <div className="bg-white rounded-xl  ">
        {comments.map((item, i) => {
          return (
            <div key={i} className="py-5  px-5">
              <div className="flex justify-between">
                <span>{item.userName}</span>
                <span className="text-black">Nov, 20, 2022</span>
              </div>
              <span className="block mt-3">{item.comment}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Commnets;
