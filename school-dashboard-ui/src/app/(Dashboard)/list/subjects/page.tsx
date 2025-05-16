'use client'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role, subjectsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const column = [
    {
      header: "Subject Name",
      accessor: "subjectname",
      className: "hidden md:table-cell"
    },
    {
      header: "Teachers",
      accessor: "teachers",
    },
    {
      header: "Action",
      accessor: "action",
    },
  ]

const subjectsListPage = () => {
    const [currentPage, setCurrentPage] = React.useState<number>(1);
      const pageNumber = [];
      const itemsPerPage = 5;
      const totalItems = subjectsData.length;
    
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
      type renderRowProps = {
        id: number,
        name: string,
        teachers: string[],
      }
        const renderRow = (item: renderRowProps) => (
            <tr key={item.id} className='even:bg-gray-100 odd:bg-white'>
            <td className='p-2 hidden md:table-cell'>{item.name}</td>
            <td className='p-2'>{item.teachers.join(',')}</td>
            <td className='p-2'>
            <div className='flex items-center gap-2'>
                <Link href={`/list/students/${item.id}`} className='bg-green-200 flex items-center rounded-full p-2'>
                <Image src='/edit.png' className='bg-gray-300' height={20} width={20} alt='editIcon'/>
                </Link>
                {
                role == "admin" && 
                    <div className='bg-purple-200 flex items-center rounded-full p-2'>
                    <Image src='/delete.png' height={20} width={20} alt='deleteIcon'/>
                    </div>
                }
            </div>
            </td>
        </tr>
    )
  return (
    <div>
        <div className='bg-white p-2'>
        {/* TABLE TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='hidden md:block font-bold'>All Subjects</h1>
            <TableSearch/>   
        </div>

        {/* TABLE */}
        <Table 
            column={column} 
            renderRow={renderRow} 
            teachersData={subjectsData}
            indexOfFirstItem={indexOfFirstItem} 
            indexOfLastItem={indexOfLastItem}
        />
            <Pagination
            prevPage={prevPage}
            nextPage={nextPage}
            pageNumber={pageNumber}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />
        </div>
    </div>
  )
}

export default subjectsListPage
