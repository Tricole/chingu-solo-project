import React, { useState }  from 'react';
import { Calendar } from './components/Calendar';
import { Event } from './components/Event';
import styles from './styles/app.module.css'

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
  
      <div className={styles.app} >
        <h1> eCalendar</h1> 
        <div className={styles.split_window}>
          <Calendar onDateSelect={handleSelectedDate}/>
          <Event 
            date={selectedDate} 
            day={selectedDay}
            dayOfWeek={selectedDayOfWeek}
          />  
        </div> 
        {/* <Event/> */}
      </div>
    
  );
}

export default App;
