import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray2 h-16 flex justify-between items-center pl-[100px] border px-10'>
      <span className='font-bold text-gray1 text-lg'>Default Company Dashboard</span>
      <div className='flex items-center space-x-5'>
        <Link href="/">
        <div className='border flex items-center rounded-md space-x-2 py-1.5 px-2.5 bg-bg-gray3 hover:bg-gray5 duration-300'>
            <img className='h-5' src="/live.svg" alt="" />
            <span className='text-gray1 font-semibold '>Live Orders</span>
        </div>
        </Link>
        <div className='flex items-center space-x-2'>
            <div className='rounded-full h-10 w-10 bg-gray3 border border-white'>
            </div>
            <span className='font-medium text-gray1'> David k</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
