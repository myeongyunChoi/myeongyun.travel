import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Area.css';
import ArrowImg from '../image/Arrow.png';
import leftImg from '../image/area_left.jpg';
import rightImg from '../image/area_right.png';

const Area = () => {
    const navigate = useNavigate();
    const [areaName, setAreaName] = useState("");
    // useEffect(() => {
    //     const myKey = "CsJrazW%2BHVR0ukgLenAyy7b0jABGA1JqUjU17oGKB5rc%2FE9Z2Bw3VoD81gT38KclL8HQUVqdw292EjixTM8LYw%3D%3D";
    //     fetch(`http://apis.data.go.kr/B551011/Durunubi/routeList?serviceKey=${myKey}&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data)
    //         })
    // }, [])

    useEffect(() => {
        const myKey = "ad66d7j6pd5i7q0m";
        // c1 = 관광지
        // c2 = 쇼핑
        // c3 = 숙박
        // c4 = 음식점
        // c5 = 축제/행사
        // c6 = 테마여행
        //category=c8&
        fetch(`https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=&locale=kr&`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data.items)
                let test = data.items.filter((item, idx) => { return item.contentscd.label = "쇼핑" })

            })
    }, [])

    const areaSearch = (e) => {
        setAreaName(e.target.value);
    }

    const nextBtn = () => {
        navigate("/schedule");
    }

    return (
        <div className="area_wrap">
            <div className="search_area">
                <h1>제주도, 어디로 떠나고 싶으신가요?</h1>
                {/* <div className='area_input_wrap'>
                    <input type="text" placeholder="가고 싶은 지역을 적어주세요" onChange={e => { areaSearch(e) }} />
                    <span>
                        {areaName === "" ? null : <img onClick={() => { nextBtn() }} src={ArrowImg} alt="" className="arrow_icon" />}
                    </span>
                </div> */}
            </div>
            <ul className="area_list">
                <li onClick={() => { nextBtn() }}>
                    <img src={leftImg} alt="" />
                    <h3>서귀포시</h3>
                </li>
                <li onClick={() => { nextBtn() }}>
                    <img src={rightImg} alt="" />
                    <h3>제주시</h3>
                </li>
            </ul>
        </div>
    )
}

export default Area;