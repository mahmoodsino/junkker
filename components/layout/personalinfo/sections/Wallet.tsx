import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import {  TokenAtom } from "../../../../helper";
import { handelGetJunkkersHistory } from "../../../../helper/server/services";
import JunkkersHistoryType from "../../../../helper/type/users/JunkkersHistoryType";
import { Loading } from "../../../loading";
import HistoryLog from "./HistoryLog";
import MasterCard from "./MasterCard";

interface Props {
  id: number;
}
const Wallet = ({ id }: Props) => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [junkkersHistory, setJunkkersHistory] = useState<JunkkersHistoryType[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await handelGetJunkkersHistory(token, id);
      if (res !== null) {
        setJunkkersHistory(res.data);
      } else {
        toast.error("some thing went wrong");
      }
      setLoading(false);
    };
    if(token){
      getData();
    }
  }, [token]);

  return (
    <div>
      {!loading ? (
        <div>
          <div className="my-10">
            <MasterCard />
          </div>
          <div>
            <h4 className="font-bold text-lg text-center text-gray1">
              Junkker History Log
            </h4>
            <div className="mt-10">
              {junkkersHistory.map((item, i) => {
                return <HistoryLog key={i} junkkers={item} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <Loading className="h-20" />
      )}
    </div>
  );
};

export default Wallet;
