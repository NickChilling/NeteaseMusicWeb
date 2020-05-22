import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import { Scroll } from '../../components/scroll';
import { PropTypes } from 'prop-types';
import style from '../../assets/global_style.js';

function Horizen(props) {
    const { list, oldVal, title } = props;
    const { handleClick } = props;

    return (
        <Scroll direction="horizental">
            <List>
                <span>{title}</span>
                {
                    list.map((item) => {
                        return (
                            <ListItem
                                key={item.key}
                                className={`${oldVal === item.key ? 'selected' : ''}`}
                                onClick={() => handleClick(item.key)}>
                                {item.name}
                            </ListItem>
                        )
                    })
                }
            </List>
        </Scroll>
    )
}

Horizen.defaultProps = {
    list: [],
    oldVal: '',
    title: '',
    handleClick: null
}

Horizen.propTypes = {
    list: PropTypes.array,
    title: PropTypes.string,
    handleClick: PropTypes.func
};

export default memo(Horizen);
const List = styled.div`
    display: inline-flex;
    align-items: center;
    height: 2em;
    >span:first-of-type{
        flex: 0 0 auto;
        padding: 0.5em 0 ;
        margin-right: 0.5em;
        color: grey;
        font-size: ${style['font-size-m']};
    }
    `
const ListItem = styled.span`
    flex: 0 0 auto;
    font-size: ${style["font-size-m"]};
    padding: 0.3em 0.5em;
    
    &.selected{
        color:${style["theme-color"]};
        border: 1px solid ${style["theme-color"]};
        border-radius: 10px;
        opacity: 0.8;
    }
    `