'use client'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { classesData, lessonsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactEventHandler } from 'react'

const column = [
  {
    header: "Subject Name",
    accessor: "subjecttName",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell"
  },
  {
    header: "Action",
    accessor: "action",
  },
]

const LessonsListPage = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const pageNumber = [];
  const itemsPerPage = 5;
  const totalItems = lessonsData.length;

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
    subject: string,
    class: string,
    teacher: string,
    address: string,
  }

  const renderRow = (item: renderRowProps) => (
        <tr key={item.id} className='even:bg-gray-100 odd:bg-white'>
          <td className='p-2'>{item.subject}</td>
          <td className='p-2'>{item.class}</td>
          <td className='p-2 hidden md:table-cell'>{item.teacher}</td>
          <td className='p-2'>
            <div className='flex items-center gap-2'>
              <Link href={`/list/teachers/${item.id}`} className='bg-green-200 flex items-center rounded-full p-2'>
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
    <div className='bg-white p-2'>
      {/* TABLE TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block font-bold'>All Classes</h1>
        <TableSearch/>   
      </div>

      {/* TABLE */}
      <Table 
        column={column} 
        renderRow={renderRow} 
        teachersData={lessonsData}
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
  )
}

export default LessonsListPage
