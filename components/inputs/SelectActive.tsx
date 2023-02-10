import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { TokenAtom, UserDetailsAtom } from "../../helper";
import { handelChanheUserStatus } from "../../helper/server/services";
import { Loading } from "../loading";

const options = ["blocked", "active "];

interface Props {
  status: string;
  id?: number | null;
}

const SelectActive = ({ id, status }: Props) => {
  const [selected, setSelected] = useState("Inactive");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useRecoilState(TokenAtom);

  useEffect(() => {
    if (status === "active") {
      setSelected("active ");
    } else {
      setSelected("blocked");
    }
  }, [status]);

  const changeStatus = async (e: any) => {
    setLoading(true);
    setSelected(e.target.value);
    if(id&&status){
      const res = await handelChanheUserStatus(token, id, e.target.value);
      if (res === null) {
        toast.error("some thing went wrong");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      {!loading ? (
        <select
          onChange={(e) => changeStatus(e)}
          className={`font-bold border-l-4 w-[95px] border py-1.5 px-1  outline-none text-sm rounded ${
            selected === "active "
              ? "bg-green1/5  border-green1 text-green1 "
              : "bg-red2/5 border-red2 text-red2"
          }`}
        >
          {options.map((item, i) => {
            return (
              <option
                selected={item == selected ? true : false}
                key={i}
                className="text-black"
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
      ) : (
        <Loading className="h-9" />
      )}
    </div>
  );
};

export default SelectActive;
