
import React from "react";
import { useEffect, useState } from "react"
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/event.module.css'

export const Event = ({day, dayOfWeek, date, showModal, handleClose, newEvent, setNewEvents}) => 
{

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const [eventList, setEvents] = useState([]);

    useEffect(() => {
        if(newEvent)
            setEvents([...eventList, newEvent]);
    }, [newEvent]);



    console.log("date is ", date);
    console.log("new event is :")
    console.log(newEvent);

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




    const displayEvents = () => {
        
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
                        displayEvents().length > 0? 
                            displayEvents().map((event) => (
                                
                                <div key={event.title}>
                                    {event.begins}
                                    {event.title}</div>
                            )):
                            "No Appointments"
                    }
                </div>
                <div className={styles.plus_button}>

                    <FontAwesomeIcon icon={solid("plus")} size="xl" style={{color: "#bcbcbc",}} 
                        onClick={()=> showModal(true)}
                    />
                </div>

            </div>
            

            </div>
        
        )
    
}