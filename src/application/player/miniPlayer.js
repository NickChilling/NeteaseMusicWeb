import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import GlobalStyle from '../../assets/global_style.js';
import { getName } from '../../api/utils.js';
import { CSSTransition } from 'react-transition-group';
import ProgressCircle from '../../baseUI/progress-circle';


function MiniPlayer(props) {
    const { song,fullScreen } = props;
    const {toggleFullScreen} = props;
    const miniPlayerRef = useRef();
    let percent = 0.2;
    return (
        <CSSTransition 
            in={!fullScreen}
            timeout={400}
            classNames="mini"
            onEnter={()=>{
                miniPlayerRef.current.style.display="flex";
            }}
            onExited={()=>{
                miniPlayerRef.current.style.display="none";
            }}>
            <MiniPlayerContainer onClick={()=>toggleFullScreen(true)} ref={miniPlayerRef}>
                <div className='icon'>
                    <div className="imgWrapper">
                        <img className="play" src={song.al.picUrl+"?param=40x40"} alt="图片" />
                    </div>
                </div>
                <div className="text">
                    <h2 className="name">{song.name}</h2>
                    <p className="desc">{getName(song.ar)}</p>
                </div>

                <div className="control">
                    <ProgressCircle radius={32} percent={percent}>
                    <i className="iconfont">&#xe6ae;</i>
                    </ProgressCircle>
                </div>
            </MiniPlayerContainer >
        </CSSTransition>
    )
}
export default React.memo(MiniPlayer);

const rotate = keyframes`
 0%{
     transform: rotate(0);
 }
 100%{
     transform: rotate(360deg);
 }`

export const MiniPlayerContainer = styled.div`
    display:flex;
    align-items:center;
    position: fixed;
    left:0;
    bottom:0;
    z-index:1000;
    width: 100%;
    height: 4rem;
    background: ${GlobalStyle['highlight-background-color']};
    &.mini-enter{
        transform:translate3d(0,100%,0);
    }
    &.mini-enter-active{
        transform:translate3d(0,0,0);
        transition:all 0.4s;
    }
    &.mini-exit-active{
        transform:translate3d(0,100%,0);
        transition: all .4s;
    }
    .icon{
        flex:0 0 40px;
        width:40px;
        height:40px;
        padding:0 10px 0 20px;
        .imgWrapper{
            width:100%;
            height:100%;
            img{
                border-radius:50%;
                &.play{
                    animation:${rotate} 10s infinite;
                }
            }
        }
    }
    .text{
        display:flex;
        flex-direction:column;
        justify-content:center;
        flex:1;
        line-height: 20px;
        overflow: hidden;
        .name{
            margin-bottom:2px;
            font-size:${GlobalStyle['font-size-m']};
            color: ${GlobalStyle["font-color-desc"]};
      ${GlobalStyle.noWrap()}
    }
    .desc {
      font-size: ${GlobalStyle["font-size-s"]};
      color: ${GlobalStyle["font-color-desc-v2"]};
      ${GlobalStyle.noWrap()}
    }
  }
  .control {
    flex: 0 0 30px;
    padding: 0 10px;
    .iconfont, .icon-playlist {
      font-size: 30px;
      color: ${GlobalStyle["theme-color"]};
    }
    .icon-mini {
      font-size: 16px;
      position: absolute;
      left: 8px;
      top: 8px;
      &.icon-play {
        left: 9px
      }
    }
  }
    `