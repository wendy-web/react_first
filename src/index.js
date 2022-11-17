import React from 'react';
import ReactDom from 'react-dom';

import App from './01-class的组件/01-class组件'; // 引用导用的类

// jxs = js + xml;
// jxs使用react构造组件，babel进行编译 》 js对象 》 ReactDom.render() 》DOM元素
// ReactDom.render(
//     React.createElement('div', {
//         id: 'aaa',
//         className: 'bbb'
//     }, '0000'),
//     document.getElementById('root')
// );

ReactDom.render(
    <App></App>,
    document.getElementById('root')
);