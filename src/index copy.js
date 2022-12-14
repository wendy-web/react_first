import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import {store, persistor} from "../src/08-antd-mobile/redux/store";

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
// import App from './02-advanced/23-新生命周期-数据列表更新记录位置';
// import App from './02-advanced/24-性能优化';
// import App from './02-advanced/25-swiper同步';
// import App from './02-advanced/26-swiper异步';
// import App from './02-advanced/27-swiper组件';

// import App from './03-hooks/01-useState';
// import App from './03-hooks/02-todolist';
// import App from './03-hooks/03-useEffect';
// import App from './03-hooks/04-useEffect2';
// import App from './03-hooks/05-useEffect3案例';
// import App from './03-hooks/07-useback';
// import App from './03-hooks/08-useback2';
// import App from './03-hooks/09-useMemo';
// import App from './03-hooks/10-useRef';
// import App from './03-hooks/11-useRef保存值';
// import App from './03-hooks/12-useContext';
// import App from './03-hooks/13-useReducer';
// import App from './03-hooks/14-useReducer2';
// import App from './03-hooks/16-自定义hook';

// import App from './04-router/App';
// import App from './05-redux/App';
// import App from './06-react-redux/App';

// 07-antd
// import App from './07-antd/01-antd引入';
// import App from './07-antd/02-栅格';
// import App from './07-antd/03-layout';


import App from './08-antd-mobile/App.js';



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

// Provider是redux提供的整体订阅/取消订阅的组件
//渲染App到页面
import {
    createRoot
} from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
const container = document.getElementById('root');
const root = createRoot(container);
// 06-redux的配置
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);

// 07-antd的引入使用
// root.render(
//     <App/>
// );