import Image from 'next/image'
import React from 'react'

const Events = () => {
    const events = [
        { id: 1, title: 'Event 1', date: '12:00PM 2:00AM', Msg: 'a deliberate increase in the book value of an asset' },
        { id: 2, title: 'Event 2', date: '12:00PM 2:00AM', Msg: 'a deliberate increase in the book value of an asset' },
        { id: 3, title: 'Event 3', date: '12:00PM 2:00AM', Msg: 'a deliberate increase in the book value of an asset' },
    ];
  return (
    <div className='w-full bg-white rounded-2xl p-2 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
            <span className='font-semibold'>Events</span>
            <Image src="/moreDark.png" alt='moreDark' height={20} width={20}/>
        </div>
        {events.map((event) => ( 
            <div key={event.id} className='p-4 border-2 border-gray-100 border-t-2 odd:border-t-blue-600 even:border-t-purple-600 rounded-md'>
                <div className='flex gap-2 items-center justify-between'>
                    <h1 className='text-xs font-semibold mb-2'>{event.title}</h1>
                    <span className='text-[11px] text-gray-300'>{event.date}</span>
                </div>
                <p className='break-words text-xs'>{event.Msg}</p>
            </div>
        ))}
    </div>
  )
}

export default Events
