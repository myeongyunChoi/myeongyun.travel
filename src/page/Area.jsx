import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Area.css'
import ArrowImg from '../image/Arrow.png'

const Area = () => {
    const data = [
        {
            name: "제주도",
            id: 0
        },
        {
            name: "제주도",
            id: 1
        },
        {
            name: "제주도",
            id: 2
        },
        {
            name: "제주도",
            id: 3
        },
        {
            name: "제주도",
            id: 4
        },
        {
            name: "제주도",
            id: 5
        },
    ]

    const navigate = useNavigate();
    const [areaName, setAreaName] = useState("");
    console.log(areaName)
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

    const areaSearch = (e) => {
        setAreaName(e.target.value);
    }

    const nextBtn = () =>{
        navigate("/schedule");
    }

    return (
        <>
            <div className="search_area">
                <h1>어디로 떠나시나요?</h1>
                <div className='area_input_wrap'>
                    <input type="text" placeholder="가고 싶은 지역을 적어주세요" onChange={ e => { areaSearch(e) }} />
                    <span>
                        {areaName === "" ? null : <img onClick={() => { nextBtn() }} src={ArrowImg} alt="" className="arrow_icon" />}
                    </span>
                </div>
            </div>
            <ul className="area_list">
                {
                    data.map(item => {
                        return (
                            <li key={item.id}>{item.id}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Area;