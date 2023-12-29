import React, { useState }  from 'react';
import { Calendar } from './components/Calendar';
import { Event } from './components/Event';
import { Modal } from './components/Modal';
import styles from './styles/app.module.css'
import { Modal_Form } from './components/Modal_Form';

function App() {

  const [selectedDate, setSelectedDate] = useState( new Date());
  const [selectedDay, setSelectedDay] = useState( (new Date()).getDate());
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState( (new Date()).getDay());
  const [showModal, setModal] = useState(false);
  
  const handleSelectedDate = ({day, dayOfWeek, date }) => {
    setSelectedDate(date);
    setSelectedDay(day);
    setSelectedDayOfWeek(dayOfWeek);
  }

  const handleModal = () => {
    console.log("set modal flag here");
    setModal(true);
    console.log("modal is now set to ", showModal);
  }

  const handleClose = () => setModal(false);

  const handleSubmit = (data) => {
    console.log("received data from form");
    console.log(data);
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
            showModal={handleModal}
            handleClose={handleClose}
          />  
          <Modal 
            show={showModal} 
            handleClose={handleClose}>
            <p>Modal</p>
            <Modal_Form onSubmit={handleSubmit}/>
          </Modal>
        </div> 
        {/* <Event/> */}
      </div>
    
  );
}

export default App;
