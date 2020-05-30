import styled from 'styled-components';
import globalStyle from '../../assets/global_style';
export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    background: ${globalStyle['highlight-background-color']};
    z-index: 1000;
    transform-origin: right bottom;
    &.fly-enter, &.fly-appear{
        transform: rotateZ(30deg) translate3d(100%,0,0);
    }
    &.fly-enter-active,&.fly-appear{
        transition: transform .3s;
        transform: rotateZ(0deg) translate3d(0,0,0);
    }
    &.fly-exit{
        transform: rotateZ(0deg) translate3d(0,0,0);
    }
    &.fly-exit-active{
        transition: transform .3s;
        transform: rotateZ(30deg) translate3d(100%,0,0);
    }
    
    `
export const DescContainer = styled.div`
    display:flex;
    display: fixed;
    width: 100%;
    height: 16em;
    flex-direction: row;
    align-items: center;
    position: relative;
    .background{
        z-index: -1;
        background: url(${props => props.background}) no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
        position: absolute;
        width: 100%;
        height: 100%;
        filter: blur(20px);
        .filter{
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(7,17,27,0.2);
        }
    }
    .img-container{
        width: 8rem;
        height: 8rem;
        position: relative;
        padding-left: 1rem;
        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
        .play-count{
            position: absolute;
            right: 0.2rem;
            top: -0.4rem;
            font-size: ${globalStyle['font-size-s']};
            line-height: 2rem;
            color: ${globalStyle['font-color-light']};
            .count{
                vertical-align: top;
            }
        }
    }
    .content-container{
        display: flex;
        flex-direction: column;
        height: 8rem;
        color: ${globalStyle['font-color-light']};
        align-items: center;
        justify-content: space-around;
        h2{
            margin-left: 0.5rem;
        }
        .person{
        width: 100%;
        height: 100%;

        font-size: ${globalStyle['font-size-m']};
        color: ${globalStyle['font-color-desc-v2']};
        display: flex;
        margin-left: 1rem;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        .avatar{
            width:  1rem;
            height: 1rem;
            border-radius: 1rem;
        }
        .nickname{
            margin-left: 0.5rem;
        }
    }
    }
    `
export const MenuContainer = styled.div`
    display: flex;
    direction: row;
    justify-items: space-around;
    margin-top: -4rem;
    color: ${globalStyle['font-color-light']};
    font-weight: 100;
    .menu-item{
        display: flex;
        flex-direction: column;
        width: 25vw;
        height: 3rem;
        justify-content: space-around;
        align-items: center;
    }
    [class^=iconfont]{
        font-size: 1.5rem;
    }

    `
export const SongContainer = styled.div`
    .header{
        font-size: 1rem;
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: stretch;
        justify-items: space-between;
        margin-top: 1rem;
        height: 3rem;
        line-height:3rem;
        .play-header{
            flex: 8;
            display: flex;
            text-align: left;
            flex-direction: row;
            justify-items: center;
            border-bottom: 1px solid ${globalStyle["border-color"]};
            font-size: ${globalStyle['font-size-ll']};
            .iconfont-play{
                font-size: 2rem;
                margin-right: 1rem;
            }
            .hint{
                font-size: ${globalStyle['font-size-s']};
                color: ${globalStyle["font-color-desc"]}
            }
        }
        .favorite-button{
            flex: 3;
            text-align: center;
            background-color: ${globalStyle["theme-color"]};
            border-radius: 5px;
            color: ${globalStyle["font-color-light"]};
            font-size: ${globalStyle['font-size-m']}
        }

    }
    .song-list{
        >li{
            display: flex;
            height: 4rem;
            align-items: center;
            
            .index{
                flex-basis: 4rem;
                width: 4rem;
                height: 4rem;
                line-height: 4rem;
                text-align: center;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height:100%;
                border-bottom: 1px solid ${globalStyle["border-color"]};
                .info-singer{
                    color: ${globalStyle['font-color-desc-v2']};
                    font-size: ${globalStyle['font-size-s']};
                }
            }
        }
    }
`