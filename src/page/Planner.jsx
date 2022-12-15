import '../css/Planner.css'

const Planner = () => {

    return (
        <>
            <header>
                <h1>MYPLANNER</h1><p>당신의 여행의 길잡이가 되어줄 플래너</p>
            </header>
            <div className="plan_form">
                <div className="plan"></div>
                <div className="search_board"></div>
            </div>
        </>
    )
}

export default Planner;