import React from "react";
import { BaseButton } from "../../../buttons";
import { Title } from "../../../title";
import Select, { ActionMeta, StylesConfig } from "react-select";

const MainSection = () => {
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
      borderRadius:"5px",
      boxShadow: "none",
      paddingTop: 3,
      paddingBottom: 4,
    }),
  };

  const optioins = [
    {
      label: "user1",
      value: 1,
    },
    {
      label: "user2",
      value: 2,
    },
    {
      label: "user3",
      value: 3,
    },
    {
      label: "user4",
      value: 5,
    },
  ];

  const onChange = (option: any | null, actionMeta: ActionMeta<any>) => {
    console.log(option);
  };

  return (
    <div className="py-12 px-7">
      <div className="w-[65%] border bg-[#F4F5F6] rounded-xl pb-5">
        <Title>Gift Junkker</Title>
        <div className="px-5 py-5">
          <span className="text-gray1 block mb-5 font-semibold">
            Choose Users
          </span>
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
            options={optioins}
            onChange={onChange}
            isSearchable={true}
            styles={customStyles}
          />
          <div className="flex justify-center py-10">
            <BaseButton title="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
