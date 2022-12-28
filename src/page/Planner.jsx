import { useNavigate } from 'react-router-dom';
import '../css/Planner.css';
import { useState, useEffect } from 'react';
import SearchPlan from './SearchPlan';
import { useSelector, useDispatch } from 'react-redux';
import { addList, deletePlan } from '../store';
import ListDelete from '../image/delete.png'
import ArrowImg from '../image/Arrow.png'
const Planner = () => {
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SameSite=None; Secure";

    const selector = useSelector(state => state);
    const dispatch = useDispatch()
    const [listData, setList] = useState([])
    const [listEndNum, setEnd] = useState(6);
    const [url, setUrl] = useState(5);
    const [planAmount, setAmount] = useState(0);
    const navigate = useNavigate();

    if (!localStorage.getItem("startDate")) {
        navigate("/schedule");
    }else if(!localStorage.getItem("area")){
        navigate("/area");
    }

    useEffect(() => {
        fetch(`https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=&locale=kr&category=c${url}&`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const setArea = data.items.filter(item => {
                    return item.region1cd.label.includes(localStorage.getItem("area"));
                })
                const filtered = setArea.filter(item => {
                    return item.title.includes(selector.userInput.input);
                })
                // let filter = filtered? filtered: setArea 
                let copyData = [];
                if (filtered.length === 0) {
                    setEnd(setArea.length);
                    for (let i = 0; i < listEndNum; i++) {
                        copyData.push(setArea[i])
                    }
                    setAmount(setArea.length);
                } else if (filtered.length > 0) {
                    setEnd(filtered.length);
                    for (let i = 0; i < listEndNum; i++) {
                        copyData.push(filtered[i])
                    }
                    setAmount(filtered.length);
                    // console.log(`필터${filtered.length}`)
                    // console.log(`넘버${listEndNum}`)
                    // console.log(planAmount)
                    //setAmount 랜더링되게 변경
                }
                setList(copyData);
            })
    }, [url, listEndNum, selector.userInput.input])

    const plusList = (e) => {
        dispatch(addList(e))
    }

    const planDelete = (item2, item, idx) => {
        let directArr = []
        directArr.push(item2)
        directArr.push(item.label)
        directArr.push(idx)
        dispatch(deletePlan(directArr))
    }
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
                        <li><h2 className="day"> {localStorage.getItem("range")}DAY</h2></li>
                        <li>
                            <p onClick={() => { navigate("/schedule") }}>{localStorage.getItem("startDate")} ~ {localStorage.getItem("endDate")}</p>
                        </li>
                    </ul>
                    {
                        selector.myPlan.map((item, idx) => {
                            return (
                                <div className={item.category} key={idx} >
                                    <div className="plan_get_head">
                                        <h3>{item.label}</h3>
                                        <span onClick={() => { plusList(item) }}>+</span>
                                    </div>
                                    {item.guideText.map((item2, idx2) => {
                                        return (
                                            <p key={idx2} className="festival_name">
                                                {item2}
                                                <img onClick={() => { planDelete(item2, item, idx) }} className="deleteBtn" src={ListDelete} alt="삭제버튼" />
                                            </p>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
                <SearchPlan setUrl={setUrl} listEndNum={listEndNum} planAmount={planAmount} listData={listData} setEnd={setEnd} />
            </div>
        </>
    )
}

export default Planner;