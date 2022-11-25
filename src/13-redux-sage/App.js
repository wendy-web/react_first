import React, { Component } from 'react';
import store from '../13-redux-sage/redux/store';
// import './01-生成器';
// import './02-可执行生成器';

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          if(store.getState().list.length === 0) {
            console.log('请求数据');
            store.dispatch({
              type: 'get_list'
            });
          } else {
            console.log('获取值', store.getState().list);
          }
        }}>click- ajax异步缓存</button>
      </div>
    )
  }
}
