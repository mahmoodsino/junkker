import React from "react";

interface Props {
  className?: string;
  lable?: String;
  placeholder?: string;
  type: "text" | "password";
  name?: string;
  register?: any;
  onChange?: any;
  value?:any
}

const BaseInput = ({
  className,
  lable,
  placeholder,
  type,
  name,
  register,
  onChange,
  value
}: Props) => {
  return (
    <div className="space-y-3">
      {/* <label htmlFor={placeholder} className='text-gray1 text-lg block'>{lable}</label> */}
      <input
        onChange={onChange}
        type={type}
        value={value}
        className={
          className
            ? className
            : "w-full border outline-none py-2 rounded-md px-3"
        }
        placeholder={placeholder}
        name={name}
        {...(register && { ...register(name) })}
      />
    </div>
  );
};

export default BaseInput;
