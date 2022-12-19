import { useNavigate } from 'react-router-dom';
import '../css/Planner.css';
import { useState, useEffect } from 'react';

const Planner = () => {

    const [allList, setAll] = useState()
    const [listData, setList] = useState([])
    const [listEndNum, setEnd] = useState(6);
    const [url, setUrl] = useState(5)
    useEffect(() => {
        fetch(`https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=&locale=kr&category=c${url}&`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                let searchTitle = data.items.find((item) => {
                    return item.title == "서귀포 유채꽃 국제걷기대회"
                })
                console.log(searchTitle)
                let copyData = [];
                for (let i = 0; i < listEndNum; i++) {
                    copyData.push(data.items[i])
                }
                setList(copyData);
            })
    }, [url, listEndNum])

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
                <Search_plan listData={listData} setUrl={setUrl} listEndNum={listEndNum} setEnd={setEnd} />
            </div>
        </>
    )
}

const Search_plan = ({ listData, setUrl, listEndNum, setEnd }) => {

    // console.log(qqq)
    const [listHeight, setHeight] = useState(0);
    const [firstScroll, setFirst] = useState(0);
    const nav = (num) => {
        // setEnd( listEndNum - listEndNum + 6)
        setUrl(num)
    }
    const infinity = (e) => {
        const wraptHeight = e.offsetHeight;
        if (wraptHeight / 2 < e.scrollTop) {
            if (listHeight / 2 < e.scrollTop) {
                if (listEndNum <= 93) {
                    setEnd(listEndNum + 6);
                    setHeight(listHeight + wraptHeight * 3);
                }
            }
        }
    }

    return (
        <div className="search_board">
            <input type="text" placeholder="검색어를 입력해주세요" />
            <ul className="search_category">
                <li onClick={() => { nav(5) }}>축제 / 행사</li>
                <li onClick={() => { nav(4) }}>카페 / 음식점</li>
                <li onClick={() => { nav(1) }}>관광지</li>
                <li onClick={() => { nav(3) }}>호텔 / 숙박</li>
            </ul>
            <ul className="search_result" onScroll={(e) => { infinity(e.target) }}>
                {
                    listData.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <img className="hotel_img" src={item.repPhoto.photoid.thumbnailpath} alt="hotel img" />
                                <ul className="text_box">
                                    <li><h4>{item.title}</h4></li>
                                    <li><p>{item.introduction}</p></li>
                                    <li><p>{item.address}</p></li>
                                    <li><p>{item.phoneno}</p></li>
                                    <li className="plus_btn"><span>추가하기</span></li>
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Planner;