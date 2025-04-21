import React from 'react'

const Announcement = () => {
    const announcements = [
        { id: 1, title: 'Announcement 1', date: '2025-01-01', Msg: 'a deliberate increase in the book value of an asset' },
        { id: 2, title: 'Announcement 2', date: '2025-01-01', Msg: 'a deliberate increase in the book value of an asset' },
        { id: 3, title: 'Announcement 3', date: '2025-01-01', Msg: 'a deliberate increase in the book value of an asset' },
    ];
  return (
    <div className='w-full bg-white p-2'>
        <div className='flex justify-between items-center'>
            <span className='font-semibold'>Announcements</span>
            <span className='text-xs text-gray-200'>View All</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            {announcements.map((announcement) => ( 
                <div key={announcement.id} className='p-4 border-2 bg-blue-100 rounded-md'>
                    <div className='flex gap-2 items-center justify-between mb-2'>
                        <h1 className='text-xs font-semibold'>{announcement.title}</h1>
                        <span className='text-[11px] text-gray-300 p-1 bg-white rounded-md'>{announcement.date}</span>
                    </div>
                    <p className='break-words text-xs'>{announcement.Msg}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Announcement
