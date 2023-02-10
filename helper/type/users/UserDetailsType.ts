import licensesType from "./licensesType"

interface UserDetailsType {
    email: string,
    name: string,
    phone: string,
    address: string,
    junkkers: number,
    status: string,
    licenses:licensesType[]
    lat: null,
    lng: null,
    type: string,
    max_radius: number,
    won_count: number,
    lose_count: number,
    refunded_count: number,
}

export default UserDetailsType