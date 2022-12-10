import { atom } from "recoil";
import { CommentType } from "../type";

const CommentsAtom = atom<CommentType[]>({
    key:"CommentsAtom",
    default:[]
})

export default CommentsAtom