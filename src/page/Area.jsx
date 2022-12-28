import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Area.css';
import ArrowImg from '../image/Arrow.png';
import leftImg from '../image/area_left.jpg';
import rightImg from '../image/area_right.png';
import { useDispatch, useSelector } from 'react-redux';
import { areaChoice } from '../store';

const Area = () => {
    const navigate = useNavigate();
    const selector = useSelector(state => state)
    const dispatch = useDispatch();
    const areaName = ["서귀포시", "제주시"]
    const nextBtn = (num) => {
        localStorage.setItem("area",areaName[num])
        dispatch(areaChoice(areaName[num]))
        navigate("/schedule");
    }
  
    return (
        <div className="area_wrap">
            <div className="search_area">
                <h1>제주도, 어디로 떠나고 싶으신가요?</h1>
            </div>
            <ul className="area_list">
                <li onClick={() => { nextBtn(0) }}>
                    <img src={leftImg} alt="area img" />
                    <h3>서귀포시</h3>
                </li>
                <li onClick={() => { nextBtn(1) }}>
                    <img src={rightImg} alt="area img" />
                    <h3>제주시</h3>
                </li>
            </ul>
        </div>
    )
}

export default Area;