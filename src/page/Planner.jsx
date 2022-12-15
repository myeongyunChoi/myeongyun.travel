import '../css/Planner.css'

const Planner = () => {

    return (
        <>
            <header>
                <h1>MYPLANNER</h1><p>당신의 여행의 길잡이가 되어줄 플래너</p>
            </header>
            <div className="plan_form">
                <div className="plan">
                    <ul className="plan_head">
                        <li><h2>제주도</h2></li>
                        <li><p>JEJU</p></li>
                        <li><h2 className="day">1DAY / 3DAY</h2></li>
                        <li><p>2022. 12. 19 - 2022. 12. 21</p></li>
                    </ul>
                </div>
                <div className="search_board"></div>
            </div>
        </>
    )
}

export default Planner;