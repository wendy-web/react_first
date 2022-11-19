import React from 'react';
import ReactDom from 'react-dom';

// 导入的组件是首字母大写的形式 - react会识别是其组件，而非本事的组件
// import App from './01-base/01-class组件.js'; // 引用导用的类
// import App from './01-base/02- 函数式组件';
// import App from './01-base/03-组件的嵌套';
// import App from './01-base/04-组件的样式';
// import App from './01-base/05-事件处理_01';
// import App from './01-base/05-事件处理_02';
// import App from './01-base/05-事件处理_03';
// import App from './01-base/07-ref';
// import App from './01-base/08-state';
// import App from './01-base/09-列表渲染';
// import App from './01-base/10-todolist';
// import App from './01-base/12-选项卡';
// import App from './01-base/15-betterScroll';
// import App from './01-base/16-navbar属性的使用';
// import App from './01-base/17-prop的函数式组件';
import App from './01-base/19-非受控组件';



// jxs = js + xml;
// jxs使用react构造组件，babel进行编译 》 js对象 》 ReactDom.render() 》DOM元素
// ReactDom.render(
//     React.createElement('div', {
//         id: 'aaa',
//         className: 'bbb'
//     }, '0000'),
//     document.getElementById('root')
// );

// react的严格模式,添加react.StrictMode的标签
// ReactDom.render(
//     // <React.StrictMode>
//         <App></App>
//     // </React.StrictMode>
//     ,
//     document.getElementById('root')
// );


//渲染App到页面
import {
    createRoot
} from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render( <App/> );