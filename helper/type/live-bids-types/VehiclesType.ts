import ImagesType from "./ImagesType"
import MakeType from "./MakeType"

interface VehiclesType {
    color: string
    gvwr: string
    have_chrome_rims: number
    have_converter: number
    id: number
    images: ImagesType[]
    is_alluminium_wheels: number
    is_complete: number
    make: MakeType
    model: string
    title: string
    title_img: string
    vin: string
    year: string
}

export default VehiclesType;