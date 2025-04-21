'use client';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
      <div className='rounded-xl w-full'>
        <Calendar onChange={onChange} value={value} />
      </div>
  )
}

export default Calender
