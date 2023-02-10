import { atom } from "recoil";
import MakeType from "../../type/live-bids-types/MakeType";

const MakesAtom = atom<MakeType[]>({
    key:"MakesAtom",
    default:[]
})

export default MakesAtom