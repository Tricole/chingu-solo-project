
import React from "react";
import { useEffect, useState } from "react"
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/event.module.css'

export const Event = ({day, dayOfWeek, date}) => 
{

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const [eventList, setEvents] = useState([]);

    console.log("date is ", date);

    const singleEvent = {
        title: "",
        startDate: 0,
        endDate: 0,
        begins: 0,
        ends: 0,
        people:0,
        location: "",
        description: 0,
    }

    // useEffect = ( () => {
    //     console.log("day came through here: ", day);
    //     console.log("date came through here: ", date);

    // }, [day, date])


    const displayEvents = () => {
        console.log("date is ", date);
        console.log("day is ", day);
        return eventList.filter((event) => event.startDate.toDateString() === date.toDateString());

        // return eventList.filter( (event) => event.startDate === date)

    }

    const addEvent = () => {
        console.log("date is ", date);
        console.log("day is ", day);
        
    }

    const dateConversion = (date) => {
        let tempDate = date.toLocaleDateString(undefined, { month: 'long', day: 'numeric' }); 
        return tempDate.split(" ")[1] + tempDate.split(" ")[0];

    }

    return (

        <div className={styles.events_panel}>
                <h1>Events Section</h1>
                {daysOfWeek[dayOfWeek]}

                {dateConversion(date)}
                <div className={styles.events_box}>
                    {displayEvents().map((event) => (
                        <div key={event.title}>{event.title}</div>
                    ))}
                </div>
                <div className={styles.plus_button}>

                    <FontAwesomeIcon icon={solid("plus")} size="xl" style={{color: "#bcbcbc",}} 
                        onClick={addEvent}
                    />
                </div>
            </div>
        
        )
    
}