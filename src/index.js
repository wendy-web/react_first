import React from 'react';
// import App from './09-immutable/01-base';
// import App from './09-immutable/02-map.js';
// import { Provider } from 'mobx-react';
// import App from './10-mobx/04-router/App';
// import store from './10-mobx/04-router/mobx/store';

// import App from './13-redux-sage/App';
// import App from './14-补充/portal传送门/App';
// import App from './14-补充/懒加载/App';
// import App from './14-补充/forwarRef/App';
import App from './14-补充/memo/App';


//渲染App到页面
import {
    createRoot
} from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    // <Provider store={store}>
        <App/>
    // </Provider>
);