import Image from 'next/image'
import React from 'react'

const UserCard = ({type}: {type: string}) => {
  return (
    <div className='odd:bg-purple-100 even:bg-yellow-100 p-4 flex-1 rounded-2xl min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-xs bg-white py-1 px-2 rounded-full'>2025/25</span>
        <Image src="/more.png" alt='more' height={20} width={20}/>
      </div>
      <h1 className='font-semibold my-4'>6123</h1>
      <div className='capitalize text-sm text-gray-500 font-semibold'>{type}</div>
    </div>
  )
}

export default UserCard
