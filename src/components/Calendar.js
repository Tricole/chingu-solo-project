
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const Calendar = () => {

    let newDate = new Date()
    let monthIndex = newDate.getMonth();
    let year = newDate.getFullYear();

    const displayMonths = () => {

        return (
            <span> {months[monthIndex === 0? 11 : monthIndex - 1]} {months[monthIndex]} {months[monthIndex === 11? 0 : monthIndex + 1]}</span>
        )


    }

    return ( 
        <div>
            {displayMonths()}


        </div>
    
    )





}