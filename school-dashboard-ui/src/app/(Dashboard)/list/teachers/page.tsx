'use client'
import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactEventHandler } from 'react'

const column = [
  {
    header: "Info",
    accessor: "info"
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell"
  },
  {
    header: "Subjects",
    accessor: "subject",
    className: "hidden md:table-cell"
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell"
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell"
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden md:table-cell"
  },
  {
    header: "Action",
    accessor: "action",
  },
]

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

  type renderRowProps = {
    id: number,
    teacherId: string,
    name: string,
    email?: string,
    photo: string,
    phone: string,
    subjects?: string[],
    classes?: string[],
    grade?: number,
    class?: string,
    address: string,
  }

  const renderRow = (item: renderRowProps) => (
          <tr key={item.id} className='even:bg-gray-100 odd:bg-white'>
          <td className='p-4'>
            <div className='flex items-center gap-4'>
              <img src={item.photo} className='md:hidden xl:table-cell rounded-full h-10 w-10 object-cover' alt='userIcon'/>
              <div className='flex flex-col'>
                <span className='font-semibold'>{item.name}</span>
                <span className='text-sm'>{item.email}</span>
              </div>
            </div>
          </td>
          <td className='p-2 hidden md:table-cell'>{item.teacherId}</td>
          <td className='p-2 hidden md:table-cell'>{item.subjects?.join(",")}</td>
          <td className='p-2 hidden md:table-cell'>{item.classes?.join(",")}</td>
          <td className='p-2 hidden md:table-cell'>{item.phone}</td>
          <td className='p-2 hidden md:table-cell'>{item.address}</td>
          <td className='p-2'>
            <div className='flex items-center gap-2'>
              {
                role == "admin" && 
                <>
                  <FormModal table='teacher' type='update' id={item.id}/>
                  <FormModal table='teacher' type='delete' id={item.id}/>
                </>  
              }
            </div>
          </td>
        </tr>
  )


  return (
    <div className='bg-white p-2'>
      {/* TABLE TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='hidden md:block font-bold'>All Teachers</h1>
        <TableSearch table='teacher'/>   
      </div>

      {/* TABLE */}
      <Table 
        column={column} 
        renderRow={renderRow} 
        teachersData={teachersData} 
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

export default TeachersListPage
