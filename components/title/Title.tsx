import React, { ReactNode } from 'react'

interface Props {
    children:ReactNode
}

const Title = ({children}:Props) => {
  return (
    <h2 className="flex bg-gray4 border-b font-bold text-gray1 text-lg items-center space-x-2 rounded-t-xl px-5 py-3 ">
          {children}
        </h2>
  )
}

export default Title
