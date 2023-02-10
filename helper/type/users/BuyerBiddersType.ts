import LiveBidsType from "../live-bids-types/LiveBidsType";
import BuyerType from "./BuyerType";

interface BuyerBiddersType {
    id: number,
    amount: number,
    status: string,
    user: BuyerType
    bid: LiveBidsType
}

export default BuyerBiddersType