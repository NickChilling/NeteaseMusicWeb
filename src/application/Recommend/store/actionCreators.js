import * as actionTypes from './constants.js';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';
// 定义了action 
// 定义get 方法， 返回函数 ， 该调用axios 获取数据，之后分发数据
export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: fromJS(data)
})

// create action function
export const changeEnterLoading=(data)=>({
    type:actionTypes.CHANGE_ENTER_LOADING,
    data
})
export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data: fromJS(data)
})
// return a function which send xhr and dispatch action
export const getBannerList = ()=>{
    return (dispatch)=>{
        getBannerRequest().then(data=>{
            dispatch(changeBannerList(data.banners));// dispatch action
        }).catch((e)=>{
            console.log(e);
            console.log('轮播图播放错误')
        })
    }
}

export const getRecommendlist = ()=>{
    return (dispatch)=>{
        getRecommendListRequest().then(data=>{
            dispatch(changeRecommendList(data.result));
            dispatch(changeEnterLoading(false));
        }).catch(()=>{
            console.log('推荐歌单传输错误');
        })
    }
};