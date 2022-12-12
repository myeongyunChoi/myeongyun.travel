import style from '../css/Start.module.css';

const Start = () => {
    return (
        <div className={style.start_page}>
            <div className={style.title}>
                <h3>당신의 여행의 길잡이가 되어줄 플래너</h3>
                <h1>MYPLANNER</h1>
            </div>
            <div  onClick={()=>{alert("시작 버튼")}} className={style.start_btn}>
                <h3>시작하기</h3>
            </div>
        </div>
    )
}

export default Start;