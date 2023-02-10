import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const routes = [
  { name: "Dashboard", logo: "/dashboard.svg", path: "/" },
  { name: "Bids", logo: "/cart.svg", path: "/bids" },
  { name: "Make", logo: "/make.svg", path: "/make" },
  { name: "Users", logo: "/users.svg", path: "/users" },
  { name: "Tickets", logo: "/ticket.svg", path: "/tickets" },
  { name: "Unpicked", logo: "/megaphone.svg", path: "/unpicked" },
  { name: "Gift Junkker", logo: "/gift.svg", path: "/giftjunkker" },
  {
    name: "CMS",
    logo: "/computer.svg",
    path: "/cms",
    items: [
      { name: "Home Slider", logo: "/computer.svg", path: "/homeslider" },
      { name: "Blog", logo: "/computer.svg", path: "/blog" },
      { name: "FAQ", logo: "/computer.svg", path: "/faq" },
      { name: "About Page", logo: "/computer.svg", path: "/about" },
      { name: "Selling Page", logo: "/computer.svg", path: "/selling" },
      { name: "Buying Page", logo: "/computer.svg", path: "/buying" },
    ],
  },
  { name: "Configuration", logo: "/settings.svg", path: "/configuration" },
];

interface itemsType {
  name: string;
  logo: string;
  path: string;
}

const Sidebar = () => {
  const { pathname } = useRouter();
  const [activItem, setActivItem] = useState(false);
  const [items, setItems] = useState<itemsType[]>([]);

  const handelroute = (e: any, router: any) => {
    if (router.items) {
      e.preventDefault();
      setItems(router.items);
      setActivItem(!activItem);
    }
  };

  return (
    <aside
      className="w-[50px] hover:w-[100px] hiddEff duration-500  z-50  fixed top-0 left-0"
      aria-label="Sidebar"
    >
      <div
        onMouseLeave={() => (setActivItem(false), setItems([]))}
        // style={{
        //   background: "linear-gradient(180deg, #414141 45.19%, #6C6C6C 83.96%)",
        // }}
        className="overflow-y-hidden   bg-[#0f1935] overflow-x-hidden py-4  h-[100vh] space-y-3 "
      >
        <Link href="/">
          <div className="flex items-center justify-center">
            <img src="/logo.png" className="h-7" alt="Flowbite Logo" />
          </div>
        </Link>
        <ul className="">
          {routes.map((route, i) => {
            return (
              <div key={i}>
                <Link onClick={(e) => handelroute(e, route)} href={route.path}>
                  <li
                    // onClick={() => (, route.items &&  )}
                    className={`border-b hover:bg-[#27304a] border-b-[#F1F1F1]/40 py-2 whitespace-nowrap ${
                      pathname.slice(1) !== route.path.slice(1)
                        ? ""
                        : "bg-[#27304a]"
                    }`}
                  >
                    <div className="h-[37px] flex flex-col justify-center items-center">
                      <div className="flex justify-center">
                        <img className="h-[18px] " src={route.logo} alt="" />
                      </div>
                      <div className="flex flex-col justify-center opacity-0 span h-0 items-center space-y-1">
                        <span className="text-[#ffffff]    transition-all f text-xs ">
                          {route.name}
                        </span>
                      </div>
                    </div>
                  </li>
                </Link>
                <div
                  className={` absolute top-0 py-7 transition-all duration-300 ease-in-out bg-[#0f1935]/25 h-[100vh]  left-[99px] ${
                    activItem
                      ? "w-[200px] opacity-100 visible"
                      : "opacity-0 w-0 invisible"
                  }`}
                >
                  {items.map((item, i) => {
                    return (
                      <Link
                        key={i}
                        className=" py-2 px-3 whitespace-nowrap hover:bg-[#0f1935]/70 block    text-white font-bold text-lg"
                        href={item.path}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
