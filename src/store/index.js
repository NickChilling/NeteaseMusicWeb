import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// todo 啥意思 compose 是从redux引入

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
)); // ! 使用了thunk 这么一个中间件。 为什么要用composeEnhancer包裹？

export default store;