import styled from 'styled-components';
import global_style from '../../assets/global_style'

export const SliderContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: auto;
    background: white;
    .before{
        position:absolute;
        top: -20em ;
        height: 30em;
        width: 100%;
        background: ${global_style['theme-color']};

    }
    .slider-container{
        position: relative;
        width: 98%;
        height: 20rem;
        overflow:hidden;
        margin:auto;
        border-radius: 6px;
        .slider-nav{
            position: absolute;
            display: block;
            padding : 0 0 2% ;
            width: 100%;
            height: 100%;
        }
        .swiper-pagination-bullet-active{
            background: ${global_style['theme-color']};
        }
    }
    `