'use client'
import Image from 'next/image'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AttendanceChart = () => {
    const data = [
        {
          name: 'Mon',
          present: 50,
          absent: 25,
        },
        {
          name: 'Tues',
          present: 75,
          absent: 50,
        },
        {
          name: 'Wed',
          present: 90,
          absent: 50,
        },
        {
          name: 'Thurs',
          present: 75,
          absent: 50,
        },
        {
          name: 'Fri',
          present: 50,
          absent: 25,
        },
      ];


  return (
    <div className='w-full lg:w-2/3 h-[450px] rounded-2xl bg-white p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <span className='font-semibold'>Attendance</span>
            <Image src="/moreDark.png" alt='moreDark' height={20} width={20}/>
        </div>
        <div className='w-full h-96 mt-4'>
            <ResponsiveContainer>
                <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
                >
                    <Legend verticalAlign="top" align='left' iconType="circle" wrapperStyle={{ paddingBottom: '30px'}} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"  axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}} />
                    <Tooltip contentStyle={{borderRadius:'10px', backgroundColor:"lightgray"}} />
                    <Bar dataKey="present" fill="#8884d8" barSize={20} radius={[10, 10, 0, 0]}  />
                    <Bar dataKey="absent" fill="#82ca9d" barSize={20} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
            
    </div>
  )
}

export default AttendanceChart
