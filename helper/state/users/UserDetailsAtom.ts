import { atom } from "recoil";
import UserDetailsType from "../../type/users/UserDetailsType";

const UserDetailsAtom  = atom<UserDetailsType>({
    key:"UserDetailsAtom",
    default : {} as UserDetailsType
})

export default UserDetailsAtom