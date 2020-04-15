import React from 'react';
import './App.css';
import { GlobalStyle } from './style';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { IconStyle } from './assets/iconfont/iconfont';
import {Provider} from 'react-redux';
import store from './store';
import routes from './routes';
function App() {
  return <Provider store={store}>
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </HashRouter>
  </Provider>
}
export default App;
