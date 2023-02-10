import React from "react";
import { useRecoilState } from "recoil";
import { CommentsAtom } from "../../../../helper";
import Commnets from "./Commnets";
import TicketInfo from "./TicketInfo";

const MainSection = () => {
  const [comments, setComments] = useRecoilState(CommentsAtom);

  return (
    <div className="px-7 py-12">
      <TicketInfo />
      {comments?.length > 0 && <Commnets />}
    </div>
  );
};

export default MainSection;
