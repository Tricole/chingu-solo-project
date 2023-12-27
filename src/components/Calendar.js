import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

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


    const [prevDays, setPrevDays] = useState([])
    const [days, setDays] = useState([]);
    const [nextDays, setNextDays] = useState([])


    useEffect(() => {

        const leapYear = checkLeapYear(year);
        
        let prevMonthDays = daysOfPrevMonth();
        let prevMonthDaysArr = [...Array(prevMonthDays + 1).keys()].slice(prevMonthDays - indexFirstDayOfMonth + 1 );
        
        let currMonthDays = leapYear && months[monthIndex] === "Feb" ? 29 : daysOfMonth[months[monthIndex]];
        let currMonthDaysArr = [...Array(currMonthDays + 1).keys()].slice(1);
        
        let nextMonthDays = 42 - (indexFirstDayOfMonth) - currMonthDays;
        let nextMonthDaysArr = [...Array(nextMonthDays + 1).keys()].slice(1);


        setPrevDays(prevMonthDaysArr);
        setDays(currMonthDaysArr);
        setNextDays(nextMonthDaysArr);

    }, [monthIndex, year]);

    const displayMonths = () => { 
        
        return (
            <span> {months[monthIndex === 0? 11 : monthIndex - 1]} {months[monthIndex]} {months[monthIndex === 11? 0 : monthIndex + 1]}</span>
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

    return ( 
        <div className={styles.main_calendar}>
            {displayMonths()}
            <div className={styles.days_weeks_wrapper}>

                <FontAwesomeIcon icon={solid("arrow-left")} />


                <div className={styles.days_weeks}>
                    
                    {daysOfWeek.map (weekDay => 
                        <div className={styles.grid_curr_Month}>
                        {weekDay} 
                    </div>
                    )}

                    {prevDays.map( day =>
                        <div className={styles.grid_other_month}>
                            {day} 
                        </div>
                    )}

                    {days.map( day => 
                        <div className={styles.grid_curr_month}>
                            {day} 
                        </div>
                    )}
                
                    {nextDays.map( day =>
                        <div className={styles.grid_other_month}>
                            {day} 
                        </div>
                    )}
                </div>

                <FontAwesomeIcon icon={solid("arrow-right")} />
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