import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Sidebar from "../components/header/sidebar";
import Navbar from "../components/header/navbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <div className="font-Poppins bg-gray3">
      <RecoilRoot>
        {pathname !== "/login" && <Navbar />}
        {pathname !== "/login" && <Sidebar />}
        <div
          className={` min-h-[100vh] 2xl:container m-auto padd  ${
            pathname !== "/login" && "pl-[60px]"
          }`}
        >
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </div>
  );
}
