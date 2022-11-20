/*
 * @Author: wendy 463710868@qq.com
 * @Date: 2022-11-17 19:35:46
 * @LastEditors: wendy 463710868@qq.com
 * @LastEditTime: 2022-11-21 01:22:52
 * @FilePath: /react_first_wendy/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
// import App from './01-base/19-非受控组件';
// import App from './01-base/20-受控组件';
// import App from './01-base/21-受控cinema';
// import App from './01-base/22-受控todolist';

// import App from './02-advanced/01-子传父';
// import App from './02-advanced/02-非受控的选项卡';
// import App from './02-advanced/03-受控的选项卡';
// import App from './02-advanced/04-父子通信版-表单组件';
// import App from './02-advanced/05-re版表单组件';
// import App from './02-advanced/06-中间人模式';
// import App from './02-advanced/07-发布订阅模式';
// import App from './02-advanced/08-发布订阅-案例';
// import App from './02-advanced/09-context';
// import App from './02-advanced/10-插槽';
// import App from './02-advanced/11-插槽版抽屉效果';
// import App from './02-advanced/12-初始化生命周期';
// import App from './02-advanced/13-初始化生命周期案例';
// import App from './02-advanced/14-更新阶段生命周期';
// import App from './02-advanced/15-更新阶段生命周期2';
// import App from './02-advanced/16-更新阶段的案例';
// import App from './02-advanced/17-更新阶段生命周期3';
// import App from './02-advanced/19-销毁阶段生命周期';
// import App from './02-advanced/20-新生命周期';
// import App from './02-advanced/22-新生命周期2';
import App from './02-advanced/23-新生命周期-数据列表更新记录位置';


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