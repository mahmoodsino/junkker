import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TokenAtom } from "../../../helper";
import { BaseButton } from "../../buttons";

const Navbar = () => {
  const [token,setToken] = useRecoilState(TokenAtom)
  const [usename,setUserName] = useState("")

  const LogoutHandel = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("last_name");
    localStorage.removeItem("first_name");
    window.location.href = "/login";
  };


  useEffect(() =>{
    setUserName(localStorage.getItem("name" || "")||"");

  },[token])

  

  return (
    <div className="bg-gray2 h-16 flex justify-between items-center pl-[100px] border fixed w-full top-0 z-40 px-10">
      <span className="font-bold text-gray1 text-lg">
        Default Company Dashboard
      </span>
      <div className="flex items-center space-x-5">
        <Link href="/livebids">
          <div className="border flex items-center rounded-md space-x-2 py-1.5 px-2.5 bg-gray3 hover:bg-gray5 duration-300">
            <img className="h-5" src="/live.svg" alt="" />
            <span className="text-gray1 font-semibold ">Live Bids</span>
          </div>
        </Link>
        <div className="group relative">
          <button className="flex items-center space-x-2 ">
            <div className="rounded-full h-10 w-10 bg-gray3 border border-white"></div>
            <span className="font-medium text-gray1"> {usename}</span>
          </button>
          <div className="bg-white absolute group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500 ease-in-out mt-10 opacity-0 invisible  z-10 top-[100%] left-0  shadow-[0_0_5px_rgba(0,0,0,0.12)]">
            <BaseButton
              onClick={() => LogoutHandel()}
              className="px-7 w-full py-3 whitespace-nowrap text-left border-b font-medium inline-block hover:bg-gray-100"
              title="Log out"
            ></BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
