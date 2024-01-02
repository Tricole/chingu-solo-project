import React, { useState }  from 'react';
import { Calendar } from './components/Calendar';
import { Event } from './components/Event';
import { Modal } from './components/Modal';
import styles from './styles/app.module.css'
import { ModalForm } from './components/ModalForm';
import { ModalFormEdit } from './components/ModalFormEdit';

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
    setModal(false)

  }

  const handleSubmit = (data) => {
    setNewEvent(data);
    setModal(false);
    setEvent();
  }

  return (
  
      <div className={styles.app} >

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
            {event === undefined?
              <ModalForm 
                submitForm={handleSubmit}
                setId={setId} 
                prevId={id}
              />
            :
              <ModalFormEdit
                submitForm={handleSubmit}
                event={event}
              />
            }
          </Modal>
        </div> 
      </div>
    
  );
}

export default App;
