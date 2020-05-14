import React, { useState } from 'react';
import Horizen from '../../baseUI/horizen-item';
import { NavContainer, ListContainer } from './style';
import SingerList from '../../components/singer_list';
import {connect} from 'react-redux';
import {getSingerList, 
    getHotSingerList, 
    changeEnterLoading, 
    changePageCount,
    refreshMoreSingerList, 
    changePullDownLoading,
    changePullUpLoading,
    refreshMoreHotSingerList} from './store/actionCreators';

function Singers(props) {
    const {categoryTypes, alphaTypes} = props;
    const {updateDispatch}  = props;
    let [curCategory, setCurCategory] = useState("");
    let [curAlpha, setCurAlpha] = useState("");

    let handleUpdateCategory = (val) => {
        setCurCategory(val);
        updateDispatch(val, curAlpha);
    }
    let handleUpdateAlpha = (val) => {
        setCurAlpha(val);
        updateDispatch(curCategory,val);
    }
    return (
        <div>
            <NavContainer>
                <Horizen list={categoryTypes} title="分类" handleClick={handleUpdateCategory} oldVal={curCategory}></Horizen>
                <Horizen list={alphaTypes} title="首字母" handleClick={handleUpdateAlpha} oldVal={curAlpha}></Horizen>
            </NavContainer>
            <ListContainer>
                <SingerList></SingerList>
            </ListContainer>
        </div>
    )
}
const mapStateToProps = (state) => ({
    singerList: state.getIn(['singers','singerList']),
    enterLoading: state.getIn(['singers','enterLoading']),
    pullUpLoading: state.getIn(['singers','pullUpLoading']),
    pullDownLoading: state.getIn(['singers','pullDownLoading']),
    pageCount: state.getIn(['singers','pageCount'])
});

const mapDispatchToProps = (dispatch)=>{
    return {
        getHotSingerDispatch(){
            dispatch(getHotSingerList());
        },
        updateDispatch(category, alpha){
            dispatch(changePageCount(0));
            dispatch(changeEnterLoading(true));
            dispatch(getSingerList(category,alpha));
        },
        pullUpRefreshDispatch(category, alpha, hot, count){
            dispatch(changePullUpLoading(true));
            dispatch(changePageCount(count+1));
            if(hot){
                dispatch(refreshMoreHotSingerList());
            } else{
                dispatch(refreshMoreSingerList(category,alpha));
            }
        },
        pullDownRefreshDispatch(category,alpha){
            dispatch(changePullDownLoading(true));
            dispatch(changePageCount(0));
            if(category === '' && alpha ===''){
                dispatch(getHotSingerList);
            } else{
                dispatch(getSingerList(category,alpha));
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Singers));