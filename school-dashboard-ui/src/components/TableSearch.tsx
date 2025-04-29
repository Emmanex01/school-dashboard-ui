import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
        <div className='border-gray-300 border-2 flex items-center rounded-full p-2 w-full'>
            <Image src='/search.png' height={20} width={20} alt='searchIcon'/>
            <input type="text" />
        </div>
        <div className='flex items-center gap-4'>
            <div className='bg-yellow-300 flex items-center rounded-full p-2'>
                <Image src='/filter.png' height={20} width={20} alt='searchIcon'/>   
            </div>
            <div className='bg-yellow-300 flex items-center rounded-full p-2'>
                <Image src='/sort.png' height={20} width={20} alt='searchIcon'/>   
            </div>
            <div className='bg-yellow-300 flex items-center rounded-full p-2'>
                <Image src='/plus.png' height={20} width={20} alt='searchIcon'/>   
            </div>
        </div>
        
    </div>
  )
}

export default TableSearch
