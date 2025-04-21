'use client'
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const CountChart = () => {
    const data = [
        {
            name: 'total',
            count: 100 ,
            fill: 'white',
          },
        {
          name: '50',
          count: 50,
          fill: 'red',
        },
        {
          name: '50',
          count: 50,
          fill: '#83a6ed',
        },
      ];
  return (
    <div className='w-full lg:w-1/3 rounded-2xl h-[450px] bg-white p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <span className='font-semibold'>Students</span>
            <Image src="/moreDark.png" alt='moreDark' height={20} width={20}/>
        </div>
        <div className='w-full h-[75%] relative'>
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                <RadialBar
                    background
                    dataKey="count"
                />
                </RadialBarChart>
            </ResponsiveContainer>
            <Image 
              src="/maleFemale.png" 
              alt='moreDark' 
              height={40} 
              width={40} 
              className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'
            />
        </div>
        
        {/* BOTTOM */}
        <div className='flex justify-center items-center gap-8'>
              <div className=''>
                  <div className='rounded-full bg-purple-300 w-5 h-5'/>
                  <h1 className='font-semibold'>1256</h1>
                  <div className='text-xs text-gray-500'>Boys (55%)</div>
              </div>
              <div className=''>
                  <div className='rounded-full bg-purple-300 w-5 h-5'/>
                  <h1 className='font-semibold'>1256</h1>
                  <div className='text-xs text-gray-500'>Boys (55%)</div>
              </div>
        </div>
    </div>
  )
}

export default CountChart
