import React from 'react'

interface Props {
    className?:string
    optionName:string
}

const SelectInput = ({optionName,className}:Props) => {
  return (
    <select
          className={`${className ? className : "bg-white border border-[#B7B7B7] w-[90px] py-2 px-1 text-[#878787] outline-none text-sm rounded-sm"}`}
        >
          <option selected>{optionName}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
  )
}

export default SelectInput
