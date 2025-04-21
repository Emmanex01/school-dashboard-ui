import Announcement from '@/components/Announcement';
import Calender from '@/components/Calender';
import React from 'react';
import Calendar from 'react-calendar';

const StudentsPage = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 p-4'>
            {/* LEFT */}
            <div className='md:w-2/3 bg-slate-400'>
                Left
            </div>

            {/* RIGHT */}
            <div className='md:w-1/3'>
                <Calender/>
                <Announcement/>
            </div>
        </div>
    );
};

export default StudentsPage;