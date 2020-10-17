import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import style from '../../assets/global_style.js';

const ProgressBarWrapper = styled.div`
    height: 30px;
    .bar-inner{
        position: relative;
        top:13px;
        height:4px;
        background:rgba(0,0,0,.3);
        .progress{
            position: absolute;
            height:100%;
            background:${style['theme-color']};
        }
        .progress-btn-wrapper{
            position:absolute;
            left:-15px;
            top:-13px;
            width:30px;
            &:hover{
                    transform: scale(1.1);
                    transition:transform .1s;
                }
            .progress-btn{
                position:relative;
                top: 7px;
                left: 7px;
                box-sizing:border-box;
                width:16px;
                height: 16px;
                border: 3px solid ${style["border-color"]};
                border-radius:50%;
                background:${style["theme-color"]};

            }
        }
    }
`
function ProgressBar(props) {
    console.log("progresbar");
    const progressBar = useRef();
    const progress = useRef();
    const progressBtn = useRef();
    const [touch, setTouch] = useState({});
    const progressBtnWidth = 16;

    const _offset = (offsetWidth) => {
        progress.current.style.width = `${offsetWidth}px`;
        progressBtn.current.style.transform = `translate3d(${offsetWidth}px,0,0)`
    }
    const progressTouchStart = (e) => {
        const startTouch = {};
        startTouch.initiated = true;
        startTouch.startX = e.screenX; // 开始时横坐标；’
        startTouch.left = progress.current.clientWidth; // 当前progress长度
        setTouch(startTouch);
    }
    const progressTouchMove = (e) => {
        if (!touch.initiated) return;
        const deltaX = e.screenX - touch.startX; // 滑动的x-开始的x
        const barWidth = progressBar.current.clientWidth - progressBtnWidth;
        const offsetWidth = Math.min(Math.max(0, touch.left + deltaX), barWidth); // 与0取max 确保不会超出左边界， 再取min确保不会超出右边界。
        _offset(offsetWidth);
    }

    const progressTouchEnd = (e) => {
        const endTouch = JSON.parse(JSON.stringify(touch));
        endTouch.initiated = false;
        setTouch(endTouch);
    }

    const handleClick = (e)=>{
        const rect = progressBar.current.getBoundingClientRect();
        const offsetWidth = e.pageX-rect.left;
        _offset(offsetWidth);
    }
    return (
        <ProgressBarWrapper>
            <div className="bar-inner" ref={progressBar} onClick={handleClick}>
                <div className="progress" ref={progress}></div>
                <div className="progress-btn-wrapper"
                    ref={progressBtn}
                    onDragStart={progressTouchStart}
                    onDrag={progressTouchMove}
                    onDragEnd={progressTouchEnd}>
                    <div className="progress-btn"></div>
                </div>
            </div>
        </ProgressBarWrapper>
    )
}
export default React.memo(ProgressBar);