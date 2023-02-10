import { ElementType, FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

const withAuth =
  (WrappedPage: ElementType): FC =>
  ({ ...props }) => {
    const router = useRouter();
    const pathname = useRouter().pathname;
    const [token, setToken] = useState("");

    useEffect(() => {
      const checkToken = async () => {
        const userToken = localStorage.getItem("token");

        setToken(userToken || "");

        if (userToken === null) {
          if (
            pathname !== "/login" 
          ) {
            router.push("/login");
          }
        }
         else if (userToken !== null ) {
          if (pathname === "/login") {
            router.push("/");
          }
        }
      };

      checkToken();
    }, []);

    return <WrappedPage {...props} />;
  };

export default withAuth;


