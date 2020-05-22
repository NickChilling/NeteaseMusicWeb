import { getHotSingerListRequest, getSingerListRequest } from '../../../api/request.js'
import { CHANGE_SINGER_LIST, CHANGE_ENTER_LOADING, CHANGE_PULLUP_LOADING, CHANGE_PULLDOWN_LOADING } from './constants.js';
import { fromJS } from 'immutable';

export const changeSingerList = (data) =>
    ({
        type: CHANGE_SINGER_LIST,
        data: fromJS(data)
    });



export const changePullUpLoading = (data) => ({
    type: CHANGE_PULLUP_LOADING,
    data
});

export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data
});

export const changePullDownLoading = (data) => ({
    type: CHANGE_PULLDOWN_LOADING,
    data
});

export const getHotSingerList = () => {
    return (dispatch) => {
        getHotSingerListRequest(0).then(res => {
            const data = res.artists;
            dispatch(changeSingerList(data));
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false));
            console.log("获取热门数据")
        }).catch(() => {
            console.log("热门歌手数据获取失败");
        })
    }
};

export const refreshMoreHotSingerList = () => {
    return(dispatch, getState)=> {
    const singerList = getState().getIn(['singers','singerList']).toJS();
    const offset = singerList.length;
    getHotSingerListRequest(offset).then(res=>{
        const data = [...singerList,...res.artists];
        dispatch(changeSingerList(data));
        dispatch(changePullUpLoading(false));
    }).catch(()=>{
        console.log('热门歌手数据获取失败');
    })
}
};

export const getSingerList = (type,area, alpha) =>{
    return (dispatch,getState)=>{
        getSingerListRequest(type,area,alpha, 0).then(res=>{
            const data = res.artists;
            dispatch(changeSingerList(data));
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false));
        }).catch(()=>{
            console.log('歌手数据获取失败');
        })
    }
}

export const refreshMoreSingerList = (type,area, alpha)=>{
    return (dispatch, getState)=>{
        const singerList = getState().getIn(['singers','singerList']).toJS();
        const offset = singerList.length;
        getSingerListRequest(type,area, alpha, offset).then(res=>{
            const data = [...singerList,...res.artists];
            dispatch(changeSingerList(data));
            dispatch(changePullUpLoading(false));
        }).catch(()=>{
            console.log('歌手数据获取失败');
        })
    }
}