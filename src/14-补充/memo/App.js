import React, { Component, memo } from 'react'

export default class App extends Component {
    state = {
        nameValue: 'wendy'
    }
  render() {
    return (
      <div>
        <p>momo的属性优化</p>
        <p>name的更改，组件也一并更新；name：{this.state.nameValue}</p>
        <button onClick={() => {
            this.setState({
                nameValue: 'Tan'
            });
        }}>更改name的值</button>
        <Child></Child>
      </div>
    )
  }
}
const Child = memo(() => {
    console.log('进入child')
    return (
        <div>Chid组件</div>
    )
})
