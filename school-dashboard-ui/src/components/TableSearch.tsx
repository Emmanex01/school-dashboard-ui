import Image from 'next/image'
import React from 'react'
import FormModal from './FormModal'

const TableSearch = () => {
  return (
    <div className='flex flex-col items-end md:flex-row md:items-center gap-4 w-full md:w-auto'>
        <div className='border-gray-300 border-2 flex items-center rounded-full p-2 w-full'>
            <Image src='/search.png' height={20} width={20} alt='searchIcon'/>
            <input type="text" />
        </div>
        <div className='flex items-center gap-4'>
            <button className='bg-yellow-300 w-8 h-8 flex items-center rounded-full p-2'>
                <Image src='/filter.png' height={20} width={20} alt='searchIcon'/>   
            </button>
            <button className='bg-yellow-300 w-8 h-8 flex items-center rounded-full p-2'>
                <Image src='/sort.png' height={20} width={20} alt='searchIcon'/>   
            </button>
            <FormModal type='create'/>
        </div>
        
    </div>
  )
}

export default TableSearch
