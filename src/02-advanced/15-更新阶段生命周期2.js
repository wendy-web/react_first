import React, { Component } from 'react'

export default class App extends Component {
  state={
    nameValue: 'wendy'
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("获取最新的状态：", this.state.nameValue, nextState.nameValue);
    if(this.state.nameValue !== nextState.nameValue) {
      return true;
    }
    return false;
  }
  componentDidUpdate(prevProps, prevState){
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
