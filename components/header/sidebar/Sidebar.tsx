import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const routes = [
  { name: "Dashboard", logo: "/dashboard.svg", path: "/" },
  { name: "Bids", logo: "/cart.svg", path: "/bids" },
  { name: "Users", logo: "/users.svg", path: "users" },
  { name: "Tickets", logo: "/ticket.svg", path: "/tickets" },
  { name: "Unpicked", logo: "/megaphone.svg", path: "/unpicked" },
  { name: "Gift Junkker", logo: "/gift.svg", path: "/giftjunkker" },
  { name: "CMS", logo: "/computer.svg", path: "/" },
  { name: "Configuration", logo: "/settings.svg", path: "/configuration" },
];

const Sidebar = () => {
  const { pathname,push,replace,query } = useRouter();

  return (
    <aside className="w-[100px]  fixed top-0 left-0" aria-label="Sidebar">
      <div
        // style={{
        //   background: "linear-gradient(180deg, #414141 45.19%, #6C6C6C 83.96%)",
        // }}
        className="overflow-y-hidden  bg-[#0f1935] overflow-x-hidden py-4  h-[100vh] space-y-5 "
      >
        <Link href="/">
          <div className="flex items-center justify-center">
            <img src="/logo.png" className="h-7" alt="Flowbite Logo" />
          </div>
        </Link>
        <ul className="">
          {routes.map((route, i) => {
            return (
              <li className={`border-b hover:bg-[#27304a] border-b-[#F1F1F1]/40 py-3 whitespace-nowrap ${pathname.slice(1) !== route.path.slice(1) ? "" : "bg-[#27304a]"}`} >
                <Link href={route.path}>
                  <div className="flex flex-col justify-center items-center space-y-1">
                    <img className="h-[18px]" src={route.logo} alt="" />
                    <span className="text-[#ffffff] font-semibold text-xs ">
                      {route.name}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
