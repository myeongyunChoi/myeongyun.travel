import { useEffect } from 'react'
import '../css/Area.css'

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

    useEffect(() => {
        const myKey = "CsJrazW%2BHVR0ukgLenAyy7b0jABGA1JqUjU17oGKB5rc%2FE9Z2Bw3VoD81gT38KclL8HQUVqdw292EjixTM8LYw%3D%3D";
        fetch(`http://apis.data.go.kr/B551011/Durunubi/routeList?serviceKey=${myKey}&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
            })
    }, [])
    return (
        <>
            <div className="search_area">
                <h1>어디로 떠나시나요?</h1>
                <input type="text" />
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