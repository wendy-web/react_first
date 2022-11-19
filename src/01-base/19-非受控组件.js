import React, { Component } from 'react'

export default class App extends Component {
    inputValue = 'wendy';
    inputRef = React.createRef();
  render() {
    return (
      <div>
        <h1>非受控组件 - input使用defaultValue="wendy"设置默认值 </h1>
        <input type='text' defaultValue="wendy" ref={this.inputRef}/>
        <button onClick={() => {
            console.log(this.inputRef.current.value)
        }}>登录</button>
        <button onClick={() => {
            this.inputRef.current.value = ''
        }}>清楚</button>
      </div>
    )
  }
}
