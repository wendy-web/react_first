import React from 'react';
// import App from './09-immutable/01-base';
import App from './09-immutable/02-map.js';
//渲染App到页面
import {
    createRoot
} from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App/>
);