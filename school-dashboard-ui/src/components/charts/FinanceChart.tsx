'use client';
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    income: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: 'JUN',
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: 'JULY',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'AUG',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'SEPT',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'OCT',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'NOV',
    income: 349,
    expense: 4300,
    amt: 2100,
  },
  {
    name: 'DEC',
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
];

const FinanceChart = () => {
  return (
    <div>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <span className='font-semibold'>Attendance</span>
            <Image src="/moreDark.png" alt='moreDark' height={20} width={20}/>
        </div>
        <div className='w-full h-[400px] bg-white rounded-2xl p-4 mt-4'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{fill:"#d1d5db"}}/>
                    <YAxis  axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}} tickMargin={10}/>
                    <Tooltip />
                    <Legend verticalAlign='top' align='center' wrapperStyle={{paddingBottom: '20px'}}/>
                    <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={5} />
                    <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default FinanceChart
