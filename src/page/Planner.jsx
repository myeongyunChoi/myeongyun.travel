import { useNavigate } from 'react-router-dom';
import '../css/Planner.css';
import { useState, useEffect } from 'react';

const Planner = () => {

    const [allList, setAll] = useState()
    const [listData, setList] = useState([])
    const [listStartNum, setStart] = useState(2);
    const [listEndNum, setEnd] = useState(6);
    const [url, setUrl] = useState(5)

    useEffect(() => {
        const myKey = "ad66d7j6pd5i7q0m";
        let c1 = "관광지", c2 = "쇼핑", c3 = "숙박", c4 = "음식점", c5 = "축제/행사";
        //category=c8&
        fetch(`https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=&locale=kr&category=c${url}&`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                let copyData = [...listData];
                for (let i = listStartNum; i < listEndNum; i++) {
                    copyData.push(data.items[i])
                }
                setList(copyData);
                console.log(url)
            })
            console.log(url)
    }, [url])

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
                        <li><p>2022. 12. 19 - 2022. 12. 21</p></li>
                    </ul>
                    <div className="festival">
                        <h3>축제 / 행사</h3>
                        <p className="festival_name"></p>
                    </div>
                    <div className="restaurant">
                        <h3 onClick={()=>{setUrl(4)}}>카페 / 음식점</h3>
                        <p className="restaurant_name"></p>
                    </div>
                    <div className="place">
                        <h3 onClick={()=>{setUrl(1)}}>관광지</h3>
                        <p className="place_name"></p>
                    </div>
                    <div className="hotel">
                        <h3 onClick={()=>{setUrl(2)}}>호텔 / 숙박</h3>
                        <p className="hotel_name"></p>
                    </div>
                </div>
                <Search_plan listData={listData} setUrl={setUrl}/>
            </div>
        </>
    )
}

const Search_plan = ({ listData, setUrl }) => {
    return (
        <div className="search_board">
            <input type="text" placeholder="검색어를 입력해주세요" />
            <ul className="search_category">
                <li onClick={()=>{setUrl(5)}}>축제 / 행사</li>
                <li onClick={()=>{setUrl(4)}}>카페 / 음식점</li>
                <li onClick={()=>{setUrl(1)}}>관광지</li>
                <li onClick={()=>{setUrl(2)}}>호텔 / 숙박</li>
            </ul>
            <ul className="search_result">
                {
                    listData.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <img className="hotel_img" src={item.repPhoto.photoid.thumbnailpath} alt="hotel img" />
                                <h4>{item.title}</h4> 
                            </li>
                            // <img src={item.repPhoto.photoId?.imgpath} alt="" />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Planner;