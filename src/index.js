import React from 'react';
import ReactDom from 'react-dom';

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
    <div>112</div>,
    document.getElementById('root')
);