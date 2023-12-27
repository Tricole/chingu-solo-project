
import { useEffect, useState } from "react"

export const Event = ({date, dayOfWeek }) => {

    const [eventList, setEvents] = useState([]);


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

    useEffect = ( () => {


    }, [])


    const displayEvents = () => {

        return eventList.filter( (event) => event.startDate === date)

    }

    return (

            <div>
                {dayOfWeek}
                {date.getMonth()} {date.getDate()}

                <div className="eventsBox">
                    {displayEvents.map( (event) => {
                        <div> {event.title}  {event.begins} </div>
                    })}

                </div>


            </div>
        
        )
    
}