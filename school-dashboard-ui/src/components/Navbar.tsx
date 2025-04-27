import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-end md:justify-between items-center mb-4'>

        {/* Search bar */}
      <div className='hidden md:flex justify-between items-center bg-white rounded-full gap-2 p-2'>
        <Image src='/search.png' height={20} width={20} alt='searchImg'/>
        <input 
            type="text"
            className='outline-none border-none'
            placeholder='Searching...'
        />
      </div>

      {/* Icons and user */}
      <div className='flex gap-8 items-center'>
        <Image src="/message.png" height={20} width={20} alt='messageImg'/>
        <div className='relative'>
            <Image src="/announcement.png" height={20} width={20} alt='announcementImg'/>
            <span className='p-3 rounded-full absolute bg-purple-500 w-[20px] h-[20px] flex justify-center items-center -top-5 -right-5'>1</span>
        </div>
        <div className='flex flex-col'>
            <span className='text-xs leading-3 font-medium'>Obinna Emeka</span>
            <span className='text-[10px] text-right text-gray-600'>Emeka</span>
        </div>
        <Image src="/avatar.png" height={36} width={36} alt='avatarImg' className='rounded-full'/>
      </div>
    </div>
  )
}

export default Navbar
