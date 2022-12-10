import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Sidebar from "../components/header/sidebar";
import Navbar from "../components/header/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-Poppins">
      <RecoilRoot>
        <Navbar />
        <Sidebar />
        <div className="bg-gray3 min-h-[100vh] pl-[110px]">
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </div>
  );
}
