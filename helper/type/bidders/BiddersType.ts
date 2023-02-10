import LiveBidsType from "../live-bids-types/LiveBidsType"
import BuyerType from "../users/BuyerType"

interface BiddersType {
    amount:number
    bid:LiveBidsType
    id:number
    status:string
    user:BuyerType
}

export default BiddersType