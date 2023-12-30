import React, { useEffect, useState }  from 'react';
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
  const [newEvent, setNewEvent] = useState();
  const [id, setId] = useState(0);

  // useEffect(() => {

  // },[])
  
  const handleSelectedDate = ({day, dayOfWeek, date }) => {
    setSelectedDate(date);
    setSelectedDay(day);
    setSelectedDayOfWeek(dayOfWeek);
  }

  const handleModal = () => {
    setModal(true);
  }

  const handleClose = () => setModal(false);

  const handleSubmit = (data) => {
    setNewEvent(data);
    setModal(false);
  }


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
            newEvent={newEvent}
            // setNewEvent={setNewEvent}
          />  
          <Modal 
            show={showModal} 
            handleClose={handleClose}>
            <p>Modal</p>
            <Modal_Form 
              submitForm={handleSubmit}
              setId={setId} 
              prevId={id}
            />
          </Modal>
        </div> 
        {/* <Event/> */}
      </div>
    
  );
}

export default App;
