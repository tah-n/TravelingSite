import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from "moment";
import { useEventStore } from "../assets/useStore";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

const localizer = momentLocalizer(moment);

const Calender = () => {
    const {events,addEvent} = useEventStore();
    const [currentView,setCurrentView] = useState('month');
    const [currentDate,setCurrentDate] = useState(new Date());

    const handleNavigate = (newDate: Date) => {
        setCurrentDate(newDate);
    }

    const handleViewChange = (newView: string) => {
        setCurrentView(newView);
    }

    const handleSelect = (slotInfo: {start: Date, end:Date}) => {
            addEvent({
                start: slotInfo.start,
                end: slotInfo.end
            });
    }

    console.log(events)



  return (
    <div className="">
        <Calendar
         className="w-[19rem] text-blue-darkblue absolute shadow-sm bg-white top-12 left-0  "
         selectable
         localizer={localizer}
         events={events}
         defaultView='month'
         views={['month']}
         min={new Date()}
         onSelectSlot={handleSelect}
         style={{height: '50vh', borderRadius: '20px', padding: '4px'}}
         onView={handleViewChange}
         date={currentDate}
         onNavigate={handleNavigate}   
        />
    </div>
  )
}

export default Calender;
