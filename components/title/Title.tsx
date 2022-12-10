import React, { ReactNode } from 'react'

interface Props {
    children:ReactNode
}

const Title = ({children}:Props) => {
  return (
    <h2 className="flex bg-gray4 border-b items-center space-x-2 rounded-t-xl px-5 py-3 text-xl font-medium">
          {children}
        </h2>
  )
}

export default Title
