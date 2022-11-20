import React, { Component } from 'react'

export default class App extends Component {
    state = {
        nameValue: 'wendy'
    }
    // componentWillMont初始化 - 最早的获取到更新的state的值
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps', nextState);
        return {
            nameValue: nextState.nameValue.substring(0, 1).toUpperCase() + nextState.nameValue.substring(1)
        }
    }
  render() {
    return (
      <div>
        <p>新生命周期的使用：getDerivedStateFromProps</p>
        <button onClick={() => {
            this.setState({
                nameValue: 'jams bood'
            })
        }}>更改state的值</button>
        {this.state.nameValue}
      </div>
    )
  }
}
