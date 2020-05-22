import {combineReducers} from 'redux-immutable';
import {reducer as recommendReducer} from '../application/Recommend/store/index';
import singerReducer from '../application/Singers/store/index';

export default combineReducers({
    recommend:recommendReducer,
    singers:singerReducer.reducer,
});