'use client'
import React, { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment'
import { calendarEvents } from '@/lib/data';


const localizer = momentLocalizer(moment)

const BigCalender = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView)
    }

  return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week", 'day']}
            view={view}
            onView={handleOnChangeView}
            style={{ height: '98%' }}
            min={new Date(2025,1,1,8,0)}
            max={new Date(2025,5,1,17,45)}
        />
  )
}

export default BigCalender
