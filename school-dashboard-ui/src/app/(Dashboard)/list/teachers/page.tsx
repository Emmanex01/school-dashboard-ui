'use client'
import { teachersData } from '@/lib/data'
import Image from 'next/image'
import React, { ReactEventHandler } from 'react'

const TeachersListPage = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const pageNumber = [];
  const itemsPerPage = 5;
  const totalItems = teachersData.length;

  for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
    pageNumber.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const nextPage = () => {
    if (currentPage === 1) {
      setCurrentPage(prev => prev + 1)
    } else {
      setCurrentPage(1)
    } 
  }

  const prevPage = () => {
    if (currentPage === 2) {
      setCurrentPage(prev => prev - 1)
    } else {
      setCurrentPage(1)
    } 
  }

  const paginate = (number: number) => {
    setCurrentPage(number)
  }

  return (
    <div className='bg-white p-2'>
      {/* TABLE TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='font-bold'>All Teachers</h1>
        <div className='flex items-center gap-4'>
            <div className='border-gray-300 border-2 flex items-center rounded-full p-2'>
                <Image src='/search.png' className='bg-gray-300' height={20} width={20} alt='searchIcon'/>
                <input type="text" />
            </div>
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

      {/* TABLE */}
        <table className='w-full'>
          <thead className=''>
            <tr className='text-left text-gray-500'>
              <th className='p-2'>Info</th>
              <th className='p-2'>Teacher ID</th>
              <th className='p-2'>Subjects</th>
              <th className='p-2'>Classes</th>
              <th className='p-2'>Phone</th>
              <th className='p-2'>Address</th>
              <th className='p-2'>Actions</th>
            </tr>
          </thead>
          <tbody className=''>
            {teachersData.slice(indexOfFirstItem, indexOfLastItem).map((item) => (
                <tr key={item.id} className='even:bg-gray-100 odd:bg-white'>
                <td className='p-4'>
                  <div className='flex items-center gap-4'>
                    <img src={item.photo} className='rounded-full h-10 w-10 object-cover' alt='userIcon'/>
                    <div className='flex flex-col'>
                      <span className='font-semibold'>{item.name}</span>
                      <span className='text-sm'>{item.email}</span>
                    </div>
                  </div>
                </td>
                <td className='p-2'>{item.teacherId}</td>
                <td className='p-2'>{item.subjects}</td>
                <td className='p-2'>{item.classes}</td>
                <td className='p-2'>{item.phone}</td>
                <td className='p-2'>{item.address}</td>
                <td className='p-2'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-green-200 flex items-center rounded-full p-2'>
                      <Image src='/edit.png' className='bg-gray-300' height={20} width={20} alt='editIcon'/>
                    </div>
                    <div className='bg-purple-200 flex items-center rounded-full p-2'>
                      <Image src='/delete.png' height={20} width={20} alt='deleteIcon'/>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>       
        </table>
        <div className='flex justify-between items-center p-4'>
          <button onClick={prevPage} className='bg-gray-300 px-4 py-2 rounded-md text-gray-400'>Prev</button>
          <div className='flex items-center gap-5 justify-center'>
            {pageNumber.map((item, index) => (
              <span onClick={() => paginate(item)} className={`p-2 ${currentPage == item ? 'bg-green-300' : 'bg-white'}`} key={index}>{item}</span>
            ))}
          </div>
          <button onClick={nextPage} className='bg-gray-300 px-4 py-2 rounded-md text-gray-400'>Next</button>
        </div>
    </div>
  )
}

export default TeachersListPage
