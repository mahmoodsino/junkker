import React, { useEffect, useState } from "react";
import { BaseButton } from "../../../buttons";
import { Title } from "../../../title";
import Select, { ActionMeta, StylesConfig } from "react-select";
import {
  handelAddGift,
  handelGetBuyer,
} from "../../../../helper/server/services";
import { useRecoilState } from "recoil";
import {  TokenAtom } from "../../../../helper";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { giftSchema } from "../../../../helper/validation";
import { Loading } from "../../../loading";
import BuyerType from "../../../../helper/type/users/BuyerType";

interface IFormInputs {
  amount: number;
  description: string;
  users: any[];
}

const MainSection = () => {
  const [token, setToken] = useRecoilState(TokenAtom);
  const [buyers, setBuyers] = useState<{ label: String; value: number }[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(giftSchema),
  });

  const customStyles: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid #F8F8F8",
      color: state.isSelected ? "#373737" : "#373737",
      // paddingRight: 40,
    }),
    control: (base) => ({
      ...base,
      "&:hover": { borderColor: "#ccccc" },
      border: "1px solid #CCCCCC",
      borderRadius: "5px",
      boxShadow: "none",
      paddingTop: 3,
      paddingBottom: 4,
    }),
  };

  useEffect(() => {
    const getData = async () => {
      const res = await handelGetBuyer({token:token});
      if (res !== null) {
        let users: BuyerType[] = res.data;
        let currentUser: { label: String; value: number }[] = [];

        if (users.length !== 0) {
          users.map((user) => {
            let userValue = user.id;
            let userLabel = user.name;
            let newUser = {
              label: userLabel,
              value: userValue,
            };
            if (currentUser.length === 0) {
              currentUser = [...currentUser, newUser];
            } else {
              currentUser.map((item) => {
                if (item.value !== newUser.value) {
                  currentUser = [...currentUser, newUser];
                }
              });
            }
            setBuyers(currentUser);
          });
        }
        // setBuyers(res.data);
      } else {
        toast.error("some thing wrong");
      }
    };
    if(token){
      getData();
    }
  }, [token]);

  const submit = async (data: IFormInputs) => {
    setLoading(true);
    let users: number[] = [];
    data.users?.map((user: any) => {
      const index = users.findIndex((item) => item === user.value);
      if (index === -1) {
        users.push(user.value);
      }
    });
    console.log(users);
    const res = await handelAddGift(token, {
      all_users: false,
      amount: data.amount,
      description: data.description,
      users: users,
    });
    if (res !== null) {
      toast.success("success");
    } else {
      toast.error("some thing went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="py-12 px-7 flex justify-center">
      <div className="w-[65%] border bg-[#F4F5F6] rounded-xl pb-5">
        <Title>Gift Junkker</Title>
        <form onSubmit={handleSubmit(submit)}>
          <div className="px-5 py-5">
            <span className="text-gray1 block mb-2 font-semibold">
              Choose Users
            </span>
            <Controller
              name="users"
              control={control}
              render={({ field: { onChange, value, name, ref } }) => {
                const handleSelectChange = async (
                  selectedOption: any | null
                ) => {
                  onChange(selectedOption);
                };
                return (
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        primary: "gray",
                      },
                    })}
                    className="w-full  "
                    isMulti={true}
                    placeholder="users"
                    options={buyers}
                    onChange={handleSelectChange}
                    isSearchable={true}
                    styles={customStyles}
                  />
                );
              }}
            />

            <div>
              <div className="mt-5">
                <label
                  className="text-gray1 block mb-2 font-semibold"
                  htmlFor=""
                >
                  Amount
                </label>
                <input
                  {...register("amount")}
                  type="text"
                  className="w-full py-2.5 rounded-md border border-[#CCCCCC] outline-none px-3"
                />
              </div>
              <div className="mt-5">
                <label
                  className="text-gray1 block mb-2 font-semibold"
                  htmlFor=""
                >
                  Description
                </label>
                <input
                  {...register("description")}
                  type="text"
                  className="w-full py-2.5 rounded-md border border-[#CCCCCC] outline-none px-3"
                />
              </div>
            </div>
            <div className="flex justify-center py-10">
              {!loading ? (
                <BaseButton type="submit" title="Save" />
              ) : (
                <Loading className="h-10" />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainSection;
