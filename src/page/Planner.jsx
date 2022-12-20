import { useNavigate } from 'react-router-dom';
import '../css/Planner.css';
import { useState, useEffect } from 'react';
import SearchPlan from './SearchPlan';
import { useSelector } from 'react-redux';

const Planner = () => {

    const selector = useSelector(state => state);
    const [listData, setList] = useState([])
    const [listEndNum, setEnd] = useState(6);
    const [url, setUrl] = useState(5)
    const [planAmount, setAmount] = useState(0)
    // c1 = 관광지
    // c2 = 쇼핑
    // c3 = 숙박
    // c4 = 음식점
    // c5 = 축제/행사
    // c6 = 테마여행

    useEffect(() => {
        fetch(`https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=&locale=kr&category=c${url}&`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const filtered = data.items.filter(item => {
                    return item.title.includes(selector.userInput.input)
                })
                let copyData = [];
                if (filtered.length === 0 || selector.userInput.input === "") {
                    for (let i = 0; i < listEndNum; i++) {
                        copyData.push(data.items[i])
                    }
                    setAmount(data.items.length);
                } else if (filtered.length > 0) {
                    for (let i = 0; i < listEndNum; i++) {
                        copyData.push(filtered[i])
                    }
                    setAmount(filtered.length);
                }
                setList(copyData);
            })
    }, [url, listEndNum, selector.userInput.input])
    const navigate = useNavigate();
    return (
        <>
            <header>
                <h1 onClick={() => { navigate("/") }}>MYPLANNER</h1><p>당신의 여행의 길잡이가 되어줄 플래너</p>
            </header>
            <div className="plan_form">
                <div className="plan">
                    <ul className="plan_head">
                        <li><h2>제주도</h2></li>
                        <li><p>JEJU</p></li>
                        <li><h2 className="day">1DAY / 3DAY</h2></li>
                        <li>
                            <p>{localStorage.getItem("startDate")} ~ {localStorage.getItem("endDate")}</p>
                        </li>
                    </ul>
                    <div className="festival">
                        <h3>축제 / 행사</h3>
                        <p className="festival_name"></p>
                    </div>
                    <div className="restaurant">
                        <h3>카페 / 음식점</h3>
                        <p className="restaurant_name"></p>
                    </div>
                    <div className="place">
                        <h3>관광지</h3>
                        <p className="place_name"></p>
                    </div>
                    <div className="hotel">
                        <h3>호텔 / 숙박</h3>
                        <p className="hotel_name"></p>
                    </div>
                </div>
                <SearchPlan setUrl={setUrl} listEndNum={listEndNum} planAmount={planAmount} listData={listData} setEnd={setEnd} />
            </div>
        </>
    )
}


export default Planner;