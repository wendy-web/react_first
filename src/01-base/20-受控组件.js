import React, { Component } from 'react'

export default class App extends Component {
    inputValue = 'wendy';
    state = {
      inputValue: 'wendy'
    }
  render() {
    return (
      <div>
        <h1>受控组件 - input使用 </h1>
        {/* 原生的js中change是失去焦点的时监听，在react中input与change是一样 */}
        <input type='text' value={this.state.inputValue} onChange={(event) => {
            console.log('change',event.target.value);
            this.setState({
              inputValue: event.target.value
            })
        }}/>
        <button onClick={() => {
            console.log(this.state.inputValue)
        }}>登录</button>
        <button onClick={() => {
           this.setState({
            inputValue: ''
           })
        }}>清楚</button>
      </div>
    )
  }
}
