import '../css/Date.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';


const Date = (e) => {
    const [value, setValue] = useState("");

    
    const Period = (e) => {
        // startDateAction({
        //     data: moment(e[0]).format('YYYY/MM/DD'),
        // })
        console.log(e[0].toISOString().split("T")[0])
        console.log(e[0])
    }

    // const test = (e) =>{
    //     console.log(e.target.value)
    // } 

    return (
        <div className="date_wrap">
            <h1>언제</h1>
            <Calendar
                onChange={(e) => { Period(e) }}
                formatDay={(locale, date) =>
                    date.toLocaleString('en', { day: 'numeric' })
                }
                selectRange={true}
                // nextLabel={<NextIcon />}
                // prevLabel={<PrevIcon />}
                next2Label={null}
                prev2Label={null}
            />
        </div>
    )
}

export default Date;