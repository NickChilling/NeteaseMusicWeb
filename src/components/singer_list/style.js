import styled from 'styled-components';
import style from '../../assets/global_style.js';

export const List = styled.div`
    width: 100%;
    display:flex;
    margin: auto;
    flex-direction: column;
    .title{
        margin: 10px 0 10px 10px;
        color: ${style['font-color-desc']};
        font-size: ${style['font-size-s']};
    }`;

export const ListItem = styled.div`
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${style["border-color"]};
    .img-wrapper{
        margin-right: 20px;
        img{
            border-radius: 3px;
            width: 50px;
            height: 50px;
        }
    }
    .name{
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc"]};
        font-weight: 500;
    }`;