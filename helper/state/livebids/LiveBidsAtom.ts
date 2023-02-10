import { atom } from "recoil";
import LiveBidsType from "../../type/live-bids-types/LiveBidsType";

const LiveBidsAtom = atom<LiveBidsType[]>({
    key:"LiveBidsAtom",
    default:[]
})

export default LiveBidsAtom