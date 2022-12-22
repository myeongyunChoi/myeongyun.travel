import '../css/Schedule.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import ArrowImg from '../image/Arrow.png'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Schedule = () => {
    const selector = useSelector(state => state)
    const navigate = useNavigate();
    const [range, setRange] = useState(["", ""]);

    const Period = (e) => {
        //기간 잡기
        const dateA = new Date(e[0]);
        const dateB = new Date(e[1]);
        const diffMSec = dateA.getTime() - dateB.getTime();
        const diffDate = diffMSec / (24 * 60 * 60 * 1000);
        localStorage.setItem("range", Math.round(Math.abs(diffDate)));
        let copyRange = [...range];
        if (new Date().getTime() < e[0].getTime()) {
            e.forEach((item, idx) => {
                //한국의 offset을 수동으로 추가, 이격 지우기
                let offset = item.getTimezoneOffset() * 60000;
                let date = new Date(item.getTime() - offset);
                copyRange[idx] = date.toISOString().split("T")[0];
            });
            setRange(copyRange);
            localStorage.setItem("startDate", copyRange[0]);
            localStorage.setItem("endDate", copyRange[1]);
        } else {
            localStorage.removeItem("startDate");
            localStorage.removeItem("endDate");
            alert("출발하는 날을 다시 설정해주세요.");
        }
        btnActive();
    }

    const nextPage = () => {
        if (localStorage.getItem("startDate")) {
            navigate("/planner")
        } else {
            alert("여행 기간을 설정해주세요.")
        }
    }

    const btnActive = () => {
        alert("안녕")
    }

    return (
        <div className="date_wrap">
            <h1>언제 떠나시고 싶으신가요?</h1>
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
            <div className="travel_range">
                <ul className="start_date">
                    <li>출발하는 날 : </li>
                    <li>{range[0].split("-")[0]}년</li>
                    <li>{range[0].split("-")[1]}월</li>
                    <li>{range[0].split("-")[2]}일</li>
                </ul>
                <ul className="end_date">
                    <li>돌아오는 날 : </li>
                    <li>{range[1].split("-")[0]}년</li>
                    <li>{range[1].split("-")[1]}월</li>
                    <li>{range[1].split("-")[2]}일</li>
                </ul>
                <div onClick={() => { nextPage() }} className="next_btn2">
                    {
                        localStorage.getItem("startDate") ? <img src={ArrowImg} alt="arrow_icon" className="date_arrow_icon" /> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Schedule;