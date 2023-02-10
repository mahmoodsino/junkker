import { atom } from "recoil";
import TicketsType from "../../type/tickets/TicketsType";

const TicketsAtom = atom<TicketsType[]>({
    key:"TicketsAtom",
    default:[]
})

export default TicketsAtom