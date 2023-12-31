
import React from "react";
import { useEffect, useState } from "react"
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/event.module.css'

export const Event = ({day, dayOfWeek, date, showModal, handleClose, newOrUpdatedEvent, updatedEvent, eventToUpdate }) => 
{

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const [eventList, setEvents] = useState([]);

    useEffect(() => {
        if(newOrUpdatedEvent){
            
            let updatedList = eventList.filter( (event) => event.id !== newOrUpdatedEvent.id);

            if (updatedList.length === eventList.length)
                setEvents([...eventList, newOrUpdatedEvent]);

            else
                setEvents([...updatedList, newOrUpdatedEvent]);


        }

    }, [newOrUpdatedEvent]);



    console.log("date is ", date);
    console.log("new event is :")
    console.log(newOrUpdatedEvent);

    const singleEvent = {
        title: "",
        startDate: 0,
        endDate: 0,
        begins: 0,
        ends: 0,
        people:0,
        location: "",
        description: 0,
    };


    const editEvent = (event) => {
        //for edit event make the css conditional, so that in one case it updates 
        //with button "Add event" and the other is just save

        showModal(true);
        console.log("I am in the edit Event function");
        console.log("event to be updated is: ")
        console.log(event);
        eventToUpdate(event);

        console.log("button test");
    }

    const deleteEvent = (removedEventId) => {

        let newEventList = eventList.filter((event) => 
            event.id !== removedEventId
        )
        setEvents(newEventList);
    }


    return (

        <div className={styles.events_panel} >
            <div className={styles.overlay}></div>
            <div className={styles.content}>

                {daysOfWeek[dayOfWeek]}
                <p>
                    {dateConversion(date)}
                </p>

                <div className={styles.events_box}>  
                    {  
                        displayEvents(date, eventList).length > 0? 
                            displayEvents(date, eventList).map((event) => (
                                <>
                                    
                                    <div key={event.title} className={styles.singleEvent}>
                                        <span>
                                            {event.begins}
                                            {event.title}
                                        <span className={styles.icons}>
                                            <FontAwesomeIcon icon={solid("pen-to-square")} className={styles.edit}
                                                onClick={()=>editEvent(event)}
                                                />
                                            <FontAwesomeIcon icon={solid("trash")} className={styles.delete}
                                                onClick={()=>deleteEvent(event.id)}
                                            />                                            
                                        </span>    

                                        </span>
                                    </div>
                                </>


                            )):
                            "No Appointments"
                    }
                </div>
                <div className={styles.vertical_line}></div>
                <div className={styles.plus_button}>

                    <FontAwesomeIcon icon={solid("plus")} size="2xl" style={{color: "#cbd7ec",}} 
                        onClick={()=> showModal(true)}
                    />
                </div>

            </div>
            

            </div>
        
        )
    
}

const displayEvents = (date, eventList) => {
        
    const formattedDate = date.toISOString().split('T')[0];
    if (eventList)
        return eventList.filter((event) => event.start_date === formattedDate);
    else
        return "No Appointments"

}

const dateConversion = (date) => {
    let tempDate = date.toLocaleDateString(undefined, { month: 'long', day: 'numeric' }); 
    return tempDate.split(" ")[1].toUpperCase() + " " + tempDate.split(" ")[0];

}