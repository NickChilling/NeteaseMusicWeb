import {fromJS} from 'immutable';
import {getRankListRequest} from '../../../api/request';

// actionTypes

export const CHANGE_RANK_LIST = 'home/rank/CHANGE_RANK_LIST';
export const CHANGE_ENTER_LOADING = "home/rank/CHANGE_ENTER_LOADING";

const changeRankList = (data)=>({
    type:CHANGE_RANK_LIST,
    data:fromJS(data)
})
const changeEnterLoading = (data)=>({
    type:CHANGE_ENTER_LOADING,
    data:data
})
export const getRankList = ()=>{
    return dispatch=>{
        getRankListRequest().then(data=>{
            let list = data && data.list;
            dispatch(changeRankList(list));
            dispatch(changeEnterLoading(false));
        }).catch((err)=>{
            console.log(err);
            throw err;
        })
        
    }
}

const defaultState=fromJS({
    rankList:[],
    enterLoading:true,
});
const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case CHANGE_RANK_LIST:
            return state.set('rankList',action.data);
        case CHANGE_ENTER_LOADING:
            return state.set("enterLoading",action.data);
        default:
            return state; 
    }   
}
export {reducer};