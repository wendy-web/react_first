import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <input placeholder='事件的处理机制' type='text'/>
        <br />
        <button onClick={() => {
          console.log('直接在绑定的执行上');
        }}>
          button的事件 - 方式一:直接在绑定的执行上
        </button>
        <br />
        <button onClick={ this.handleClik }>
          button的事件 - 方式二：调用方法
        </button>

        <button onClick={ this.handleClik2 }>
          button的事件 - 方式二：调用方法 - 箭头函数的定义
        </button>

        <button onClick={ () => {
          this.handleClik();
          this.handleClik2();
        } }>
          button的事件 - 方式三：绑定事件中执行多种的方法
        </button>
      </div>
    );
  }
  handleClik() {
    console.log("绑定事件的处理");
  }
  handleClik2 = () => {
    console.log("使用箭头函数的定义方法");
  }
}
