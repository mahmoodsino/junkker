import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TokenAtom, UserDetailsAtom } from "../../../../helper";
import { handelGetBuyerDetails } from "../../../../helper/server/services";
import { Loading } from "../../../loading";
import BidsLog from "./BidsLog";
import CustomerOverview from "./CustomerOverview";
import Information from "./Information";

const PersonalInformation = () => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [useDetails, setUserDetails] = useRecoilState(UserDetailsAtom);
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      if (query.id) {
        const res = await handelGetBuyerDetails(token, +query.id);
        if (res !== null) {
          setUserDetails(res.data);
        } else {
          toast.error("some thing went wrong");
        }
      }
      setLoading(false)
    };
    if(token){
      getData();
    }
  }, [query,token]);
  return (
    <div>
      {!loading ? (
        <div>
          <div className="text-gray1 px-10 mt-5">
            <div className=" flex justify-between">
              <span>Radius: 4.5 miles</span>
              <span>Last App Login: Nov, 05, 2022</span>
            </div>
            <span className="font-semibold text-lg block mt-3">
              8951 Alpine St, Detroit, MI 48888, United States
            </span>
          </div>
          <div className="flex justify-between mt-8">
            <Information />
            <CustomerOverview />
          </div>
          <div className="mt-5">
            <BidsLog />
          </div>
        </div>
      ) : (
        <Loading className="h-20" />
      )}
    </div>
  );
};

export default PersonalInformation;
