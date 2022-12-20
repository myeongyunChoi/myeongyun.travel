import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchName } from '../store';

const SearchPlan = ({ listData, setUrl, listEndNum, setEnd }) => {

    const dispatch = useDispatch();
    const selector = useSelector((state => state))
    const [listHeight, setHeight] = useState(0);
    const nav = (num, e) => {
        setUrl(num);
        e.target.parentNode.childNodes.forEach(item => {
            item.classList.remove("active_text");
        })
        e.target.classList.add("active_text");
    }
    const infinity = (e) => {
        const wraptHeight = e.offsetHeight;
        if (listHeight / 2 < e.scrollTop) {
            if (listEndNum < selector.planAmount - 7) {
                setEnd(listEndNum + 6);
                setHeight(listHeight + wraptHeight * 2);
            } else {
                setEnd(listEndNum + (selector.planAmount - listEndNum));
            }
        }
    }            
    console.log(selector.userInput)

    return (
        <div className="search_board">
            <input onChange={(e) => { dispatch(searchName(e))}} type="text" placeholder="검색어를 입력해주세요" />
            <ul className="search_category">
                <li className="active_text" onClick={(e) => { nav(5, e) }}>축제 / 행사</li>
                <li onClick={(e) => { nav(4, e) }}>카페 / 음식점</li>
                <li onClick={(e) => { nav(1, e) }}>관광지</li>
                <li onClick={(e) => { nav(3, e) }}>호텔 / 숙박</li>
            </ul>
            <ul className="search_result" onScroll={(e) => { infinity(e.target) }}>
                {
                    selector.planData.map((item, idx) => {
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
export default SearchPlan;