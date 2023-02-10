import OwnerType from "./OwnerType"
import VehiclesType from "./VehiclesType"

type LiveBidsType = {
    best_bid: number
    bidders_count: number
    created_at: string
    id: number
    lat: string
    lng: string
    notes: string
    owner: OwnerType
    end_at: string
    remianing: number
    status: string
    vehicles: VehiclesType[]
}

export default LiveBidsType