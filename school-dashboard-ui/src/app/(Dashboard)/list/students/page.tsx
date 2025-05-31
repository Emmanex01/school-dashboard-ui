'use client'
import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, studentsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
      header: "Grade",
      accessor: "grade",
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

const studentsList = () => {
    const [currentPage, setCurrentPage] = React.useState<number>(1);
      const pageNumber = [];
      const itemsPerPage = 5;
      const totalItems = studentsData.length;
    
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
        studentId: string,
        name: string,
        email?: string,
        photo: string,
        phone?: string,
        grade: number,
        class: string,
        address: string,
      }
        const renderRow = (item: renderRowProps) => (
            <tr key={item.id} className='even:bg-gray-100 odd:bg-white'>
            <td className='p-4'>
            <div className='flex items-center gap-4'>
                <img src={item.photo} className='md:hidden xl:table-cell rounded-full h-10 w-10 object-cover' alt='userIcon'/>
                <div className='flex flex-col'>
                <span className='font-semibold'>{item.name}</span>
                <span className='text-sm'>{item.class}</span>
                </div>
            </div>
            </td>
            <td className='p-2 hidden md:table-cell'>{item.studentId}</td>
            <td className='p-2 hidden md:table-cell'>{item.grade}</td>
            <td className='p-2 hidden md:table-cell'>{item.phone}</td>
            <td className='p-2 hidden md:table-cell'>{item.address}</td>
            <td className='p-2'>
            <div className='flex items-center gap-2'>
                {
                  role == "admin" && 
                  <>
                    <FormModal table='students' type='update' id={item.id}/>
                    <FormModal table='students' type='delete' id={item.id}/>
                  </>  
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
            <h1 className='hidden md:block font-bold'>All Students</h1>
            <TableSearch table='student'/>  
        </div>

        {/* TABLE */}
        <Table 
            column={column} 
            renderRow={renderRow} 
            teachersData={studentsData} 
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

export default studentsList
