import React from 'react'

interface Props {
    className?:string,
    lable?:String
    placeholder?:string
    type:"text" | "password" 
}

const BaseInput = ({className,lable,placeholder,type}:Props) => {
  return (
    <div className='space-y-3'>
      {/* <label htmlFor={placeholder} className='text-gray1 text-lg block'>{lable}</label> */}
            <input  type={type} className={className ? className : 'w-full border outline-none py-2 rounded-md px-3'} placeholder={placeholder}  />
    </div>
  )
}

export default BaseInput
