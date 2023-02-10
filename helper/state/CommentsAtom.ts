import { atom } from "recoil";
import CommentsType from "../type/tickets/CommentsType";

const CommentsAtom = atom<CommentsType[]>({
    key:"CommentsAtom",
    default:[]
})

export default CommentsAtom