import React from 'react';
import styled from 'styled-components';
import globalStyle from '../../assets/global_style.js';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div` 
    position: fixed;
    padding: 0.2em 0.3em;
    height: 2em;
    width: 100%;
    z-index: 100;
    display: flex;
    color:${globalStyle['font-color-light']};
    .back{
        margin-right: 5px;
        font-size: 20px;
        width: 20px;
    }
    >h1{
        font-size: ${globalStyle['font-size-l']};
        font-weight: 700;
        padding-left: 0.5em;
    }
` 

const Header = React.forwardRef(function(props,ref){
    const {handleClick, title} = props;

    return (
        <HeaderContainer ref={ref}>
            <i className="iconfont-back" onClick={handleClick}>&#xe755;</i>
            <h1>{title}</h1>
        </HeaderContainer>
    )
})
Header.defaultProps ={
    handleClick: ()=>{},
    title:"标题"
}
Header.propTypes = {
    handleClick: PropTypes.func,
    title: PropTypes.string
}

export default React.memo(Header);