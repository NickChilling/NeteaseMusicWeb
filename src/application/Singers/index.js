import React, { useState, useEffect } from 'react';
import Horizen from '../../baseUI/horizen-item';
import Loading from '../../baseUI/loading'
import { NavContainer, ListContainer } from './style';
import SingerList from '../../components/singer_list';
import { connect } from 'react-redux';
import { Scroll } from '../../components/scroll';
import {
    getSingerList,
    getHotSingerList,
    changeEnterLoading,
    refreshMoreSingerList,
    changePullDownLoading,
    changePullUpLoading,
    refreshMoreHotSingerList
} from './store/actionCreators';

function Singers(props) {
    const { singerList, pullUpLoading, pullDownLoading, enterLoading } = props;
    const { updateDispatch, pullDownRefreshDispatch, pullUpRefreshDispatch, getHotSingerDispatch } = props;
    let [curType, setCurType] = useState("");
    let [curArea, setCurArea] = useState("");
    let [curAlpha, setCurAlpha] = useState("");
    const singerListJS = singerList.toJS();
    useEffect(() => {
        if (!singerList.length) {
            getHotSingerDispatch();
        }
    }, []);
    const handlePullDown = () => {
        pullDownRefreshDispatch(curType, curArea, curAlpha);
    }
    const handlePullUp = () => {
        let hot = curAlpha === '' && curType === '';
        pullUpRefreshDispatch(curType, curArea, curAlpha, hot);
    }
    let handleUpdateCategory = (val) => {
        const type = Math.floor(val / 1000);
        const area = val % 1000
        setCurType(type);
        setCurArea(area);
        updateDispatch(type, area, curAlpha);
    }
    let handleUpdateAlpha = (val) => {
        setCurAlpha(val);
        updateDispatch(curType, curArea, val);
    }
    return (
        <div>
            <NavContainer>
                <Horizen list={categoryTypes} title="分类" handleClick={handleUpdateCategory} oldVal={curType * 1000 + curArea}></Horizen>
                <Horizen list={alphaTypes} title="首字母" handleClick={handleUpdateAlpha} oldVal={curAlpha}></Horizen>
            </NavContainer>
            <ListContainer>
                <Loading show={enterLoading}></Loading>
                <Scroll direction="vertical" pullUp={handlePullUp} pullDown={handlePullDown} pullUpLoading={pullUpLoading}
                    pullDownLoading={pullDownLoading}>
                    <SingerList singerList={singerListJS}></SingerList>
                </Scroll>
            </ListContainer>
        </div>
    )
}
const mapStateToProps = (state) => ({
    singerList: state.getIn(['singers', 'singerList']),
    enterLoading: state.getIn(['singers', 'enterLoading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pageCount: state.getIn(['singers', 'pageCount'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        getHotSingerDispatch() {
            dispatch(getHotSingerList());
        },
        updateDispatch(type, area, alpha) {
            dispatch(changeEnterLoading(true));
            dispatch(getSingerList(type, area, alpha));
        },
        pullUpRefreshDispatch(type, area, alpha, hot) {
            dispatch(changePullUpLoading(true));
            if (hot) {
                dispatch(refreshMoreHotSingerList());
            } else {
                dispatch(refreshMoreSingerList(type, area, alpha));
            }
        },
        pullDownRefreshDispatch(type, area, alpha) {
            dispatch(changePullDownLoading(true));
            if (type === '' && alpha === '') {
                dispatch(getHotSingerList());
            } else {
                dispatch(getSingerList(type, area, alpha));
            }
        }
    }
}
const alphaTypes = [...Array(26)].map((item, index) => {
    let code = 'A'.charCodeAt() + index;
    return {
        name: String.fromCharCode(code),
        key: String.fromCharCode(code)
    }
});
let category = { "华语": 7, "欧美": 96, "日本": 8, "韩国": 16, "其他": 0 };
let singer = ["男", "女", "组合"]
const categoryTypes = singer.map((item, index) => {
    let res = [];
    for (let j in category) {
        res.push({
            name: j + item,
            key: (index + 1) * 1000 + category[j]
        });
    }
    return res;
}).flat(Infinity);
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));