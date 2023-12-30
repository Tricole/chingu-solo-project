import React, { useEffect, useState }  from 'react';
import { Calendar } from './components/Calendar';
import { Event } from './components/Event';
import { Modal } from './components/Modal';
import styles from './styles/app.module.css'
import { Modal_Form } from './components/Modal_Form';
import { Modal_Form_Edit } from './components/Modal_Form_Edit';

function App() {

  const [selectedDate, setSelectedDate] = useState( new Date());
  const [selectedDay, setSelectedDay] = useState( (new Date()).getDate());
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState( (new Date()).getDay());
  const [showModal, setModal] = useState(false);
  const [addEvent, setNewEvent] = useState();
  const [id, setId] = useState(0);
  const [event, setEvent] = useState();

  
  const handleSelectedDate = ({day, dayOfWeek, date }) => {
    setSelectedDate(date);
    setSelectedDay(day);
    setSelectedDayOfWeek(dayOfWeek);
  }

  const handleModal = () => {
    setModal(true);
  }

  const handleClose = () => {
    console.log("in handle close function");
    setModal(false)

  }

  const handleSubmit = (data) => {
    setNewEvent(data);
    setModal(false);
    setEvent();
  }

  // const handleEventUpdate = (data) => {
  //   setNewEvent(data);
  //   setEvent();
  //   setModal(false);
  // }


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
            newOrUpdatedEvent={addEvent}
            eventToUpdate={setEvent}
          />  
          <Modal 
            show={showModal} 
            handleClose={handleClose}>
            <p>Modal</p>
            {event == undefined?
              <Modal_Form 
                submitForm={handleSubmit}
                setId={setId} 
                prevId={id}
              />
            :
              <Modal_Form_Edit
                submitForm={handleSubmit}
                event={event}
              />
            }
          </Modal>
        </div> 
        {/* <Event/> */}
      </div>
    
  );
}

export default App;
