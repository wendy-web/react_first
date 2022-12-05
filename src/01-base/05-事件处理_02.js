import React, { Component } from 'react';

export default class App extends Component {
  nameString = 'wendy';
  render() {
    return (
      <div>
        <input placeholder='事件的处理机制' type='text'/>
        <br />
        <button onClick={() => {
          console.log('直接在绑定的执行上');
          console.log("this的指向问题：",this.nameString);
        }}>
          button的事件 - 方式一:直接在绑定的执行上
        </button>
        <hr />
        <br />

        <p>this的指向需要bind()去更改this的指向</p>
        <button onClick={ this.handleClik1.bind(this)}>
          button的事件 - 方式二：调用方法 -
        </button>
        <br />

        <button onClick={ this.handleClik2 }>
          button的事件 - 方式二：调用方法 - 箭头函数的定义
        </button>
        <br />

        <p>this的指向不会丢失，可直接使用，也可传参； ---- 较推荐</p>
        <button onClick={ () => {
          this.handleClik1();
          this.handleClik2();
        } }>
          button的事件 - 方式三：绑定事件中执行多种的方法
        </button>
      </div>
    );
  }
  handleClik1() {
    console.log("绑定事件的处理");
    console.log("this的指向丢失，这里使用bind更改后找回app中的this：获取值", this.nameString);
  }
  handleClik2 = () => {
    console.log("使用箭头函数的定义方法");
    console.log("this的指向正常：", this.nameString);
  }
}
