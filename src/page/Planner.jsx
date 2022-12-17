import { useNavigate } from 'react-router-dom'
import '../css/Planner.css'

const Planner = () => {

    const navigate = useNavigate();
    return (
        <>
            <header>
                <h1 onClick={()=>{navigate("/")}}>MYPLANNER</h1><p>당신의 여행의 길잡이가 되어줄 플래너</p>
            </header>
            <div className="plan_form">
                <div className="plan">
                    <ul className="plan_head">
                        <li><h2>제주도</h2></li>
                        <li><p>JEJU</p></li>
                        <li><h2 className="day">1DAY / 3DAY</h2></li>
                        <li><p>2022. 12. 19 - 2022. 12. 21</p></li>
                    </ul>
                    <div className="hotel">
                        <h3>호텔 / 숙박</h3>
                        <p className="hotel_name"></p>
                    </div>
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
                </div>
                <Search_plan />
            </div>
        </>
    )
}

const Search_plan = () => {
    return (
        <div className="search_board">
            <input type="text" placeholder="검색어를 입력해주세요" />
            <ul className="search_category">
                <li>호텔 / 숙박</li>
                <li>축제 / 행사</li>
                <li>카페 / 음식점</li>
                <li>관광지</li>
            </ul>
            <ui className="search_result">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ui>
        </div>
    )
}

export default Planner;