import { fromJS } from 'immutable';
import { getAlbumDetailRequest } from '../../../api/request';
const CHANGE_ENTER_LOADING = "ALBUM/CHANGE_ENTER_LOADING";
const CHANGE_ALBUM = "ALBUM/CHANGE_ALBUM";

const defaultState = {
    enterLoading: true,
    album: {}
}

export const changeEnterLoading = (data) => (
    {
        type: CHANGE_ENTER_LOADING,
        data: data,
    }
)
const changeAlbum = (data) => (
    {
        type: CHANGE_ALBUM,
        data: fromJS(data)
    }
)
export const getAlbum = (id) => {
    return (dispatch) => {
        getAlbumDetailRequest(id).then((data) => {
            dispatch(changeAlbum(data));
            dispatch(changeEnterLoading(false));
        }
        )
    }
}
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case changeEnterLoading:
            return state.set('enterLoading', action.data)
        case changeAlbum:
            return state.set('album', action.data);
        default:
            return state;
    }
}