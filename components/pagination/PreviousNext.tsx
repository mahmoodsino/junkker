import React from 'react'

const PreviousNext = () => {
  return (
    <div className='flex '>
        <button className='text-[#787878] px-1 border bg-white border-[#787878] rounded-l-md'>Previous</button>
        <span className=' bg-gray1 text-white py-1.5 px-4'>1</span>
        <button className='text-[#787878] px-4 py-1.5 border bg-white border-[#787878] rounded-r-md'>Next</button>
      
    </div>
  )
}

export default PreviousNext
