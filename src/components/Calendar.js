import React, { useEffect, useState } from 'react';
import styles from "../styles/calendar.module.css"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysOfMonth = {Jan: 31 , Feb: 28 , Mar: 31, Apr: 30, May: 31, Jun: 30, Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31};
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//leap year

export const Calendar = () => {

    const newDate = new Date()
    const monthIndex = newDate.getMonth();
    const year = newDate.getFullYear();
    const indexFirstDayOfMonth = new Date (`${months[monthIndex]} 1 ${year}`).getDay();



    const [days, setDays] = useState([]);


    useEffect(() => {

        const leapYear = checkLeapYear(year);
        
        let prevMonthDays = daysOfPrevMonth();
        let prevMonthDaysArr = [...Array(prevMonthDays + 1).keys()].slice(prevMonthDays - indexFirstDayOfMonth + 1 );
        
        let currMonthDays = leapYear && months[monthIndex] === "Feb" ? 29 : daysOfMonth[months[monthIndex]];
        let currMonthDaysArr = [...Array(currMonthDays + 1).keys()].slice(1);
        
        const indexLastDayOfMonth = new Date (`${months[monthIndex]} ${currMonthDays} ${year}`).getDay();
        console.log(indexLastDayOfMonth);


        let nextMonthDays = 42 - (indexFirstDayOfMonth) - currMonthDays;
        console.log(nextMonthDays)
        let nextMonthDaysArr = [...Array(nextMonthDays + 1).keys()].slice(1);

        setDays( [...prevMonthDaysArr, ...currMonthDaysArr, ...nextMonthDaysArr]);

    }, [monthIndex, year]);

    const displayMonths = () => { 
        
        return (
            <span> {months[monthIndex === 0? 11 : monthIndex - 1]} {months[monthIndex]} {months[monthIndex === 11? 0 : monthIndex + 1]}</span>
            )
    }
        
    const DisplayDaysOfMonth = () => {


        const leapYear = checkLeapYear(year)
        let totalDays = 0;
            totalDays = leapYear && months[monthIndex] === "Feb" ?  29 : daysOfMonth[months[monthIndex]];
            
        // setDays([...Array(totalDays).keys()].slice(1));

        return (
            <div className={styles.days_weeks}>
               
            </div>
        )
    }

    const daysOfPrevMonth = () => {

        const leapYear = checkLeapYear(year)
        let totalDays = 0;
        
        switch (monthIndex) {
            case 0:
                totalDays = daysOfMonth[months[11]];
                break;
            default:
                totalDays = leapYear && months[monthIndex - 1] === "Feb" ?  29 : daysOfMonth[months[monthIndex - 1]];
        }

        return totalDays;

    }


    const displayWeek = () => {

        return daysOfWeek;
    }


    return ( 
        <div className={styles.main_calendar}>
            {displayMonths()}

            <div className={styles.days_weeks}>
                
                {daysOfWeek.map (weekDay => 
                    <div className={styles.grid_item}>
                    {weekDay} 
                </div>
                )}

                {days.map( day => 
                    <div className={styles.grid_item}>
                        {day} 
                    </div>
                )}
            
            </div>

        </div>
    )
}


const checkLeapYear = (year) => {

    let leapYear = false;
    year % 100 === 0?   
        (year % 400 ?
            leapYear = true :
            leapYear = false)
        :(year % 4 === 0?
            leapYear = true :
            leapYear = false
        )
    return leapYear;
}