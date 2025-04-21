import Announcement from '@/components/Announcement'
import Calender from '@/components/Calender'
import AttendanceChart from '@/components/charts/AttendanceChart'
import CountChart from '@/components/charts/CountChart'
import FinanceChart from '@/components/charts/FinanceChart'
import Events from '@/components/Events'
import UserCard from '@/components/UserCard'
import Image from 'next/image'
import React from 'react'
import Calendar from 'react-calendar'

const adminPage = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row p-4'>
      {/* LEFT */}
      <div className='flex flex-col gap-8 md:w-2/3'>
        {/* USER CARDS */}
        <div className='flex gap-3 flex-wrap'>
            <UserCard type="students"/>
            <UserCard type="teachers"/>
            <UserCard type="parents"/>
            <UserCard type="staffs"/>
        </div>

        {/* MIDDLE CHARTS */}
        <div className='flex flex-col lg:flex-row gap-4'>

          {/* COUNT CHART */}
            <CountChart/>

          {/* ATTENDANCE CHART */}  
          <AttendanceChart/>
        </div>

        {/* BOTTOM CHARTS */}
        <div className='w-full h-[500px] bg-white rounded-2xl p-2'>
          <FinanceChart/>
        </div>
      </div>

      

      {/* RIGHT */}
      <div className='md:w-1/3 flex flex-col gap-4'>
        <div className='bg-white'>
          <Calender/>
          <Events/>
        </div>
          <Announcement/>
      </div>
    </div>
  )
}

export default adminPage
