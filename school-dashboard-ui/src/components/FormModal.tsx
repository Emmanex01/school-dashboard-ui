import Image from 'next/image'
import React, { useState } from 'react'
import TeachersForm from './forms/TeachersForm'

const FormModal = ({
    table,
    type,
    id,
    data,
    }
    : {
    table: string,
    type: string,
    id?: number
    data?:any
    }) => {
    
    const [openModal, setOpenModal] = useState(false);

    const size = type === "delete" ? 'w-7 h-7' : 'w-8 h-8';
    const bgColor = type === "create" ? 'bg-yellow-300' : type === "delete" ? 'bg-purple-200' :  'bg-green-200';

    const Form = () => {
      return type === "delete" && id ? 
      (
        <form action="/" className='flex flex-col justify-center items-center gap-4'>
          <div className=' text-lg font-semibold'>
            All data will be lost, Are you sure you want to delete this {table}?
          </div>
          <button className='bg-red-500 text-white rounded-full p-2 w-full'>
            Delete
          </button>
        </form>
      ) : (
        <TeachersForm type={type} data={data}/>
      )
    }
  return (
    <>
      <button 
        className={`${bgColor} ${size} flex items-center rounded-full p-2`}
        onClick={() => setOpenModal(true)}
      >
        <Image src={`/${type}.png`} height={20} width={20} alt='deleteIcon'/>
      </button>
      {openModal && 
        <div className='w-screen h-screen bg-black bg-opacity-60 absolute top-0 left-0 flex justify-center items-center'>
          <div className=' bg-white w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] relative p-2 rounded-md'>
            <Form/>
            <div 
              className='absolute right-1 top-1 cursor-pointer'
              onClick={() => setOpenModal(false)}
            >
              <Image src='/close.png' height={20} width={20} alt='closeIcon'/>
            </div>
          </div>
          
        </div> 
      
      }
    </>
  )
}

export default FormModal
