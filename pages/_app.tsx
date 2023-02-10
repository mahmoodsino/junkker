import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilState } from "recoil";
import Sidebar from "../components/header/sidebar";
import Navbar from "../components/header/navbar";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactNode, useEffect } from "react";
import { TokenAtom } from "../helper";

interface Props {
  children: ReactNode;
}

const MyApp = ({ children }: Props) => {
  const [token,setToken] = useRecoilState(TokenAtom)


  useEffect(() =>{
    setToken(localStorage.getItem("token") || "");
  },[])





  return <div>{children}</div>;
};

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  
  
  return (
    <div className="font-Poppins bg-gray3">
      <RecoilRoot>
        {pathname !== "/login" && <Navbar />}
        {pathname !== "/login" && <Sidebar />}
        <div
          className={` min-h-[100vh] 2xl:container m-auto padd  mt-10 ${
            pathname !== "/login" && "pl-[60px]"
          }`}
        >
          <MyApp>
            <Component {...pageProps} />
          </MyApp>
          <ToastContainer />
        </div>
      </RecoilRoot>
    </div>
  );
}
