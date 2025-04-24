import Announcement from '@/components/Announcement';
import BigCalender from '@/components/BigCalender';
import React from 'react'

const parentPage = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 p-4'>
            {/* LEFT */}
            <div className='md:w-2/3 bg-white'>
                <h1 className='p-4 font-semibold'>Schedule (John Doe)</h1>
                <BigCalender/>
            </div>
    
            {/* RIGHT */}
            <div className='md:w-1/3'>
                <Announcement/>
            </div>
        </div>
      );
}

export default parentPage
