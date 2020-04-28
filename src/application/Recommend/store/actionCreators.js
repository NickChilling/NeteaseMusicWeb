import * as actionTypes from './constants.js';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';
// 定义了action 
// 定义get 方法， 返回函数 ， 该调用axios 获取数据，之后分发数据
export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: fromJS(data)
})

export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data: fromJS(data)
})

export const getBannerList = ()=>{
    return (dispatch)=>{
        getBannerRequest().then(data=>{
            dispatch(changeBannerList(data.data.banners));
        }).catch(()=>{
            console.log('轮播图播放错误')
        })
    }
}

export const getRecommendlist = ()=>{
    return (dispatch)=>{
        getRecommendListRequest().then(data=>{
            dispatch(changeRecommendList(data.result));
        }).catch(()=>{
            console.log('推荐歌单传输错误');
        })
    }
};