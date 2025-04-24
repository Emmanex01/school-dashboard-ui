import Image from 'next/image'
import React from 'react'

const TeachersListPage = () => {
  return (
    <div className='bg-white'>
      {/* TABLE TITLE */}
      <div className='flex justify-between items-center'>
        <h1>All Teachers</h1>
        <div className='flex items-center gap-4'>
            <div className='border-gray-300 border-2'>
                <Image src='/search.png' height={20} width={20} alt='searchIcon'/>
                <input type="text" />
            </div>
            <div>
                <Image src='/filter.png' height={20} width={20} alt='searchIcon'/>   
            </div>
            <div>
                <Image src='/sort.png' height={20} width={20} alt='searchIcon'/>   
            </div>
            <div>
                <Image src='/plus.png' height={20} width={20} alt='searchIcon'/>   
            </div>
        </div>
      </div>

      {/* TABLE */}
        <table>

        </table>
    </div>
  )
}

export default TeachersListPage
