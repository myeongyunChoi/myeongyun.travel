import style from '../css/Start.module.css';
import { useNavigate } from 'react-router-dom';

const Start = () => {

    const navigate = useNavigate()
    return (
        <div className={style.start_page}>
            <div className={style.title}>
                <h3>제주 여행의 길잡이가 되어줄 플래너</h3>
                <h1>MYPLANNER</h1>
            </div>
            <div onClick={() => { navigate("/area") }} className={style.start_btn}>
                <h3>시작하기</h3>
            </div>
        </div>
    )
}

export default Start;