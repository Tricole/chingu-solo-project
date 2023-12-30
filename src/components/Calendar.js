import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Event } from './Event';

import styles from "../styles/calendar.module.css"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysOfMonth = {Jan: 31 , Feb: 28 , Mar: 31, Apr: 30, May: 31, Jun: 30, Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31};
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


export const Calendar = ({onDateSelect}) => {

    let newDate = new Date();
    const monthIndex = newDate.getMonth();
    let year = newDate.getFullYear();

    const [prevDays, setPrevDays] = useState([]);
    const [days, setDays] = useState([]);   
    const [nextDays, setNextDays] = useState([]);
    const [currMonth, setMonth] = useState(monthIndex);
    const [currYear, setYear] = useState(year)


    useEffect(() => {

        const leapYear = checkLeapYear(currYear);
        const indexFirstDayOfMonth = new Date (`${months[currMonth]} 1 ${currYear}`).getDay();
        
        let prevMonthDays = daysOfPrevMonth();
        let prevMonthDaysArr = [...Array(prevMonthDays + 1).keys()].slice(prevMonthDays - indexFirstDayOfMonth + 1 );
        
        let currMonthDays = leapYear && months[currMonth] === "Feb" ? 29 : daysOfMonth[months[currMonth]];
        let currMonthDaysArr = [...Array(currMonthDays + 1).keys()].slice(1);
        
        let nextMonthDays = 42 - (indexFirstDayOfMonth) - currMonthDays;
        let nextMonthDaysArr = [...Array(nextMonthDays + 1).keys()].slice(1);

        setPrevDays(prevMonthDaysArr);
        setDays(currMonthDaysArr);
        setNextDays(nextMonthDaysArr);

    }, [monthIndex, year, currMonth, currYear]);


    const displayMonths = () => { 
        
        return (
            <span> {months[currMonth === 0? 11 : currMonth - 1]} {months[currMonth]} {months[currMonth === 11? 0 : currMonth + 1]}</span>
            )
    }


    const daysOfPrevMonth = () => {

        const leapYear = checkLeapYear(currYear)
        let totalDays = 0;
        
        switch (currMonth) {
            case 0:
                totalDays = daysOfMonth[months[11]];
                break;
            default:
                totalDays = leapYear && months[currMonth - 1] === "Feb"  
                    ? 29 :
                    daysOfMonth[months[currMonth - 1]];
        }

        return totalDays;

    }


    const toPrevMonth = () => {
        
        if(currMonth === 0){
            setMonth(11);
            setYear(currYear - 1);
        }
        else
          setMonth(currMonth - 1);

        console.log(currMonth);
    };

    const toNextMonth = () => {
        
        if (currMonth === 11){
            setMonth(0);
            setYear(currYear + 1);
        }else
            setMonth(currMonth + 1);

    };

    return ( 
        <div className={styles.main_calendar}>
            {displayMonths()}
            <div className={styles.days_weeks_wrapper}>

                <FontAwesomeIcon 
                    icon={solid("arrow-left")} 
                    size="xl" 
                    style={{ color: "#bcbcbc"}} 
                    // className={styles.arrows}
                    onClick={toPrevMonth}
                />


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
                        <div className={styles.grid_curr_month}
                            
                            onClick={() => {
                                let date = new Date(`${currMonth + 1} ${day} ${currYear}`);
               
                                return onDateSelect
                                    ({   
                                        day:{day},
                                        date: date,
                                        dayOfWeek: (date).getDay() 
                                    })
                            } 
                            }>    
                            {day} 
   
                        </div>
                    )}
                
                    {nextDays.map( day =>
                        <div className={styles.grid_other_month}>
                            {day} 
                        </div>
                    )}
                </div>

                <FontAwesomeIcon 
                    icon={solid("arrow-right")} 
                    size="xl" 
                    style={{color: "#bcbcbc"}} 
                    // className={styles.arrows}
                    onClick={toNextMonth}
                />
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