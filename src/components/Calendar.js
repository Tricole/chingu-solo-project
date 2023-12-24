import styles from "../styles/calendar.module.css"

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysOfMonth = {Jan: 31 , Feb: 28 , Mar: 31, Apr: 30, May: 31, Jun: 30, Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31};
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//leap year

export const Calendar = () => {

    let newDate = new Date()
    let monthIndex = newDate.getMonth();
    let year = newDate.getFullYear();

    const displayMonths = () => { 
        
        return (
            <span> {months[monthIndex === 0? 11 : monthIndex - 1]} {months[monthIndex]} {months[monthIndex === 11? 0 : monthIndex + 1]}</span>
            )
    }
        
    const displayDaysOfMonth = () => {

        const leapYear = checkLeapYear(year)
            
        let days = 0;
            days = leapYear && months[monthIndex] === "Feb" ?  29 : daysOfMonth[months[monthIndex]];
        
            let output = [];
            for (let day = 1 ; day <= days ; day++)
            output.push(day);

        return output;
    }

    const displayWeek = () => {

        return daysOfWeek;
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




    return ( 
        <div className={styles.main_calendar}>
            {displayMonths()}

            <div className={styles.days_weeks}>
                {displayWeek()}
                <div>
                    {displayDaysOfMonth()}
                </div>
            
            </div>


        </div>
    
    )





}