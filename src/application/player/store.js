import { fromJS } from "immutable";

const playMode = {
    sequence: 0,
    loop: 1,
    random:2
}
const defaultState = fromJS ({
    fullScreen: false,// 播放器是否为全屏模式
    playing: false, // 当前歌曲是否播放
    sequencePlayList: [], // 顺序列表 (因为之后会有随机模式，列表会乱序，因从拿这个保存顺序列表)
    playList: [],
    mode: playMode.sequence,// 播放模式
    currentIndex: -1,// 当前歌曲在播放列表的索引位置
    showPlayList: false,// 是否展示播放列表
    currentSong: {} 
  });
  export const SET_CURRENT_SONG = 'player/SET_CURRENT_SONG';
  export const SET_FULL_SCREEN = 'player/SET_FULL_SCREEN';
  export const SET_PLAYING_STATE = 'player/SET_PLAYING_STATE';
  export const SET_SEQUECE_PLAYLIST = 'player/SET_SEQUECE_PLAYLIST';
  export const SET_PLAYLIST = 'player/SET_PLAYLIST';
  export const SET_PLAY_MODE = 'player/SET_PLAY_MODE';
  export const SET_CURRENT_INDEX = 'player/SET_CURRENT_INDEX';
  export const SET_SHOW_PLAYLIST = 'player/SET_SHOW_PLAYLIST';
  export const reducer =  (state = defaultState, action) => {
    switch (action.type) {
      case SET_CURRENT_SONG:
        return state.set ('currentSong', action.data);
      case SET_FULL_SCREEN:
        return state.set ('fullScreen', action.data);
      case SET_PLAYING_STATE:
        return state.set ('playing', action.data);
      case SET_SEQUECE_PLAYLIST:
        return state.set ('sequencePlayList', action.data);
      case SET_PLAYLIST:
        return state.set ('playList', action.data);
      case SET_PLAY_MODE:
        return state.set ('mode', action.data);
      case SET_CURRENT_INDEX:
        return state.set ('currentIndex', action.data);
      case SET_SHOW_PLAYLIST:
        return state.set ('showPlayList', action.data);
      default:
        return state;
    }
  }
  export const changeCurrentSong = (data) => ({
    type: SET_CURRENT_SONG,
    data: fromJS (data)
  });
  
  export const changeFullScreen =  (data) => ({
    type: SET_FULL_SCREEN,
    data
  });
  
  export const changePlayingState = (data) => ({
    type: SET_PLAYING_STATE,
    data
  });
  
  export const changeSequecePlayList = (data) => ({
    type: SET_SEQUECE_PLAYLIST,
    data: fromJS (data)
  });
  
  export const changePlayList  = (data) => ({
    type: SET_PLAYLIST,
    data: fromJS (data)
  });
  
  export const changePlayMode = (data) => ({
    type: SET_PLAY_MODE,
    data
  });
  
  export const changeCurrentIndex = (data) => ({
    type: SET_CURRENT_INDEX,
    data
  });
  
  export const changeShowPlayList = (data) => ({
    type: SET_SHOW_PLAYLIST,
    data
  });

