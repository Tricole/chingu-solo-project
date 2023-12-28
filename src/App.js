import './App.css';
import React, { useState }  from 'react';
import { Calendar } from './components/Calendar';
import { Event } from './components/Event';

function App() {

  const [selectedDate, setSelectedDate] = useState( new Date());
  const [selectedDay, setSelectedDay] = useState( (new Date()).getDate());
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState( (new Date()).getDay());

  
  const handleSelectedDate = ({day, dayOfWeek, date }) => {
    setSelectedDate(date);
    setSelectedDay(day);
    setSelectedDayOfWeek(dayOfWeek);
  }


  console.log('handleSelectedDate:', handleSelectedDate);

  return (
  
      <div className='App' >
        <h1> eCalendar</h1>  
        <Calendar onDateSelect={handleSelectedDate}/>
        <Event 
          date={selectedDate} 
          day={selectedDay}
          dayOfWeek={selectedDayOfWeek}
        />
        {/* <Event/> */}
      </div>
    
  );
}

export default App;
