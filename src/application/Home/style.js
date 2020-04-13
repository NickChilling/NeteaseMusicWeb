import styled from 'styled-components';
import global_style from '../../assets/global_style';

export const Top = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
    background: ${global_style["theme-color"]};
    &>span {
        line-height:40px;
        color: ${global_style['font-color-light']};
        font-size: ${global_style['font-size-ll']};
        &.iconfont{
            font-size: 25px;
        }
    };`
export const Tab = styled.div`
    height: 44px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    background: ${global_style['theme-color']};
    a {
        flex:1;
        padding: 2px 0 ;
        font-size: 14px;
        color: #e4e4e4;
        &.selected{
            span{
                padding: 3px 0 ;
                font-weight: 700;
                color:#f1f1f1;
                border-bottom: 2px solid #f1f1f1;
            }
        }
    }
`
export const TabItem = styled.div`
    height:100%;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    `