import Announcement from '@/components/Announcement'
import BigCalender from '@/components/BigCalender'
import Performance from '@/components/charts/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const teacherDetail = [
  {
    number: '90%',
    image: '/singleAttendance.png',
    category: 'Attendance'
  },
  {
    number: "6th",
    image: '/singleBranch.png',
    category: 'Grade'
  },
  {
    number: '18',
    image: '/singleLesson.png',
    category: 'Lessons'
  },
  {
    number:'6A',
    image: '/singleClass.png',
    category: 'Class Name'
  },
]

const shortCutData = ["Student's Classes", "Student's Students", "Student's Lessons", "Student's Exams", "Student's Assignments" ]

const singleStudentPage = () => {
  return (
    <div className='flex flex-col w-full md:flex-row gap-4'>
      {/* LEFT */}
      <div className='w-full md:w-2/3 flex flex-col gap-2'>
        {/* TEACHERS DETAILS */}
        <div className='flex flex-col md:flex-row gap-2'>
          {/* left */}
          <div className='flex w-full md:w-1/2 p-4 gap-4 bg-blue-400 rounded-md'>
            <div className='w-1/4 flex justify-center items-center'>
              <Image src='/avatar.png' height={100} width={100} className='rounded-full' alt="userImage"/>
            </div>
            <div className='w-3/4 flex flex-col gap-4'>
              <h1 className='text-sm font-medium'>Dean Emmanuel</h1>
              <p className='text-xs break-words'>ppppppppppppppppppppppppppp</p>
              <div className='grid grid-cols-1 xl:grid-cols-2 gap-2'>
                  <span className='flex gap-2 items-center'>
                    <Image src='/blood.png' height={11} width={11} className='rounded-full' alt="bloodImage"/>
                    <span className='text-xs'>A+</span>
                  </span>
                  <span className='flex gap-2 items-center'>
                    <Image src='/calendar.png' height={11} width={11} className='rounded-full' alt="calendarImage"/>
                    <span className='text-xs'>January 2025</span>
                  </span>
                  <span className='flex gap-2 items-center'>
                    <Image src='/mail.png' height={11} width={11} className='rounded-full' alt="calendarImage"/>
                    <span className='text-xs'>email@gmail.com</span>
                  </span>
                  <span className='flex gap-2 items-center'>
                    <Image src='/phone.png' height={11} width={11} className='rounded-full' alt="calendarImage"/>
                    <span className='text-xs'>+234 835 6789</span>
                  </span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='grid grid-cols-2 w-full md:w-1/2 gap-2'>
            {teacherDetail.map((item, index) => (
              <span key={index} className='flex gap-4 p-4 bg-white  rounded-md'>
                <div>
                  <Image src={item.image} height={24} width={24} className='rounded-full' alt="calendarImage"/>
                </div>
                <div>
                  <h1 className='font-semibold'>{item.number}</h1>
                  <h2 className='text-sm text-gray-400'>{item.category}</h2>
                </div>
              </span>
            ))}
          </div>
        </div>

        {/* TEACHERS SCHEDULE */}
        <div className='bg-white'>
        <h1 className='p-4 font-semibold'>Student's Schedule</h1>
            <BigCalender/>
        </div>
      </div>

      {/* RIGHT */}
      <div className='w-full flex flex-col gap-4 md:w-1/3 '>
        <div className='bg-white p-2 rounded-md'>
          <h1 className='font-semibold'>Shortcuts</h1>
          <div className=' flex gap-2 flex-wrap my-2'>
            {
              shortCutData.map((item, index) => (
                <Link href='/' key={index} className='even:bg-yellow-50 p-2 text-xs odd:bg-blue-200 rounded-md'>{item}</Link>
              ))
            }
          </div>
        </div>
          <Performance/>
          <Announcement/>
        
      </div>
    </div>
  )
}

export default singleStudentPage
