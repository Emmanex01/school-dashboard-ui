'use client'
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 92, fill: '#0088FE' },
  { name: 'Group B', value: 8, fill: '#00C49F' },
];

const Performance = () => {
    return (
        <div className='bg-white rounded-md'>
            <div className='flex justify-between items-center p-2'>
                <span className='font-semibold'>Performance</span>
                <Image src="/moreDark.png" alt='moreDark' height={20} width={20}/>
            </div>
            <div className='h-[300px] p-2 relative'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        fill="#8884d8"
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className='flex flex-col justify-center items-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3'>
                    <span className='text-3xl'>9.2</span>
                    <span>of 10 max LTS</span>
                </div>
                <h1 className='absolute bottom-16 left-0 right-0 m-auto text-center font-semibold'>1st Semester - 2nd Semester</h1>
            </div>
            
        </div>
      );
}

export default Performance
