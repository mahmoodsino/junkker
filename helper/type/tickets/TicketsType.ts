import LiveBidsType from "../live-bids-types/LiveBidsType"
import BuyerType from "../users/BuyerType"
import CommentsType from "./CommentsType"

interface TicketsType {
    id:number
    reason:String
    status:string
    bid:LiveBidsType
    user:BuyerType
    comments:CommentsType[]
    created_at:String
}

export default TicketsType