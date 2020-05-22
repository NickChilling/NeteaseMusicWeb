//作为一个通用组件，scroll 组件在业务中会被经常取到原生 DOM 对象，而函数式组件天生不具备被上层组件直接调用 ref 的条件，因此需要用 React 当中一些特殊的方式来处理，即使用 forwardRef 进行包裹

import React, { forwardRef, useEffect, useImperativeHandle,useState,useRef } from "react";
import BScroll from 'better-scroll';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from '../../baseUI/loading/index';
import LoadingV2 from '../../baseUI/loading-v2/index';

const ScrollContainer = styled.div`
    width: 100%;
    height:100%;
    white-space: nowrap;
    overflow:  hidden;`

const PullUpLoading = styled.div`
    position: absolute;
    left: 0 ;
    right : 0;
    width: 60px;
    height: 60px;
    margin: auto;
    z-index: 100;
    `;
const PullDownLoading = styled.div` 
    position: absolute;
    left: 0 ;
    right: 0;
    top: 0px;
    height: 30px;
    margin: auto;
    z-index: 100;
    `;
export const Scroll = forwardRef((props,ref)=>{
    const [bScroll, setBScroll] = useState();
    const scrollContainerRef = useRef();
    const {direction,click,refresh,pullUpLoading,pullDownLoading,bounceTop,bounceBottom} = props;
    const {pullUp,pullDown,onScroll} = props;
    const PuLLUpDisplayStyle = pullUpLoading?{display:""}:{display:"none"};
    const PullDownDisplayStyle = pullDownLoading?{display:""}:{display:"none"};

    //初始化scroll 
    useEffect(()=>{
        const scroll = new BScroll(scrollContainerRef.current,{
            scrollX:direction==="horizental",
            scrollY:direction === "vertical",
            probeType:3,
            click:click,
            mouseWheel:true,
            bounce:{
                top:bounceTop,
                bottom: bounceBottom
            }
        });
        setBScroll(scroll);
        return ()=>{
            setBScroll(null);
        }
    },[]);
    // 监听onScroll
    useEffect(()=>{
        if(!bScroll || !onScroll) return;
        bScroll.on("scroll",(scroll)=>{
            onScroll(scroll);
        })
        return ()=>{
            bScroll.off('scroll');
        }
    },[onScroll,bScroll]);// 当onScroll  bScroll 修改的时候重新渲染

        // 监听是否滑到了底部
    useEffect(()=>{
        if(!bScroll || !pullUp) return;
        bScroll.on("scrollEnd",()=>{
            console.log("scroolEnd");
            if(bScroll.y <= bScroll.maxScrollY +100){
                pullUp();
            }
        });
        return ()=>{
            bScroll.off("scrollEnd");
        }
    },[pullUp,bScroll]);
    

    // touchEnd 用户滑底反弹；
    useEffect(()=>{
        if(!bScroll || !pullDown) return ;
        bScroll.on('touchEnd',(pos)=>{
            if(pos.y > 50){
                console.log("touchend");
                pullDown();
            }
        });
        return ()=>{
            bScroll.off('touchEnd');
        }
    },[pullDown,bScroll]);

    useEffect(()=>{
        if(refresh && bScroll){
            bScroll.refresh();
        }
    });

        // 将刷新方法暴露出去
    useImperativeHandle(ref,()=>({
        refresh(){
            if(bScroll){
                bScroll.refresh();
                bScroll.scrollTo(0,0);
            }
        },
        getBScroll(){
            if(bScroll){
                return bScroll;
            }
        }
    }));
    return (
        <ScrollContainer ref={scrollContainerRef}>
            {props.children}
            <PullUpLoading style={PuLLUpDisplayStyle}><Loading></Loading></PullUpLoading>
            <PullDownLoading style={PullDownDisplayStyle}><LoadingV2></LoadingV2></PullDownLoading>
        </ScrollContainer>
    );
})

Scroll.propTypes = {
    direction: PropTypes.oneOf(['vertical','horizental']),
    click:PropTypes.bool,
    refresh:PropTypes.bool,
    OnScroll: PropTypes.func,
    pullUp:PropTypes.func,
    pullDown:PropTypes.func,
    pullUpLoading:PropTypes.bool,
    pullDownLoading:PropTypes.bool,
    bounceTop:PropTypes.bool,
    bounceBottom:PropTypes.bool
};
Scroll.defaultProps = {
    direction:"vertical",
    click:true,
    onScoll:null,
    refresh:true,
    pullUpLoading:false,
    pullDownLoading:false,
    pullUp:null,
    pullDown:null,
    bounceTop:true,
    bounceBottom:true
};
