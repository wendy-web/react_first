import React, { Component } from 'react';

export default class App extends Component {
  nameString = 'wendy';
  inputCreatRef = React.createRef();
  render() {
    return (
      <div>
        <p>直接在属性上设置ref中，但这种方式将被弃用，会引起歧义;！！！！react的严格模式会报错</p>
        <input ref='inputRef' placeholder='事件的处理机制' type='text' value='wendy'/>
        <button onClick={ () => {
          console.log(this.refs.inputRef.value);
        } }>
          获取ref中的值
        </button>
        <hr />

        <p>采用实现定义好的事件处理：</p>
        <input ref={this.inputCreatRef} placeholder='事件的处理机制' type='text' value='wendy - creatRef'/>
        <button onClick={ () => {
          console.log(this.inputCreatRef.current.value);
        } }>
          获取ref中的值
        </button>
      </div>
    );
  }
}
