import React, { Component } from 'react';

export default class App extends Component {
  nameString = 'wendy';
  render() {
    return (
      <div>
        <p>
          react采用的是事件代理的模式；并非将事件绑定具体节点上；
          <br />
          获取到的节点信息是模拟的数据对象SyntheticBaseEvent，通过SyntheticBaseEvent.target获取当前的数据对象
        </p>
        <button onClick={this.handleClick3}>事件的代理模式 - 判定的对象</button>
      </div>
    );
  }
  handleClick3 = (event) => {
    console.log('事件的判定root,模拟的数据对象' ,event);
    console.log('事件的判定root，真正的数据对象' ,event.target);
  }
}
