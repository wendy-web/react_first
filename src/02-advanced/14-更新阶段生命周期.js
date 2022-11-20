import React, { Component } from 'react'

export default class App extends Component {
  state={
    nameValue: 'wendy'
  }
  // 由于react16以上的版本的更改，所以会报警告；添加UNSAFE_
  UNSAFE_componentWillUpdate() {
    console.log("更新阶段,将要新；componentWillUpdate:")
  }
  componentDidUpdate(prevProps, prevState){
    // 获取到上一次更改的状态，可对比进行更新事件的初始化
    console.log('获取到old的状态：', prevProps, prevState);
    // 更新后的dom重新渲染完成
    console.log('更新阶段，更新完成；componentDidUpdate');
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => {
          this.setState({
            nameValue: 'stateName'
          })
        }}>click更改state的值</button>
        <p>{this.state.nameValue}</p>
      </div>
    )
  }
}
